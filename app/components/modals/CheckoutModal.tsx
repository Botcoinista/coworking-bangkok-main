import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useRouter } from "next/navigation";
import useCheckoutModal from "@/app/hooks/useCheckoutModal";
import ListingReservation from "../listings/ListingReservation";
import Calender from "../inputs/Calender";
import { differenceInCalendarDays } from "date-fns";
import { Range } from "react-date-range";
import { SafeListing, SafeUser } from "@/app/types";

import BookingModal from "./BookingModal";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";
import { on } from "events";
import { useStateManager } from "react-select";
import ListingHead from "../listings/ListingHead";
import ListingInfo from "@/app/listings/[listingId]/listingclientleft/ListingClientLeft";
import { categories } from "../navbar/Categories";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface CheckoutModalProps {
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const CheckoutModal = ({ listing, currentUser }: CheckoutModalProps) => {
  const { isOpen, onClose } = useCheckoutModal();
  // const modalRef = useRef(null);
  const router = useRouter();
  const loginModal = useLoginModal();

  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [totalPrice, setTotalPrice] = useState(100); // Example base price
  const [disabledDates, setDisabledDates] = useState([]); // You would get this from props or context
  const [isLoading, setIsLoading] = useState(false);

  const onCreateReservation = useCallback(() => {
    onClose();
    if (!currentUser) {
      loginModal.onOpen();
      return;
    }

    setIsLoading(true);

    axios
      .post("/api/reservations", {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing.id,
      })
      .then(() => {
        toast.success("Reservation created successfully");
        setDateRange(initialDateRange);
        //redirect to accounts
        router.push("/trips");
        onClose();
      })
      .catch(() => {
        toast.error("Reservation failed");
        setIsLoading(false);
      });
  }, [totalPrice, dateRange, listing?.id, router, loginModal, currentUser]);

  // Replicate date change effect
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <BookingModal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onClose}
      body={
        <div className="flex px-10">
          <div className="border-[1px]flex bg-rose-500">
            <div className="text-seventyeight flex justify-center font-bold leading-none">
              <h1>Choose dates</h1>
            </div>
            <ListingReservation
              price={listing.price}
              dateRange={dateRange}
              totalPrice={totalPrice}
              onChangeDate={(value) => setDateRange(value)}
              onSubmit={onCreateReservation}
              disabled={isLoading}
              disabledDates={disabledDates}
            />
            <div className=" text-3xl font-bold flex justify-center gap-2 mt-8">
              <p>Choose Payment Method</p>
              <div className="">
                <AiFillCreditCard size={30} />
              </div>
            </div>

            <div className="flex gap-24 justify-center mt-2">
              <div className="">
                <FaCcPaypal size={80} style={{ color: "#FFC703" }} />
              </div>

              <div className="flex ">
                <div>
                  <FaCcVisa size={80} style={{ color: "#375BDB" }} />
                </div>
                <div>
                  <FaCcMastercard size={80} style={{ color: "#D34121" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col space-y-4 p-4">
            <div className="">
              <ListingHead
                imageSrc={listing.imageSrc}
                locationValue={listing.locationValue}
                id={listing.id}
                currentUser={currentUser}
              />
            </div>
            <div className="">
              <ListingInfo
                title={listing.title}
                user={listing.user}
                category={category}
                locationValue={listing.locationValue}
              />
            </div>
          </div>
        </div>
      }
    />
  );
};
export default CheckoutModal;

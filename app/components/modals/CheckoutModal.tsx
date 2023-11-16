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
import { differenceInCalendarDays } from "date-fns";
import { Range } from "react-date-range";
import { SafeListing, SafeUser } from "@/app/types";
import BookingModal from "./BookingModal";
import { FaCcMastercard, FaCcPaypal, FaCcVisa, } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";
import ListingHead from "../listings/ListingHead";
import ListingInfo from "@/app/listings/[listingId]/listingclientleft/ListingClientLeft";
import { categories } from "../navbar/Categories";
import ReservationButton from "../ReservationButton";


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

  const categoriesForListing = useMemo(() => {
    // The useMemo hook is used to compute a value and memoize it.
    // It will only recompute the value when the dependencies (in this case, [listing.category]) change.
  
    return categories.filter((item) => listing.category.includes(item.label));
    // The code inside the useMemo function filters the 'categories' array based on a condition.
    // It iterates through each 'item' in the 'categories' array and checks if the 'listing.category'
    // includes the 'item.label'. If it does, the 'item' is included in the result.
  
  }, [listing.category]);
  // The second argument to useMemo is an array of dependencies.
  // When any of these dependencies change, useMemo will recompute the value.
  // In this case, 'categoriesForListing' will be recomputed whenever 'listing.category' changes.
  
  

  return (
    <BookingModal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onClose}
      body={
        <div className="flex flex-col md:flex-row overflow-y-auto">
          {/* Left side */}
          <div>
            
          </div>
          <div className="md:w-1/2 flex justify-between flex-col order-last md:order-first gap-">
          <div>
            <div className="mxs:text-thirtysix mobile:text-fortyeight lg:text-fortyeight flex justify-center font-bold leading-none">
              <h1 className="text-darkgray mb-4">Choose dates</h1>
            </div>
            <ListingReservation
              dateRange={dateRange}
              onChangeDate={(value) => setDateRange(value)}
              disabledDates={disabledDates}
            />

            </div>
            <div>

            <div className=" mxs:text-twenty mobile:text-twentyfour font-bold flex justify-center gap-2 mt-8 text-darkgray">
              <p>Choose Payment Method</p>
              <AiFillCreditCard size={30} />
            </div>
            <div className="flex gap-24 justify-center mt-2">
              <div className="widerIcon">
                <FaCcPaypal size={60} style={{ color: "#FFC703" }} />
              </div>

              <div className="flex widerIcon">
                <div>
                  <FaCcVisa size={60} style={{ color: "#375BDB" }} />
                </div>
                <div>
                  <FaCcMastercard size={60} style={{ color: "#D34121" }} />
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* // Right side */}
          <div className="w-full md:w-1/2 flex space-between flex-col px-4 order-first md:order-last">
            <div className="">
              <ListingHead
                imageSrc={[listing.imageSrc[0]]}
                locationValue={listing.locationValue}
                id={listing.id}
                currentUser={currentUser}
              />
            </div>

            <div className="text-xl">
              <ListingInfo
                title={listing.title}
                user={listing.user}
                categories={categoriesForListing}
                locationValue={listing.locationValue}
              />
              <div className="order-first md:order-last">
                <ReservationButton
                  disabled={isLoading}
                  totalPrice={totalPrice}
                  onSubmit={onCreateReservation}
                />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};
export default CheckoutModal;

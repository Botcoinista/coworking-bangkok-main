import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import useOutsideClick from "@/app/hooks/useOutsideClick";
import { useRouter } from "next/navigation";
import useCheckoutModal from "@/app/hooks/useCheckoutModal";
import ListingReservation from "../listings/ListingReservation";
import Calender from "../inputs/Calender";
import { differenceInCalendarDays } from "date-fns";
import { Range } from "react-date-range";
import { SafeListing, SafeUser } from "@/app/types";
import Button from "../Button";
import BookingModal from "./BookingModal";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";

interface CheckoutModalProps {
  // Other props...
  listing: SafeListing & {
    user: SafeUser;
    // Add any required properties that the listing object should have
  };
  onSubmit: () => void;
  disabled: boolean;
}

const CheckoutModal = ({ listing, onSubmit, disabled }: CheckoutModalProps) => {
  const { isOpen, onClose } = useCheckoutModal();
  const modalRef = useRef(null);
  const router = useRouter();

  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [totalPrice, setTotalPrice] = useState(100); // Example base price
  const [disabledDates, setDisabledDates] = useState([]); // You would get this from props or context
  const [isLoading, setIsLoading] = useState(false);

  // Replicate date change effect
  useEffect(() => {
    if (dateRange.endDate && dateRange.startDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );
      setTotalPrice(dayCount * 100);
    }
  }, [dateRange]);

  // Handle reservation submission
  const handleReservationSubmit = () => {
    setIsLoading(true);
    // Make API call to create reservation
    // ...
  };

  // Close modal and clear state
  const handleModalClose = () => {
    onClose();
    // Optionally reset state
  };

  return (
    <BookingModal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onClose}
      body={
        <div className="flex px-10">
          <div className="w-1/2 border-[1px]flex">
            <div className="text-seventyeight flex justify-center font-bold ">
              <h1>Choose dates</h1>
            </div>
            <ListingReservation
              price={100} // Replace with actual price per night
              dateRange={dateRange}
              totalPrice={totalPrice}
              onChangeDate={(value) => setDateRange(value)}
              onSubmit={handleReservationSubmit}
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

              <div className="widerIcon">
              <FaCcPaypal size={80} style={{ color: '#FFC703'}} />
              </div>

              <div className="flex widerIcon">
                <div>
                  <FaCcVisa size={80} style={{ color: '#375BDB' }}/>
                </div>
                <div>
                  <FaCcMastercard size={80} style={{ color: '#D34121'}} />
                </div>
              </div>

            </div>

            <div
              // onClick={() => router.push('/trips')}
              // className="text-center text-seventyeight font-bold p-20 cursor-pointer"
              // ref={modalRef}
            ></div>
          </div>
          <div className="w-1/2 border-[1px]">
            <Button disabled={disabled} label="korv" onClick={onSubmit} />
          </div>
        </div>
      }
    />
  );
};
export default CheckoutModal;

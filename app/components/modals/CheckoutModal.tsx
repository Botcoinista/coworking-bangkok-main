import React, { useRef } from "react";
import useCheckoutModal from "@/app/hooks/useCheckoutModal";
import Modal from "./Modal";
import useOutsideClick from "@/app/hooks/useOutsideClick";
import { useRouter } from "next/navigation";

const CheckoutModal = () => {
  const { isOpen, onClose } = useCheckoutModal();
  const modalRef = useRef(null); // Reference to the modal container
  const router = useRouter();

  // Use the hook to close the modal if a click is detected outside of the modalRef element
  useOutsideClick(modalRef, () => {
    if (isOpen) {
      onClose(); // This should be the method that toggles the `isOpen` state in `useCheckoutModal`
    }
  });

  // Early return if modal is not open
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onClose} // Assuming that this is the intended behavior
      actionLabel="Close"
      body={
        <div
          onClick={() => router.push("/trips")}
          className="text-center text-seventyeight font-bold p-20 cursor-pointer"
          ref={modalRef}
        >
          <h1>
            Thank You for Your <span className="text-yellow">booking</span>
          </h1>
        </div>
      }
    />
  );
};

export default CheckoutModal;

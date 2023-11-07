import React, { useRef, useEffect } from 'react';
import useCheckoutModal from '@/app/hooks/useCheckoutModal';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import useConfirmationModal from '@/app/hooks/useConfirmationModal';



const ConfirmationModal = () => {
  const { isOpen, onClose } = useConfirmationModal();
  const modalRef = useRef(null); // Reference to the modal container
  const router = useRouter();
  useEffect(() => {
    // Automatically close the modal and redirect to the "trips" page after 3 seconds
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        onClose(); // Close the modal
        router.push('/trips'); // Redirect to the "trips" page
      }, 2000); // 2000 milliseconds = 3 seconds
      // Clear the timeout if the modal is closed before the timeout finishes
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, onClose, router]);
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
          className="text-center text-seventyeight font-bold p-20 cursor-pointer"
          ref={modalRef}>
          <h1>
            Thank You for Your <span className="text-yellow">booking</span>
          </h1>
        </div>
      }
    />
  );
};
export default ConfirmationModal;
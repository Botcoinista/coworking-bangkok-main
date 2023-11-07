import React, { useRef } from 'react';
import Modal from './Modal';
import useOutsideClick from '@/app/hooks/useOutsideClick';
import { useRouter } from 'next/navigation';
import useCheckoutModal from '@/app/hooks/useCheckoutModal';
const CheckoutModal = () => {
  const { isOpen, onClose } = useCheckoutModal();
  const modalRef = useRef(null);
  const router = useRouter();
  useOutsideClick(modalRef, () => {
    if (isOpen) {
      onClose();
    }
  });
  if (!isOpen) return null;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onClose}
      actionLabel="CheckoutModal Booking BTN"
      body={
        <div className="flex">
          <div className="w-1/2 border-[1px]">
            <div
              onClick={() => router.push('/trips')}
              className="text-center text-seventyeight font-bold p-20 cursor-pointer"
              ref={modalRef}>
              <h1>Choose dates</h1>
            </div>
          </div>
          <div className="w-1/2 border-[1px]">Korv</div>
        </div>
      }
    />
  );
};
export default CheckoutModal;

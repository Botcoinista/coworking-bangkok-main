'use client';
import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}
const BookingModal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: BookingModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="
        justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70
    ">
        <div
          className="
            relative
            w-full
            md:w-3/5
            lg:w-3/5
            xl:w-/5
            my-6
            mx-auto
            h-full
            lg:h-auto
            md:h-auto
            ">
          {/*content*/}
          <div
            className={`
            translate
            duration.300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
            `}>
            <div
              className="
                        translate
                        h-full
                        lg:h-auto
                        md:h-auto
                        border-0
                        rounded-tr-2xl
                        rounded-bl-2xl
                        shadow-lg
                        relative
                        flex
                        flex-col
                        w-full
                        bg-white
                        outline-none
                        focus:outline-none
                    ">
              {/*header*/}
              <div
                className="
                  flex
                  items-center
                  p-6
                  rounder-t
                  justify-center
                  relative
                
                  ">
                <button
                  onClick={handleClose}
                  className="
                    p-1
                    border-0
                    hover:opacity-70
                    transition
                    absolute
                    right-5
                    mt-6
                    ">
                  <IoMdClose size={28} />
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto flex flex-col md:flex-row">
                {body}
              </div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookingModal;
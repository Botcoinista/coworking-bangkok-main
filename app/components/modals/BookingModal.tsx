"use client";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
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
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70
        
    "
      >
        <div
          className="
          flex
          justify-center
          md:items-center
          mobile:items-start
          
            "
        >
          {/*content*/}
          <div>
            <div
              className="
                        translate
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
                        p-4
                      
                    "
            >
              {/*header*/}
              <div
                className="
                  flex
                  items-center
                  pt-4
                  rounder-t
                  justify-center
                  relative
                
                  "
              >
                <button
                  onClick={handleClose}
                  className="
                    
                    border-0
                    hover:opacity-70
                    transition
                    absolute
                    right-2
                    z-10
                    "
                >
                  <IoMdClose size={32} />
                </button>
              </div>
              {/*body*/}
              <div
                className="relative py-8 flex-auto flex flex-col md:flex-row 
              
              "
              >
                {body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookingModal;

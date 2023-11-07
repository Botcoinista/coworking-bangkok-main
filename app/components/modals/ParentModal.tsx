
import { useState } from 'react';
import CheckoutModal from './CheckoutModal';
import ConfirmationModal from './ConfirmationModal';

interface ModalProps {
    onClose: () => void;
  }
  

const ParentComponent = ({onClose}: ModalProps) => {
    const [isCheckoutModal, setCheckoutModal] = useState(false);
    const [isConfirmationModal, setConfirmationModal] = useState(false);


  const openCheckoutModal = () => {
    setCheckoutModal(true);
    setConfirmationModal(false);
  }

  const openConfirmationModal = () => {
    setCheckoutModal(false);
    setConfirmationModal(true);
  };

  return (
    <>

    <button onClick={openCheckoutModal}>Open CheckoutModal</button>
    <button onClick={openConfirmationModal}>Open Confirmation Modal</button>

      {isCheckoutModal && <CheckoutModal onClose={() => setCheckoutModal(false)} />}
      {isConfirmationModal && <ConfirmationModal onClose={() => setConfirmationModal(false)} />}
    </>
  );
};

export default ParentComponent;

import React from 'react';
import Button from "@/app/components/Button";
import Pricing from "@/app/components/Pricing";
import Ratings from "@/app/components/Ratings";
import useCheckoutModal from "@/app/hooks/useCheckoutModal";
import CheckoutModal from '@/app/components/modals/CheckoutModal';


const ListingClientRight = () => {
  const { isOpen, onOpen } = useCheckoutModal();
  
  return (
    <div>
      <Pricing />
      <Button label="Book Now" onClick={onOpen} />
      {isOpen && <CheckoutModal />}
      <Ratings />
    </div>
  );
};

export default ListingClientRight;

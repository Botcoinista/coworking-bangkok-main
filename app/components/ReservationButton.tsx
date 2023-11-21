
import useConfirmationModal from '../hooks/useConfirmationModal';
import Button from './Button'


interface ReservationButtonProps {
    disabled: boolean;
    totalPrice: number;
    onSubmit: () => void;
    }


const ReservationButton = ({ disabled, totalPrice, onSubmit }: ReservationButtonProps) => {

    const { isOpen, onOpen, onClose } = useConfirmationModal();

    const handleButtonClick = () => {
      // Open the confirmation modal
      onOpen();
      // Call the onSubmit function after a delay (you can adjust the delay as needed)
      setTimeout(() => {
        onSubmit();
        onClose();
      }, 3000); 
    };

  return (
    <>
    
<div className="
py-2
flex
flex-row
items-center
justify-between
font-semibold
text-lg
font-poppins
">
    <div>
        Total
    </div>
    <div>
         {totalPrice} THB
    </div>

</div>
    <div className="">
    <Button 
        disabled={disabled}
        label="Book now"
        onClick={handleButtonClick}
    />
</div>
    </>
  )
}

export default ReservationButton
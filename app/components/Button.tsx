'use client';

import { IconType } from "react-icons";

interface ButtonProps {
    label: string | undefined;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button = ({ label, onClick, disabled, outline, small, icon: Icon }: ButtonProps) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={`
      relative
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-tr-2xl
      rounded-bl-2xl
      hover:opacity-80
      transition
      text-twentyfour
      w-full
      font-poppins
    
   
    ${outline ? 'bg-white hover:bg-black' : 'bg-lightGreen hover:bg-darkGreen'}
    ${outline ? 'border-black hover:border-black' : 'border-lightGreen hover:border-darkGreen'}
    ${outline ? 'text-black hover:text-white' : 'text-white'}
    ${small ? 'py-5' : 'py-3'}
    ${small ? 'text-sm' : 'text-md'}
    ${small ? 'font-light' : 'font-semibold'}
    ${small ? 'border-[1px]' : 'border-2'}
    `}>
      {Icon && (
        <Icon
          size={24}
          className="
        absolute
        left-4
        top-3
        
        "
        />
      )}
      {label}
    </button>
  );
}

export default Button
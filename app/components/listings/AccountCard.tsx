"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { BsFillPencilFill } from "react-icons/bs";
import Button from "../Button";

interface AccountCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const AccountCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}: AccountCardProps) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    () => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
<div
  onClick={() => router.push(`/listings/${data.id}`)}
  className="flex sm:flex-row md:flex-row lg:flex-row bg-white p-6 mb-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
>
<div
    className="relative rounded-lg overflow-hidden mr-6"
    style={{
      minWidth: '300px',
      width: '300px', // You can adjust this value
      height: '250px',
    }}
  >
    <Image
      src={data.imageSrc}
      alt="Listing"
      layout="fill"
      objectFit="cover"
    />
  </div>
  
  <div className="flex flex-col justify-between flex-grow">
    <div>
      <div className="flex flex-row justify-between">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{data.title}</h2>
       
       <div className="flex items-center space-x-2 text-gray-600">
      </div>
        <BsFillPencilFill size={40} />
      </div>
      <hr className="mb-8 mt-8" />
      <p className="text-gray-600 mb-2">{data.description}</p>
    </div>
    
    <div className="flex justify-between items-center">
      <p className="text-black mb-2 font-bold">{reservationDate}</p>
      <span className="text-black font-bold">{price} THB</span>
    </div>
  </div>
</div>

  
  );
};

export default AccountCard;

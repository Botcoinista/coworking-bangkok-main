"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { BsFillPencilFill } from "react-icons/bs";

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

  // State to manage the visibility of full description
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle the description visibility
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

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

    // return `${format(start, "PP")} - ${format(end, "PP")}`;
    return `${format(start, 'MMM d')} - ${format(end, 'MMM d')}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="flex bg-white sm:p-6 md:p-6 lg:p-6 mobile:p-2 rounded-lg custom-shadow transition-shadow cursor-pointer"
    >
      <div
        className="
       
      aspect-square
      relative
      overflow-hidden
      rounded-tr-3xl
      rounded-bl-3xl
      mr-4
    "
      >
        <Image
          fill
          alt="Listing"
          src={data.imageSrc[0]}
          className="
        object-cover
        h-full
        w-full
        group-hover:scale-105
        transition
      "
        />
      </div>


      <div className="flex flex-col justify-between flex-grow ">
      <div className="flex flex-row justify-between">
            <h2 className="text-mobile sm:text-twenty md:text-thirtysix lg:text-fortyeight leading-none font-bold mb-2">
              {data.title}
            </h2>
            <div className="flex items-center space-x-2 mb-20">
              <hr />
            </div>
            <BsFillPencilFill className="w-5 h-5 sm:w-8 sm:h-8" /> 
          </div>
          {/* Description area with scrollable functionality */}
          <div style={{ maxHeight: '150px', overflow: 'auto' }}>
            <p className="mb-2 max-w-md hidden md:block md:text-twenty lg:text-twentyfour ">
              {data.description}
            </p>
          </div>


        <div className="flex justify-between items-center mobile:text-custom-small md:text-twenty lg:text-twentyfour ">
          <p className="text-black-500 mb-2">{reservationDate}</p>
          <span className="text-black-500 font-bold ">${price} THB</span>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;

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
      className="flex bg-white p-6 mb-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow">
      <div
        className="
      aspect-square
      relative
      overflow-hidden
      rounded
      mr-4
    "
        style={{
          height: '331px',
          width: '468px',
        }}>
        <Image
          fill
          alt="Listing"
          src={data.imageSrc}
          className="
        object-cover
        h-full
        w-full
        group-hover:scale-105
        transition
      "
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {data.title}
            </h2>
            <div className="flex items-center space-x-2 text-gray-600 mb-20"></div>
            <BsFillPencilFill size={40} />
            {/* Add more icons or actions here as needed */}
          </div>
          <hr />
          <p className="text-gray-600 mb-2 max-w-md ">
            {data.description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-black-500 font-bold mb-2">{reservationDate}</p>
          <span className="text-black-500 font-bold">${price} THB</span>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;

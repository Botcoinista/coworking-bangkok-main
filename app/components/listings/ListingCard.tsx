"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../Button";
import RatingStar from "../RatingStar";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}: ListingCardProps) => {
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

    return `${format(start, "PP")} - ${format(end, 'PP')}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="
        col-span-1
        cursor-pointer
        group
        "
    >
      <div
        className="
        flex
        flex-col
        border-2
        border-gray-900
        rounded-tr-4xl
        rounded-bl-4xl
        overflow-hidden
        h-full
        "
        style={{
          height: "600px",
        }}
      >
        <div
          className="
            h-full
            relative   
            "
        >
          <Image
            fill
            src={data.imageSrc}
            alt="Listing"
            className="
            object-cover
            transition
            group-hover:scale-110   
            "
          />
          <div className="absolute top-2 left-2">
            <RatingStar />
          </div>
          <div className="absolute top-2 right-2">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 58.85%, rgba(255, 255, 255, 0.00) 100%)",
            }}
            className="absolute bottom-2 left-0 right-0 mx-2 border rounded-tr-3xl rounded-bl-3xl p-3 bg-red-100"
          >
            <div className="font-rajhadi font-semibold text-lg mb-3">
              {location?.region}, {location?.label}
            </div>
            <div className="font-rajhadi flex flex-row gap-1 font-light text-neutral-800 mb-3">
              <IoLocationOutline /> {reservationDate || data.category}
            </div>
            <div className="flex flex-row items-center gap-1 bg-white p-1 rounded-tr-2xl rounded-bl-2xl w-1/2 justify-center ml-auto">
              <div className="font-poppins font-bold">${price}</div>
              {!reservation && (
                <div className="font-poppins font-bold">/Week</div>
              )}
            </div>
          </div>
        </div>
        <div></div>

        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel()}
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard;

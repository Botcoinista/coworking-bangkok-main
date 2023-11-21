"use client";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";
import AccountCard from "../components/listings/AccountCard";
import { BiSolidUser } from "react-icons/bi";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser: SafeUser | null;
}
const TripsClient = ({ reservations, currentUser }: TripsClientProps) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <div className="flex text-darkgray gap-4 sm:text-fiftysix md:text-sixty lg:text-seventyeight mb-8">
        <div className="">
          <BiSolidUser className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-11 lg:h-11" />
        </div>
        <Heading title="Account" />
      </div>
      <div className="bg-darkgray">
        <div className="ml-5 text-white p-2 font-bold text-mobile-twentyfour lg:text-thirtyeight mb-6">
          Bookings
        </div>
      </div>
      <div
        className="
                flex
                flex-col
                gap-8
        "
      >
        {reservations.map((reservation) => (
          <AccountCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            onAction={() => onCancel(reservation.id)}
          />
        ))}
      </div>
    </Container>
  );
};
export default TripsClient;

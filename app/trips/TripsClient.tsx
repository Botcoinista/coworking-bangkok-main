"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";
import toast from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";
import { IoLocationOutline } from "react-icons/io5";
import AccountCard from "../components/listings/AccountCard";
import { BiSolidUser } from "react-icons/bi";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
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
      {/* <BiSolidUser /> */}
      <div
        className="
          flex
          flex-col
          gap-8
        
          "
          >
      <Heading title="Account" subtitle="Bookings" />
        {reservations.map((reservation) => (
          <AccountCard data={reservation.listing}
          reservation={reservation}
          key={reservation.id}
          />
          // <ListingCard
          //     key={reservation.id}
          //     data={reservation.listing}
          //     reservation={reservation}
          //     actionId={reservation.id}
          //     onAction={onCancel}
          //     disabled={deletingId === reservation.id}
          //     actionLabel="Cancel reservation"
          //     currentUser={currentUser}
          // />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;

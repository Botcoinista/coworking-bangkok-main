"use client";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "../types";
import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";
import { set } from "date-fns";

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const ReservationsClient = ({
  reservations,
  currentUser,
}: ReservationsClientProps) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    async (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        })
        .catch(() => {
          toast.error("Failed to cancel reservation");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your office spaces" />
      <div
        className="
       mt-10
         grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
      "
      >
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};
export default ReservationsClient;

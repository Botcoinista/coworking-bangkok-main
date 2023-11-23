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
      <div className="flex xs:flex-col mxs:flex-col mb-10 gap-2 text-darkgray xs:text-thirtysix sm:text-fiftysix md:text-sixty lg:text-seventyeight justify-between ">
        <div className="flex">
          <BiSolidUser className="w-11 h-11 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11" />
          <Heading title="Account" />
        </div>
        {currentUser && (
          <div className="flex">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <div>
              {/* Display information about the current user */}
              <p className="font-poppins font-semibold text-custom-base lg:text-twenty">
                {currentUser.email}
              </p>
              {/* Add other user information as needed */}
            </div>
          </div>
        )}
      </div>
      <div className="bg-darkgray">
        <div className="ml-5 text-white p-2 mb-5 font-bold md:text-twentyfour lg:text-thirtysix">
          Bookings
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {reservations.map((reservation) => (
          <AccountCard
            data={reservation.listing}
            key={reservation.id}
            reservation={reservation}
            onAction={() => onCancel(reservation.id)}
          />
        ))}
      </div>
    </Container>
  );
}
export default TripsClient

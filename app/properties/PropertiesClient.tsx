"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeListing, SafeUser } from "../types";
import toast from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";
import { IoLocationOutline } from "react-icons/io5";

interface PropertiesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const PropertiesClient = ({ listings, currentUser }: PropertiesClientProps) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState("")

    const onCancel = useCallback((id: string) => {
        setDeletingId(id)

        axios.delete(`/api/listings/${id}`)
        .then(() => {
            toast.success("Listing deleted successfully")
            router.refresh()
        })
        .catch((error) => {
            toast.error(error?.response?.data?.error)
        })
        .finally(() => {
            setDeletingId("")
        });
    }, [router])

  return (
    <Container>
      <Heading title="Properties" subtitle="List of your properties" />
      <div
        className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-8
            "
      >
        {listings.map((listing) => (
            <ListingCard
                key={listing.id}
                data={listing}
                actionId={listing.id}
                onAction={onCancel}
                disabled={deletingId === listing.id}
                actionLabel="Delete property"
                currentUser={currentUser}
            />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient

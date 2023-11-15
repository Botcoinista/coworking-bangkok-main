"use client";

import { useMemo } from "react";

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/listings/[listingId]/listingclientleft/ListingClientLeft";

import ListingClientRight from "../listingclientright/ListingClientRight";

import dynamic from "next/dynamic";
import useCountries from "@/app/hooks/useCountries";

const Map = dynamic(() => import("../../../components/Map"), {
  ssr: false,
});


interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
  locationValue: string;
}

const ListingClient = ({
  listing,
  currentUser,
  // reservations = [],
  locationValue,
}: ListingClientProps) => {
  
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-4XL mx-auto">
        <div className="flex flex-col gap-12">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-7
            md:gap-10         
          "
          >
            <div className="md:col-span-4">
              <ListingInfo
                title={listing.title}
                user={listing.user}
                category={category}
                description={listing.description}
                locationValue={listing.locationValue}
              />
              <div className="md:order-first order-last md:col-span-4 mt-20">
                <Map center={coordinates} />
              </div>
            </div>

            <div
              className="
              mb-10
              md:order-last
              md:col-span-3             
              "
            >
              <div className=" md:col-span-3">
                <ListingClientRight
                  currentUser={currentUser}
                  listing={listing}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;

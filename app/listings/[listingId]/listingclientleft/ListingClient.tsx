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
 

  const categoriesForListing = useMemo(() => {
    // The useMemo hook is used to compute a value and memoize it.
    // It will only recompute the value when the dependencies (in this case, [listing.category]) change.
  
    return categories.filter((item) => listing.category.includes(item.label));
    // The code inside the useMemo function filters the 'categories' array based on a condition.
    // It iterates through each 'item' in the 'categories' array and checks if the 'listing.category'
    // includes the 'item.label'. If it does, the 'item' is included in the result.
  
  }, [listing.category]);
  // The second argument to useMemo is an array of dependencies.
  // When any of these dependencies change, useMemo will recompute the value.
  // In this case, 'categoriesForListing' will be recomputed whenever 'listing.category' changes.
  
    

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
                categories={categoriesForListing}
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

"use client";

import { useMemo } from "react";

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";

import dynamic from "next/dynamic";
import useCountries from "@/app/hooks/useCountries";
import Pricing from "@/app/components/Pricing";
import Button from "@/app/components/Button";
import CheckoutModal from "@/app/components/modals/CheckoutModal";
import ConfirmationModal from "@/app/components/modals/ConfirmationModal";
import Ratings from "@/app/components/Ratings";
import useCheckoutModal from "@/app/hooks/useCheckoutModal";

const Map = dynamic(() => import("../../components/Map"), {
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

  locationValue,
}: ListingClientProps) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;
  const location = getByValue(locationValue);
  const { isOpen, onOpen } = useCheckoutModal();

  const categoriesForListing = useMemo(() => {
    return categories.filter((item) => listing.category.includes(item.label));
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-4XL mx-auto">
        <div className="flex flex-col gap-12 ">
          <ListingHead
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
          />

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-12
            md:gap-10         
          "
          >
            {/* // LEFTSIDE */}
            <div className="md:col-span-8">
              <div className="col-span-4 flex flex-col gap-2">
                <ListingInfo
                  title={listing.title}
                  user={listing.user}
                  categories={categoriesForListing}
                  description={listing.description}
                  locationValue={listing.locationValue}
                />

                {/* <div className="text-lg font-light text-gray mt-8">
                  {description}
                </div> */}
              </div>
              <div className="md:order-first order-last md:col-span-4 mt-20">
                <Map center={coordinates} />
              </div>
            </div>

            <div
              className="
              mb-10
              md:order-last
              md:col-span-4             
              "
            >
              {/* RIGHTSIDE */}

              <div>
                <Pricing data={listing} />
                <Button label="Book now!" onClick={onOpen} />
                {isOpen && (
                  <CheckoutModal currentUser={currentUser} listing={listing} />
                )}
                {isOpen && <ConfirmationModal />}
                <Ratings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;

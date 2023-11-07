"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}: ListingInfoProps) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8 ">
      {/* <div className="flex flex-col gap-2">
        <div
          className="
        text-xl
        font-semibold
        flex
        flex-row
        items-center
        gap-2
        "
        >
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image}/>
        </div>
        <div className="
        flex
        flex-row
        items-center
        gap-4
        font-light
        text-gray
        "
        >
            <div>
                {guestCount} guests
            </div>
            <div>
                {roomCount} rooms
            </div>
            <div>
                {bathroomCount} bathrooms
            </div>

        </div>
      </div> */}
      {/* <hr /> */}
      {/* <div className="text-darkgray font-poppins text-hero-title-small font-bold ">
        The Hive Thonglor
      </div> */}

      <div className=" border-[1px] w-[fit-content] rounded-tr-lg rounded-bl-lg p-1">
        {category && (
          <ListingCategory
            icon={category.icon}
            label={category.label}
            iconClassName="text-blue-500 hover:text-blue-700"
          />
        )}
        {/* <hr /> */}
      </div>
      <div className="text-lg font-light text-gray mb-20">
        {description}
      </div>
      {/* <hr /> */}
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;

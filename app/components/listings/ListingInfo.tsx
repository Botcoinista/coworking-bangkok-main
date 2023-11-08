"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
import Heading from "../Heading";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  title: string;
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
  title,
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}: ListingInfoProps) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-2 ">
      <Heading
        title={title}
        icon={<IoLocationOutline size={16} className="text-semilightgray" />}
        subtitle={`${location?.region}, ${location?.label}`}
      />

      <div className="flex gap-2 mb-4">
        <FaRegEnvelope size={16} className="mt-1 text-lightgray" />
        <span className="flex text-custombase text-lightgray">
          bookings@coworkingbangkok.com
        </span>

      </div>
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
      {/* <div className="text-darkgray font-poppins text-seventyeight font-bold ">
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
      <div className="text-lg font-light text-gray mb-20 mt-8">{description}</div>
      {/* <hr /> */}
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;

"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeUser } from "@/app/types";
import { IconType } from "react-icons";

import ListingCategory from "../../../components/listings/ListingCategory";
import Heading from "../../../components/Heading";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";


interface ListingInfoProps {
  title: string;
  user: SafeUser;
  description?: string;
  categories?:
    | Array<{
        icon: IconType;
        label: string;
      }> 
    | undefined;
  locationValue: string;
}

const ListingInfo = ({
  title,
  description,
  categories,
  locationValue,
}: ListingInfoProps) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  

  return (
    <div className="col-span-4 flex flex-col gap-2">
      <Heading
        title={title}
        icon={<IoLocationOutline size={16} className="text-semilightgray" />}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="hidden md:block">
        <div className="flex flex-row gap-2 mb-4 ">
          <FaRegEnvelope size={16} className="mt-1 text-lightgray" />
          <span className="flex text-custombase text-lightgray">
            bookings@coworkingbangkok.com
          </span>
        </div>
      </div>
      {/* Render categories */}
      <div className="flex flex-wrap gap-2 ">
        {categories &&
          categories.map((category, index) => (
            <div key={index}>
              <ListingCategory icon={category.icon} label={category.label} />
            </div>
          ))}
      </div>
      <div className="text-lg font-light text-gray mt-8">{description}</div>
    </div>
  );
};

export default ListingInfo;

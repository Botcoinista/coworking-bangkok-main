"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";
import { IoLocationOutline } from "react-icons/io5";

interface ListingHeadProps {
  title?: string;
  locationValue: string;
  imageSrc: string[];
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}: ListingHeadProps) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      {/* Testar array images */}
      <div className="w-full flex flex-col md:flex-row justify-center mt-24 gap-x-1 overflow-hidden custom-listing-border-radius">
        <div className="w-full h-[40vh] md:h-[40vh] mb-1 overflow-hidden relative">
          <div className="flex">
            <Image
              alt="Property Image"
              src={imageSrc[0]}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
  
        <div className="flex flex-row md:flex-col gap-1">
          <div className="flex gap-1">
            {imageSrc.slice(1, 3).map((image, index) => (
              <div
                key={index}
                className="md:w-[15vw] w-[23vw] md:h-[19.8vh] h-[15vh] overflow-hidden relative"
              >
                <Image
                  alt={`Image ${index}`}
                  src={image}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            {imageSrc.slice(3, 5).map((image, index) => (
              <div
                key={index}
                className="md:w-[15vw] w-[23vw] md:h-[19.8vh] h-[15vh] overflow-hidden relative"
              >
                <Image
                  alt={`Image ${index}`}
                  src={image}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingHead;

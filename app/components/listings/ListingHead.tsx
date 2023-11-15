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
      <div className="w-full flex flex-col md:flex-row justify-center gap-x-1 overflow-hidden rounded-bl-3xl rounded-tr-3xl custom-listing-border-radius">
        <div className=" w-full h-[30vh] md:h-[30vh] mb-1 overflow-hidden relative">
          <div className="flex">
            <Image
              alt="Property Image"
              src={imageSrc[0]}
              layout="fill"
              objectFit="cover"
            />
            {/* <div className="absolute top-5 right-5">
                  <HeartButton listingId={id} currentUser={currentUser} />
                </div> */}
          </div>
        </div>
  
        <div className="flex flex-row md:flex-col gap-1 ">
          <div className="flex gap-1">
            {imageSrc.slice(1, 3).map((image, index) => (
              <div
                key={index}
                className="md:w-[15vw] w-[23vw] md:h-[15vh] h-[15vh] overflow-hidden relative"
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
          <div className="flex gap-1 ">
            {imageSrc.slice(3, 5).map((image, index) => (
              <div
                key={index}
                className="sm:w[5vw] md:w-[15vw] w-[23vw] md:h-[15] h-[15vh] overflow-hidden relative "
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

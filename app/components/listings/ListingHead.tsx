"use client";

import useCountries from "@/app/hooks/useCountries";
import React, { useState } from "react";
import Image from "next/image";

interface ListingHeadProps {
  locationValue: string;
  imageSrc: string[];
}

const ListingHead = ({ locationValue, imageSrc }: ListingHeadProps) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  const [mainImage, setMainImage] = useState(imageSrc[0]);

  const handleImageClick = (image: string) => setMainImage(image);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center gap-x-1 overflow-hidden rounded-bl-3xl rounded-tr-3xl custom-listing-border-radius">
        <div className=" w-full h-[30vh] md:h-[30vh] overflow-hidden relative">
          <div className="flex">
            <Image
              alt="Property Image"
              src={mainImage}
              fill
              className="object-cover "
              sizes="(max-width: 640px) 100vw, 640px"
              priority
            />
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-1 cursor-pointer">
          <div className="flex gap-1">
            {imageSrc.slice(1, 3).map((image, index) =>
            
                <div
                  key={index}
                  className="xs:w-[20] sm:w-[25vw] md:w-[15vw] w-[20vw] md:h-[15vh] h-[15vh] overflow-hidden relative"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    alt={`Image ${index}`}
                    src={image}
                    fill
                    className="object-cover "
                    sizes="(max-width: 640px) 100vw, 640px"
                    priority
                  />
                </div>
           
            )}
          </div>
          <div className="flex gap-1 ">
            {imageSrc.slice(3, 5).map((image, index) => (
              <div
                key={index}
                className="xs:w-[20] sm:w-[25vw] md:w-[15vw] w-[20vw] md:h-[15vh] h-[15vh] overflow-hidden relative"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  alt={`Image ${index}`}
                  src={image}
                  fill
                  className="object-cover "
                  sizes="(max-width: 640px) 100vw, 640px"
                  priority
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

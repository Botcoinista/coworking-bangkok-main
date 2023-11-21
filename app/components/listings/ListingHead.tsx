"use client";

import useCountries from "@/app/hooks/useCountries";
import Image from "next/image";
import { useState } from "react";

interface ListingHeadProps {
  locationValue: string;
  imageSrc: string[];
}


const ListingHead = ({
  locationValue,
  imageSrc,
}: ListingHeadProps) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  const [mainImage, setMainImage] = useState(imageSrc[0])

  const handleImageClick = (image: string) => setMainImage(image)

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center gap-1 overflow-hidden rounded-bl-3xl rounded-tr-3xl custom-listing-border-radius">
        {/* Main image */}
        <div className="w-full md:w-2/3 h-[30vh] overflow-hidden relative">
          <Image
            alt="Property Image"
            src={mainImage}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Secondary images */}
        <div className="w-full md:w-1/2 flex flex-row md:flex-wrap">
          {imageSrc.map((image, index) => (
            image !== mainImage && (
              <div
                key={index}
                className="w-1/2 h-[10vh] md:h-[15vh] overflow-hidden relative cursor-pointer "
                onClick={() => handleImageClick(image)}
              >
                <Image
                  alt={`Image ${index}`}
                  src={image}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default ListingHead;


"use client";

import Button from "@/app/components/Button";
import Pricing from "@/app/components/Pricing";
import Ratings from "@/app/components/Ratings";
import { useRouter } from "next/navigation";

const ListingClientRight = () => {
    const router = useRouter();
  return (
    <div>
      <Pricing />
      <Button label="Book Now" onClick={() => router.push("/")}/>
      
      <Ratings />
    </div>
  );
};

export default ListingClientRight;

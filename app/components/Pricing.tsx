"use client";

import { FaCreditCard } from "react-icons/fa";
import { SafeListing } from "../types";

interface PricingProps {
  data: SafeListing;
}

const Pricing = ({ data }: PricingProps) => {
  // Function to calculate the discounted price for a week
  const calculateWeeklyPrice = (price: number) => {
    return price * 7 * 0.9; // 10% discount
  };

  // Function to calculate the discounted price for a month
  const calculateMonthlyPrice = (price: number) => {
    return price * 30 * 0.9 * 0.9; // 10% discount for a week + 10% discount for a month
  };

  return (
    <div className="flex flex-col">
      <div className="flex text-lightgray gap-8 text-thirtysix font-bold">
        Pricing <FaCreditCard size={40} />
      </div>
      <div className="flex flex-col text-lightgray text-custom-base gap-3 mt-4 mb-4">
        <p>{data.price} THB / day</p>
        <p>{calculateWeeklyPrice(data.price)} THB / week</p>
        <p>{calculateMonthlyPrice(data.price)} THB / month</p>
      </div>
    </div>
  );
};

export default Pricing;

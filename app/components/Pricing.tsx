"use client";

import { FaCreditCard } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="flex flex-col">
      <div className="flex text-lightgray gap-8 text-thirtysix font-bold">
        Pricing
        <FaCreditCard size={40} />
      </div>
        <div className="flex flex-col text-lightgray text-custom-base gap-8 mt-4 mb-4">
          <p>/day</p>
          <p>/week</p>
          <p>/month</p>
        </div>
    </div>
  );
};

export default Pricing;

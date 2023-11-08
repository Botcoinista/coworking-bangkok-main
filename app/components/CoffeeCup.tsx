import React from "react";
import { PiCoffeeFill } from "react-icons/pi";

const CoffeeBanner = () => {
  return (
    <div className="flex items-center bg-banner flex-col md:flex-row py-6 px-8">
      <div className="flex justify-center items-center w-2/5">
        <div className="w-48 h-48 mxs:w-20 mxs:h-20 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full bg-coffeecircle flex items-center justify-center">
          <div className="flex justify-center items-center">
            <PiCoffeeFill size={60} />
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-white m-8">
          Do you <span className="text-yellow">love coffee</span> as much as us?
          Most of our places have
          <span className="text-yellow"> free coffee!</span>
        </h2>
      </div>
    </div>
  );
};

export default CoffeeBanner;

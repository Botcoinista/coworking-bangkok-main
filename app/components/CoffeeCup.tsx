import React from "react";
// import { PiCoffeeFill } from "react-icons/pi"; // If not used, it can be removed

const CoffeeBanner = () => {
  return (
    <div className="flex items-center bg-banner flex-col md:flex-row py-6 px-8 mt-10">
      <div className="flex justify-center items-center w-full md:w-2/5">
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-white ">
          <div
            className="bg-no-repeat  w-full h-full"
            style={{
              backgroundImage: `url(/images/CoffeCup.png)`,
              // Set the background size to 50% of its parent container
              backgroundSize: "50%",
              // Ensure the image is centered within the circle
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center md:text-left md:w-3/5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-seventyeight font-bold text-white my-4">
          Do you <span className="text-yellow">love coffee</span> as much as us?
          Most of our places have{" "}
          <span className="text-yellow">free coffee!</span>
        </h2>
      </div>
    </div>
  );
};

export default CoffeeBanner;

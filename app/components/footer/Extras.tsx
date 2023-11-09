import React from "react";

const Extras = () => {
  return (
    <div className="mb-4 md:mb-0 ">
      <h3 className="font-semibold text-twentyfour">EXTRAS</h3>
      <p className="text-gray-300 mt-2 text-twentyfour">
        Free cancellation
        <br />
        Flexible bookings
      </p>
    
      <div className=" text-gray-300 mt-8 flex flex-col text-twentyfour">
        <div>
          <h3>CONTACT</h3>
          <a
            href="mailto:coworkingbangkok@gmail.com"
            className="hover:text-yellow "
          >
            coworkingbangkok@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Extras;

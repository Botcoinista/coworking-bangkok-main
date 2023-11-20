import React from "react";

const Extras = () => {
  return (
    <div className="mb-4 md:mb-0">
      <h3 className="font-bold text-twentyfour sm:text-thirtytwo font-rajdhani">EXTRAS</h3>
      <p className="mt-2 text-twenty sm:text-twentyfour font-poppins hover:text-yellow">
        Free cancellation
      </p>

      <p className=" mt-2 text-twenty sm:text-twentyfour font-poppins hover:text-yellow ">
        Flexible bookings
      </p>

      <div className="mt-8 flex flex-col text-twentyfour">
        <div>
          <h3 className="text-twentyfour sm:text-thirtytwo font-bold font-rajdhani">CONTACT</h3>
          <a
            href="mailto:coworkingbangkok@gmail.com"
            className="hover:text-yellow text-twenty sm:text-twentyfour font-poppins cursor-pointer"
          >
            coworkingbangkok@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Extras;

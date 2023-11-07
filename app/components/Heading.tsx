"use client";

import { FiMail } from "react-icons/fi";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  icon?: React.ReactNode;
}

const Heading = ({ title, subtitle, center, icon }: HeadingProps) => {
  return (
      <div className={center ? "text-center" : "text-start"}>
        <div className="text-darkgray font-poppins text-hero-title-small font-bold ">
          {title}
        </div>
        <div className="flex items-center text-custom-base font-light text-lightgray mt-2">
          {icon && <span className="mr-2">{icon}</span>}
          {subtitle}
        </div>
        <div className="flex gap-2">
          <FiMail size={16} className="text-lightgray mt-1" />
          <p className="text-lightgray">bookings@islandcoworking.com</p>
        </div>
      </div>
  );
};

export default Heading;

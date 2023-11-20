'use client';

import { FaRegEnvelope } from 'react-icons/fa';
interface HeadingProps {
  title: string;
  email?: string;
  subtitle?: string;
  center?: boolean;
  icon?: React.ReactNode;
}
const Heading = ({ title, subtitle, center, icon }: HeadingProps) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-fortyeight leading-none sm:text-thirtytwo md:text-thirtysix lg:text-fortyeight font-bold font-poppins text-darkgray">
        {title}
      </div>
      <div className="flex items-center text-custombase text-lightgray mt-2 ">
        {icon && <span className="mr-2">{icon}</span>} {subtitle}
      </div>
    </div>
  );
};
export default Heading;
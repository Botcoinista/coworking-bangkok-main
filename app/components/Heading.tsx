'use client';
import { FaRegEnvelope } from 'react-icons/fa';
interface HeadingProps {
  title: string;
  email?: string;
  subtitle?: string;
  center?: boolean;
  icon?: React.ReactNode;
}
const Heading = ({ title, subtitle, center, icon, email }: HeadingProps) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-twentyfour leading-none sm:text-thirtytwo md:text-thirtysix font-bold font-poppins text-darkgray lg:text-fortyeight">
        {title}
      </div>
      <div className="flex items-center text-custombase text-lightgray mt-2">
        {icon && <span className="mr-2">{icon}</span>} {subtitle}
      </div>
    </div>
  );
};
export default Heading;
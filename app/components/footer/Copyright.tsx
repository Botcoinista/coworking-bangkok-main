import { FaCopyright } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className="text-custom-small sm:text-twentyfour font-light font-poppins flex justify-center items-center gap-4">
      <div>
        <FaCopyright size={30} />
      </div>
      <div>CO-WORKING Bangkok 2023</div>
    </div>
  );
};

export default Copyright;

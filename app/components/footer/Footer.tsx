import MainText from "./MainText";
import CustomersChoise from "./CustomersChoise";
import Socials from "./Socials";
import Extras from "./Extras";
import SocialMediaIcons from "./SocialMediaIcons";
import Copyright from "./Copyright";
import ClimateIcon from "./ClimateIcon";
import SecureIcon from "./SecureIcon";

const Footer = () => {
  return (
    <footer
      className="text-white p-4 md:px-20 pt-8 px-8"
      style={{
        backgroundImage: "url(/images/Footer.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col justify-between h-full"
      >
        <MainText />
        <main>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20 my-4 md:my-20">
            {/* Hide CustomersChoise on small screens */}
            <div className="hidden md:block">
              <CustomersChoise />
            </div>
            <Socials />
            <Extras />
          </div>
        </main>
        <div className="mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
            {/* Hide ClimateIcon and SecureIcon on small screens */}
            <div className="hidden md:flex gap-6 mb-4 md:mb-0">
              <ClimateIcon />
              <SecureIcon />
            </div>
            <div className="flex gap-6 md:mb-0 order-1 md:order-2 mb-6">
              <SocialMediaIcons />
            </div>
          </div>
            <div className="order-2 md:order-1">
              <Copyright />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

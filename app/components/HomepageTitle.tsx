import HomepageTitleBangkok from "./HomepageTitleBangkok";

const HomepageTitle = () => {
  return (
    <div className="mb-40 font-work font-black relative flex justify-center items-center overflow-hidden">
      {/* Ensure the "CO-WORKING" text is responsive and add whitespace-nowrap to avoid wrapping */}
      <div className="homepagetitle whitespace-nowrap text-white text-5xl sm:text-8xl md:text-10xl lg:text-12xl xl:text-hundredeighty z-10">
        CO-WORKING
      </div>
      <HomepageTitleBangkok />
    </div>
  );
};

export default HomepageTitle;

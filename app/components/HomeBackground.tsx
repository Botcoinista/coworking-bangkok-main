"use client";

import HompageTitle from "./HomepageTitle";

const HomeBackground = () => {
  return (
    <div
    className="flex items-center justify-center h-screen bg-center"
    style={{
      backgroundImage: `url(/images/HomePage.png)`,
      backgroundSize: "cover",
      width: "100%",
      height: "70vh",
      backgroundRepeat: "no-repeat",
    }}
    >
    <HompageTitle />
    </div>
  );
};

export default HomeBackground;

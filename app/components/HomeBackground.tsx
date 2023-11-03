"use client";

const HomeBackground = () => {
  return (
    <div
      className=" h-screen bg-center"
      style={{
        backgroundImage: `url(/images/HeroHomePage.png)`,
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default HomeBackground;

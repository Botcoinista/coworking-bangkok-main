const TuckTuckBanner = () => {
    return (
      // Use responsive padding classes such as px-4 (for small screens), md:px-10 (for medium screens), and lg:px-40 (for large screens)
      <div className="flex flex-col md:flex-row justify-center mx-auto px-8 sm:px-10 lg:px-40 py-10">
        <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-10">
          {/* Use responsive text sizing such as text-4xl (for small screens), md:text-6xl (for medium screens), and lg:text-7xl (for large screens) */}
          <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-seventyeight font-bold">
            Not sure how long you will stay? We always have
            <span className="text-turquoise"> flexible booking </span>
            and
            <span className="text-turquoise"> free cancellation!</span>
          </h2>
        </div>
        <div
          // Use responsive width classes such as w-full (for small screens) and md:w-1/2 (for medium screens and up)
          className="w-full "
          style={{
            backgroundImage: `url(/images/tuktuk.png)`,
            backgroundSize: "contain",
            backgroundPosition: "center", // Ensure the background image is centered
            height: "auto", // Use auto height to maintain aspect ratio
            aspectRatio: '16 / 9', // You can set an aspect ratio for the image
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    );
  };
  
  export default TuckTuckBanner;
  
  
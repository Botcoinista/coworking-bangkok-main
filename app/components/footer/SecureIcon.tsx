import React from "react";

const SecureIcon = () => {
  return (
    <div
      className="bg-no-repeat  w-full h-full"
      style={{
        backgroundImage: `url(/images/Secure.png)`,
        // Set the background size to 50% of its parent container
        backgroundSize: "100%",
        height: "60px",
        width: "120px",
        // Ensure the image is centered within the circle
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default SecureIcon;

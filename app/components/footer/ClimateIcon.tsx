

const ClimateIcon = () => {
  return (
    <div>
         <div
            className="bg-no-repeat  w-full h-full"
            style={{
              backgroundImage: `url(/images/Climate.png)`,
              // Set the background size to 50% of its parent container
              backgroundSize: "100%",
              height: "60px",
              width: "80px",
              // Ensure the image is centered within the circle
              backgroundPosition: "center",
            }}
          ></div>
    </div>
  )
}

export default ClimateIcon
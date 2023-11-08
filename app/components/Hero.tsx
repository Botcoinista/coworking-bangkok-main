import { MdOutlineThumbUp } from "react-icons/md";

const Hero = () => {
  return (
    <div className="flex justify-center"
    >
      <div
        className="
      flex
      flex-row
      items-center
      justify-center
      gap-4
      p-8
      mx-4 
      rounded-3xl
      opacity-90 
      bg-white
      shadow-xl 
      transform -translate-y-14
      w-hero
      "
      >
        <div className="font-radjhadi text-2xl ">
          Short term <strong>workspaces</strong> at prime{" "}
          <strong>locations</strong>!
        </div>
        <div className="text-yellow">
          <MdOutlineThumbUp size={40} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

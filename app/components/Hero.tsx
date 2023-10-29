import { MdOutlineThumbUp } from "react-icons/md";

const Hero = () => {
  return (
    <div
      className="
      flex
      flex-row
      justify-center
      gap-4
      p-8
      max-w-4xl
      mx-auto // center
      rounded-3xl
      opacity-90
      bg-white
      shadow-xl 
      transform -translate-y-14
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
  );
};

export default Hero;

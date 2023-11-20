"use client";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
const Ratings = () => {
  return (
    <div className="font-poppins">
      <div className="flex text-2xl text-lightgray gap-2 font-bold mt-4">
        Reviews
        <IoChatbubbleEllipsesSharp size={28} />
      </div>
      <div className="font-light italic">

      <div className="flex flex-col text-lightgray gap-4 mt-4 mb-4">
        <span>🌟🌟🌟🌟🌟</span>
        <p>
        I was thoroughly impressed. The space exudes luxury and professionalism, from the elegant private offices to the premium open-plan workstations. Each area is meticulously designed with gold accents and marble surfaces, creating an inspiring environment. The state-of-the-art meeting rooms are equipped with the latest technology, making client meetings and virtual conferences seamless. What stood out most was the plush lounge area, complete with a gourmet café and bar - perfect for networking in style. The location is prestigious and central, adding to the exclusivity. Elite Nexus is not just a workspace, it's a statement of success and ambition.
        </p>
      </div>
      <div className="flex flex-col text-lightgray gap-4 mt-4 mb-4">
        <span>🌟🌟🌟🌟</span>
        <p>
        Its a game-changer for professionals seeking a dynamic and sociable work environment. The workspace is colorful and lively, fostering creativity and collaboration. I loved the casual workstations and communal tables, which made interacting with fellow members effortless. The art installations add to the vibrant atmosphere. The event area is a great touch, hosting diverse workshops and social gatherings that enhance the sense of community. The café and lounge area is cozy and inviting, perfect for a coffee break or an informal chat. Located in a bustling district, it's an ideal spot for networking and growing your professional circle. Vibrant Hub truly lives up to its name, offering a unique blend of work and play.
        </p>
      </div>
      </div>
    </div>
  );
};
export default Ratings;

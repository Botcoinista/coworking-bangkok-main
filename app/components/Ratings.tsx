'use client';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
const Ratings = () => {
  return (
    <div>
      <div className="flex text-2xl text-lightgray gap-2 font-bold mt-4">
        Review
        <IoChatbubbleEllipsesSharp size={28} />
      </div>
      <div className="flex flex-col text-lightgray gap-4 mt-4 mb-4">
        <span>🌟🌟🌟🌟🌟</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quidem eos numquam autem omnis qui animi, cum ipsam quibusdam illo
          similique itaque rem aperiam, praesentium quo exercitationem officia
          natus saepe.
        </p>
      </div>
      <div className="flex flex-col text-lightgray gap-4 mt-4 mb-4">
        <span>🌟🌟🌟🌟</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quidem eos numquam autem omnis qui animi, cum ipsam quibusdam illo
          similique itaque rem aperiam, praesentium quo exercitationem officia
          natus saepe.
        </p>
      </div>
    </div>
  );
};
export default Ratings;
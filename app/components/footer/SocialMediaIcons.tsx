'use client';

import { FaInstagram, FaPinterest,FaFacebook  } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="flex mt-4  gap-2 ">
      <a
        href="https://www.instagram.com/"
        className="rounded-full p-2 hover:bg-instagram-gradient ">
        <FaInstagram size={40} />
      </a>
      <a
        href="https://www.facebook.com/"
        className=" rounded-full p-2 hover:bg-blue-500">
        <FaFacebook size={40} />
      </a>
      <a
        href="https://www.pinterest.se/"
        className="rounded-full p-2 hover:bg-rose-500">
        <FaPinterest size={40} />
      </a>
    </div>
  );
};
export default SocialMedia;
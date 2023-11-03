'use client';

import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
};

const Avatar = ({ src }: AvatarProps) => {

  return (
    <Image
      className="rounded-full"
      height="54"
      width="54"
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;

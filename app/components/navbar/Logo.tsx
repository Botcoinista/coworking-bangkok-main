'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";



const Logo = () => {
    const router = useRouter()

  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer bg-red-800"
      height="300"
      width="300"
      src="/images/logo.png"
    />
  );
}

export default Logo
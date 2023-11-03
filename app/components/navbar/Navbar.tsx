"use client";

import Container from "../Container";
import HomeLogo from "./HomeLogo";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { BiSolidHome } from "react-icons/bi";
import { SafeUser } from "@/app/types";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div
      className="
    fixed 
    w-full 
    z-10
    px-8
    py-4
    "
    >
      <div
        className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0          
            "
      >

        <HomeLogo />
        <Search />
        <UserMenu currentUser={currentUser} />
      </div>
      {/* <Categories /> */}
    </div>
  );
};

export default Navbar;

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
    max-w-[2520px]
    mx-auto
    xl:px-20
    md:px-10
    sm:px-2
    px-4
    "
    >
      <div
        className="
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
          {/* <Logo /> */}
          <HomeLogo />
          <Search />
          <UserMenu currentUser={currentUser} />
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;

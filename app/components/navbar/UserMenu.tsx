"use client";

import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Avatar from "../Avatar";
import { useCallback, useState, useRef, useEffect, MouseEvent } from "react";
import { signOut } from "next-auth/react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";
import useOutsideClick from "@/app/hooks/useOutsideClick";
import { BiSolidUser } from "react-icons/bi";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(wrapperRef, () => {
    setIsOpen(false);
  });

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  const handleMenuItemClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="flex flex-row items-center gap-3">
        <div
          //   onClick={toggleOpen}
          className="
          bg-lightestGray
            p-4
            md_py-1
            md_px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          "
        >
          <AiOutlineMenu className="react-icon" />
        </div>
        <div
          onClick={toggleOpen}
          className={
            currentUser
              ? ""
              : `
            bg-lightestGray
            p-4
            md_py-1
            md_px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            `
          }
        >
          {currentUser ? (
            // Render the Avatar with the user's image if currentUser exists (i.e., user is logged in)
            // Removed the "hidden md:block" class to make the avatar always visible
            <Avatar src={currentUser.image} />
          ) : (
            // Render the default user icon if currentUser is null or undefined (i.e., user is logged out)
            <BiSolidUser className="react-icon"/>
          )}
        </div>
        {currentUser ? (

        
        <div
          onClick={() => signOut()}
          className="
            bg-lightestGray
            p-4
            md_py-1
            md_px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            "
        >
          <FiLogOut className="react-icon" />
       
        </div>
        ): (null)}
      </div>

      {isOpen && (
        <div
          className="
            absolute
            md:w-3/4
            rounded-xl
            shadow-md
            w-[40vw]
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => handleMenuItemClick("/trips")}
                  label="My Account"
                />
                <MenuItem
                  onClick={() => handleMenuItemClick("favorites")}
                  label="My favorites"
                />
                <MenuItem
                  onClick={() => handleMenuItemClick("/reservations")}
                  label="My reservations"
                />
                <MenuItem
                  onClick={() => handleMenuItemClick("/properties")}
                  label="My Properties"
                />
                <MenuItem
                  onClick={rentModal.onOpen}
                  label="Add your office space"
                />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                {/* <MenuItem onClick={() => {}} label="Account" /> */}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

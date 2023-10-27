"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";

interface HeartButtonProps {
    listingId: string;
    currentUser?: SafeUser | null;

}

const HeartButton = ({ listingId, currentUser }:HeartButtonProps) => {

    const hasFavorited = false
    const toggleFavorite = () => {}

  return (
    <div
        onClick={toggleFavorite}
        className="
        relative
        hover:opacity-75
        transition
        cursor-pointer
        "
        >

        <AiOutlineHeart
            size={28}
            className="
            absolute
            fill-white
            "
        />
        <AiFillHeart
        size={28}
        className={
            hasFavorited ? 'fill-red-500' : 'fill-neutral-500/70'
        }
        />
    </div>
  )
}

export default HeartButton
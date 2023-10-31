"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorite from "../hooks/useFavorite";

interface HeartButtonProps {
    listingId: string;
    currentUser?: SafeUser | null;

}

const HeartButton = ({ listingId, currentUser }:HeartButtonProps) => {

    const { hasFavorited, toggleFavorite } = useFavorite({listingId, currentUser});

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
            size={40}
            className="
            absolute
            fill-white
            "
        />
        <AiFillHeart
        size={40}
        className={
            hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'
        }
        />
    </div>
  )
}

export default HeartButton
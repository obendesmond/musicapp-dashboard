import React from "react";
import { BsMusicNoteBeamed, BsPlayFill } from "react-icons/bs";
import bg1 from "../assets/musicbg1.jpg";

export default function PlaylistSingle({ title, img, tracks }) {
  return (
    <div
      className="flex rounded-3xl p-2 h-[133px] w-[148px] shadow-xl shadow-myDark/5"
      style={{
        background: `url(${bg1})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="rounded-[18px] flex flex-row px-3 py-2 items-center justify-between bg-myDark bg-opacity-50 backdrop-blur-md self-end w-full shadow-xl shadow-myDark/40">
        <div className="fex flex-col flex-1">
          <p className="font-bold text-white text-[12px]">Music Pagi</p>
          <p className="flex flex-row items-center text-gray-300 text-[10px]">
            <p className="mr-2 text-white">
              <BsMusicNoteBeamed />
            </p>
            <p>12 Tracks</p>
          </p>
        </div>
        <div className="rounded-full shadow-inner p-2 bg-white cursor-pointer">
          <BsPlayFill className="text-myMain" />
        </div>
      </div>
    </div>
  );
}

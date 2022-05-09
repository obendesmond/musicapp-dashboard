import React from "react";
import {
  BsFillSkipEndFill,
  BsFillSkipStartFill,
  BsFillPauseFill,
  BsShuffle,
  BsSoundwave,
} from "react-icons/bs";
import { IoRepeat } from "react-icons/io5";
import purpleLambo from "../assets/purpleLambo.jpg";
import PlayBtn from "./PlayBtn";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col items-center p-5 space-y-8 bg-[#260C3E] rounded-3xl w-full">
      <img className="rounded-3xl" src={purpleLambo} alt="purpleLambo" />
      <div className="text-center">
        <p className="text-white font-bold text-xl">Balonku Ada 5 Meter</p>
        <p className="text-gray-400">Mamank</p>
      </div>
      <div className="flex flex-row space-x-5 items-center justify-center">
        <p className="text-white">1:20</p>
        <div className="flex flex-row space-x-5 text-white text-xl items-center justify-between">
          <BsSoundwave />
          <BsSoundwave />
          <BsSoundwave />
          <BsSoundwave />
        </div>
        <p className="text-gray-400">3:30</p>
      </div>
      <div className="flex flex-row space-x-10 items-center text-gray-400 justify-center">
        <IoRepeat />
        <div className="flex flex-row space-x-5 text-white text-xl items-center justify-between">
          <BsFillSkipEndFill className="cursor-pointer" />
          <PlayBtn Icon={BsFillPauseFill} />
          <BsFillSkipStartFill className="cursor-pointer" />
        </div>
        <BsShuffle />
      </div>
    </div>
  );
}

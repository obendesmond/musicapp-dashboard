import React from "react";
import Ads from "../components/Ads";
import Playlist from "../components/Playlist";
import RightSectionHeader from "../components/RightSectionHeader";
import TopArtist from "../components/TopArtist";
import Trending from "../components/Trending";

export default function RightSection() {
  return (
    <div className="relative">
      <div className="fixed bg-white  mx-4 my-4  rounded-[40px]  w-[76%] h-[95vh] shadow-xl shadow-myMain/20 overflow-y-scroll">
        <RightSectionHeader />
        <div className=" flex flex-row space-x-10 items-start px-8 py-4 justify-between ">
          <div className="flex-[0.6] relative flex flex-col space-y-4">
            <Ads />
            <Playlist />
            <Trending title="Trending" />
          </div>
          <div className="flex-[0.4] ">
            <TopArtist />
          </div>
        </div>
        <div className="fixed bottom-4 rounded-b-[40px] w-[76%] h-10 bg-gradient-to-t from-white"></div>
      </div>
    </div>
  );
}

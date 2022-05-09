import React from "react";
import Ads from "../components/Ads";
import MusicPlayer from "../components/MusicPlayer";
import Playlist from "../components/Playlist";
import TopArtist from "../components/TopArtist";
import Trending from "../components/Trending";

function Home() {
  return (
    <>
      <div className=" flex flex-col space-x-10 items-start px-8 py-4 justify-between md:flex-row">
        <div className="flex-[0.6] relative flex flex-col space-y-4">
          <Ads />
          <Playlist />
          <Trending title="Trending" />
        </div>
        <div className="flex-[0.4] flex flex-col space-y-10 ">
          <TopArtist />
          <MusicPlayer />
        </div>
      </div>
    </>
  );
}

export default Home;

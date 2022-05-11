import React from "react";
import img from "../assets/headphone1.png";

export default function Ads() {
  return (
    <div className=" w-full flex flex-row justify-between rounded-3xl bg-gradient-to-tl from-myMain to-myLightMain overflow-hidden shadow-xl shadow-myDark/20">
      <div className="flex-[0.5] flex flex-col mx-10 my-8 space-y-4">
        <p className="text-white uppercase">muskinaja</p>
        <p className="text-4xl leading-8 font-bold text-white text-left">
          Listen to trending songs all the time
        </p>
        <p className="text-white">
          With Muskinaja, you can get premium music for free anywhere and at
          anytime
        </p>
        <div className="">
          <button className="bg-white shadow-xl shadow-myMain border-0 py-2 px-3 rounded-3xl text-myMain outline-none">
            Explore Now
          </button>
        </div>
      </div>
      <div
        className="flex-[0.5]"
        style={{
          background: `url(${img})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

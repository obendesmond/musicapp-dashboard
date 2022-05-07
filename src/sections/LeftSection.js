import React from "react";
const profile = require("../assets/desmond.png");

export default function LeftSection() {
  return (
    <div className="flex flex-col space-y-10 py-10 px-5">
      <div>
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-l from-myMain to-myLightMain overflow-hidden shadow-lg shadow-myLightMain">
          <img src={profile} alt="profile" />
        </div>
        <p className="text-gray-400 mt-3">
          Hi!{" "}
          <span className="block mt-1 leading-5 text-bold text-white text-xl">
            Ahmad <br />
            Frauzi
          </span>
        </p>
      </div>
    </div>
  );
}

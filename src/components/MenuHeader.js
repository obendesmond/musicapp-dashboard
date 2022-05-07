import React from "react";

const profile = require("../assets/desmond.png");

export default function MenuHeader() {
  return (
    <div className="px-5">
      <div className="h-20 w-20 rounded-3xl bg-gradient-to-l from-myMain to-myLightMain overflow-hidden shadow-xl shadow-myMain/20">
        <img src={profile} alt="profile" />
      </div>
      <p className="text-gray-400 mt-3">
        Hi!{" "}
        <span className="block mt-1 leading-5 text-bold text-white text-xl">
          Desmond <br />
          Oben
        </span>
      </p>
    </div>
  );
}

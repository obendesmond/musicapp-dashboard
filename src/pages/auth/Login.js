import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-tl from-myMain to-myLightMain">
      <div className="container p-10 max-w-sm mx-auto flex flex-col justify-center items-center space-y-10 h-[100vh]">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="logo-spotify"
          className="w-"
        />

        <button
          onClick={() => navigate("/in")}
          className="bg-white shadow-xl w-full shadow-myMain border-0 py-2 px-3 rounded-3xl text-myMain outline-none"
        >
          LOG IN
        </button>
      </div>
    </div>
  );
}

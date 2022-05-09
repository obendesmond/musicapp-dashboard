import React from "react";

export default function PlayBtn({ Icon, reverseColor }) {
  return (
    <div
      className={`rounded-full shadow-inner p-2 cursor-pointer ${
        reverseColor ? "bg-myMain" : "bg-white"
      }`}
    >
      <Icon className={`${reverseColor ? "text-white" : "text-myMain"}`} />
    </div>
  );
}

import React from "react";

export default function CategoryTitle({ title, subTitle }) {
  return (
    <div className="flex flex-row items-end justify-between">
      <p className="text-2xl text-myDark font-bold">{title}</p>
      <p className="text-gray-400 cursor-pointer">{subTitle || "See More"}</p>
    </div>
  );
}

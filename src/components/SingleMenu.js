import React from "react";

export default function SingleMenu({ Icon, title, index }) {
  const handleMenuClick = () => {
    console.log(`you clicked ${title}`);
  };

  console.log(index);

  return (
    <div
      onClick={handleMenuClick}
      className={`flex flex-row justify-start cursor-pointer px-5 items-center text-gray-400 ${
        index === 0 ? "border-l-4 text-white border-myMain" : ""
      }`}
    >
      {Icon && <Icon className="mr-10 text-xl" />}
      {title}
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function SingleMenu({ Icon, title, route, index }) {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    console.log(`you clicked ${title}`);
    // navigate(route);
    navigate("/in");
  };

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

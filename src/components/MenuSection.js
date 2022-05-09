import React from "react";
import SingleMenu from "./SingleMenu";

export default function MenuSection({ title, menuItems }) {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-white px-5">{title}</p>
      {menuItems.map((menuItem, index) => (
        <SingleMenu
          key={index}
          Icon={menuItem.Icon}
          index={index}
          title={menuItem.title}
          route={menuItem.route}
        />
      ))}
    </div>
  );
}

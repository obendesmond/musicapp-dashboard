import React from "react";
import SingleMenu from "./SingleMenu";

export default function MenuSection({ title, menuItems }) {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-white px-5">{title}</p>
      {menuItems.map(({ Icon, title }, index) => (
        <SingleMenu key={index} Icon={Icon} index={index} title={title} />
      ))}
    </div>
  );
}

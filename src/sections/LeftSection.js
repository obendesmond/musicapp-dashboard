import React from "react";
import MenuSection from "../components/MenuSection";
import MenuHeader from "../components/MenuHeader";
import { menuItems, libraryItems } from "../data/menuData";

export default function LeftSection() {
  return (
    <div className="flex flex-col space-y-10 py-10">
      {/* menu header */}
      <MenuHeader />

      {/*  */}
      <MenuSection title="Menu" menuItems={menuItems} />
      <MenuSection title="Library" menuItems={libraryItems} />

      <div className=" w-[100%] px-5 mb-5">
        <div className="bg-myMain rounded-xl w-full h-40"></div>
      </div>
    </div>
  );
}

import React from "react";
import MenuSection from "../components/MenuSection";
import MenuHeader from "../components/MenuHeader";
import { menuItems, libraryItems } from "../data/menuData";

export default function LeftSection() {
  return (
    <div className="flex flex-col space-y-8 py-5">
      {/* menu header */}
      <MenuHeader />

      {/*  */}
      <MenuSection title="Menu" menuItems={menuItems} />
      <MenuSection title="Library" menuItems={libraryItems} />
    </div>
  );
}

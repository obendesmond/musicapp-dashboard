import React from "react";
import MenuSection from "../components/MenuSection";
import MenuHeader from "../components/MenuHeader";
import { menuItems, libraryItems } from "../data/menuData";
import { useNavigate } from "react-router-dom";

export default function LeftSection() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col space-y-8 py-5">
      {/* menu header */}
      <MenuHeader />

      {/*  */}
      <MenuSection title="Menu" menuItems={menuItems} />
      <MenuSection title="Library" menuItems={libraryItems} />
      <div className="px-5">
        <button
          onClick={() => navigate("/")}
          className="bg-white shadow-md w-full shadow-myMain border-0 py-2 px-3 rounded-3xl text-myMain outline-none"
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}

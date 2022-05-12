import React from "react";
import { Route, Routes } from "react-router-dom";
import { libraryItems, menuItems } from "../data/menuData";
import Home from "../pages/Home";

export default function RightSection() {
  return (
    <div className="relative">
      <div className="fixed bg-white  mx-4 my-4  rounded-[40px]  w-[76%] h-[95vh] shadow-xl shadow-myMain/20 overflow-y-scroll">
        <Routes>
          {menuItems.map((menuItem, i) => (
            <Route
              key={menuItem.route}
              path={menuItem.route}
              element={menuItem.component}
            />
          ))}
          {libraryItems.map((libItem, i) => (
            <Route
              key={libItem.route}
              path={libItem.route}
              element={libItem.component}
            />
          ))}

          <Route path="*" element={<Home />} />
        </Routes>
        <div className="fixed bottom-4 rounded-bl-[40px] w-[50%] h-10 bg-gradient-to-t from-white"></div>
      </div>
    </div>
  );
}

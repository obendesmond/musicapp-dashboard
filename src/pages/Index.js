import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Genres from "./Genres";

import RightSectionHeader from "../components/RightSectionHeader";
import { libraryItems, menuItems } from "../data/menuData";

export default function Index() {
  return (
    <>
      {/* right section header */}
      <RightSectionHeader />

      <Routes>
        {menuItems.map((menuItem, i) => (
          <Route
            key={menuItem.route}
            path={menuItem.route}
            exact
            element={menuItem.component}
          />
        ))}
        {libraryItems.map((libItem, i) => (
          <Route
            key={libItem.route}
            path={libItem.route}
            exact
            element={libItem.component}
          />
        ))}

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

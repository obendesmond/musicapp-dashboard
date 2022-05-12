import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Index from "./sections/Index";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/in" element={<Index />} />
    </Routes>
  );
}

export default App;

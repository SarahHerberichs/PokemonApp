// Routes.js
import React from "react";

import Home from "../components/Home/Home";
import Team from "../components/Team/Team";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Router;

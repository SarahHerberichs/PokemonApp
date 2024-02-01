// Routes.js
import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import Team from "../components/Team/Team";

const Router = () => {
  return (
    <>
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
    </>
  );
};

export default Router;

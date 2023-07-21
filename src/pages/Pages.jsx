import React from "react";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchCusine from "./SearchCusine";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searchcuisine/:input" element={<SearchCusine />} />
      <Route path="./recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;

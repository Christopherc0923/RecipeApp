import React from "react";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchCusine from "./SearchCusine";
import Recipe from "./Recipe";
import About from "./About";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searchcuisine/:input" element={<SearchCusine />} />
      <Route path="/recipe/:name" element={<Recipe />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Pages;

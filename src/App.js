import React, { Component } from "react";
import Categories from "./components/Categories";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

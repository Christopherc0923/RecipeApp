import React, { Component } from "react";
import Categories from "./components/Categories";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{ padding: "0", margin: "0" }}>
      <BrowserRouter>
        <Navbar />
        <Search />
        <Categories />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

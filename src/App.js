import React, { Component } from "react";
import Categories from "./components/Categories";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/background.css";
import "./css/global.css";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App spacer layer1" style={{ padding: "0", margin: "0" }}>
      <HashRouter basename="/">
        <Navbar />

        <Search />
        <Categories />
        <Pages />
        <Footer />

        <BackToTop />
      </HashRouter>
    </div>
  );
}

export default App;

import React from "react";
import CookieModal from "../components/CookieModal";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Keto from "../components/Keto";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <div className="container">
      <CookieModal />
      <hr />
      <Popular />
      <hr />
      <Veggie />
      <hr />
      <Keto />
    </div>
  );
}

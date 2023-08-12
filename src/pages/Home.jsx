import React from "react";
import CookieModal from "../components/CookieModal";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

export default function Home() {
  return (
    <div className="container">
      <CookieModal />
      <hr />
      <Popular />
      <hr />
      <Veggie />
    </div>
  );
}

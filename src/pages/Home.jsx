import React from "react";
import Categories from "../components/Categories";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Popular />
      <Veggie />
    </div>
  );
}

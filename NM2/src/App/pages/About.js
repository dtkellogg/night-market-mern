import React from "react";
import About from "../components/About";
import Principles from "../components/Principles";
import Involved from "../components/Involved";

export default function AboutPage() {
  return (
    <div className="about-page">
      <About />
      <Principles />
      <Involved />
    </div>
  );
}

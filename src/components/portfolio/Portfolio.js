import React from "react";
import { IoSunny } from "react-icons/io5";
import Navigation from "../Navigation";
import Project from "./Project";

export default function Portfolio() {
  return (
    <section>
      <header>
        <h1 className="back-text">works</h1>
        <h1 className="blue">
          {" "}
          <span>My</span> Portfolio
        </h1>
      </header>

      <div className="filter-btns">
        <button className="filter-btn active">all</button>
        <button className="filter-btn">logo</button>
        <button className="filter-btn">video</button>
        <button className="filter-btn">mockup</button>
      </div>

      <div className="projects">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>

      <div className="dark_mode">
        <IoSunny className="react_icon" />
      </div>
      <div className="navigation">
        <Navigation />
      </div>
    </section>
  );
}

import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import {  IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function LandingPage() {
  return (
    <main>
      <aside>
        <img src="/images/gbenga.jpeg" alt="mine" />
      </aside>
      <div className="description">
        <p className="magenta"> ~Hi Distinguished! </p>
        <h2 className="name"> i'm gbenga showunmi.</h2>
        <h2 className="job-title">Web developer</h2>
        <p>
          I'm a Tunisian based web designer & front-end developer focused on
          crafting clean & user-friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>
<Link to="/about">
        <button>
          About Me
          <span className="arrow">
            <ImArrowRight2 className="arrow_icon" />
          </span>
        </button>
        </Link>
      </div>

      <div className="dark_mode">
        <IoSunny className="react_icon" />
      </div>
      <div className="navigation">
        <Navigation />
      </div>
    </main>
  );
}

import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import { IoMoon, IoSunny } from "react-icons/io5";
import Navigation from "./components/Navigation";

export default function LandingPage() {
  return (
    <main>
      <aside>
        <img src="" alt="mine" />
      </aside>
      <div className="description">
        <h2>i'm gbenga showunmi</h2>
        <h2>Web developer</h2>
        <p>
          I'm a Tunisian based web designer & front-end developer focused on
          crafting clean & user-friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>

        <button className="about">
          about me
            {/* <span className="icon"> */}
              <ImArrowRight2 className="icon" />
            {/* </span> */}
        </button>
      </div>
      {/* <IoSunny />
      <IoMoon /> */}
      <div className="navigation">
        <Navigation />
      </div>
    </main>
  );
}

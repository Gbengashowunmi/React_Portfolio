import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import Navigation from "../Navigation";
import EduExperience from "./EduExperience";
import Stat from "./Stat";

export default function About() {
  return (
    <section>
      <header>
        <h1 className="back-text">resume</h1>
        <h1 className="blue">
          <span>about</span> me
        </h1>
      </header>
      <div className="info-statistics">
        <div className="info">
          <h2>Personal imformation</h2>
          <p className="about-me">lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30
          </p>
          <button>
          Download CV
          <span className="arrow">
            <BsCloudDownload className="arrow_icon" />
          </span>
        </button>
        </div>
        <div className="statistics" >
          <Stat figure="+2" content ="years of experience"/>
          <Stat figure="+15" content ="Completed Projects"/>
          <Stat figure="+5" content ="tools"/>
          <Stat figure="+2" content ="tools"/>
        </div>
      </div>
<div className="hr"></div>

<div className="ex-edu-section">
<h2>experience and education</h2>
<div className="ex-edu">
<div className="education">
  <EduExperience />
  <EduExperience />
  <EduExperience />
</div>
<div className="experience">
<EduExperience />
<EduExperience />
<EduExperience />

</div>
</div>

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

import React from "react";
import { IoSunny } from "react-icons/io5";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Navigation from "./components/Navigation";
import Portfolio from "./components/portfolio/Portfolio";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <IoMoon /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

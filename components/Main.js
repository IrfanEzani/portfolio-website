"use client";
import { useEffect } from "react";
import Typed from "typed.js";

const Hero = ({ mouse }) => {
  /* useEffect(() => {
    new Typed(".typed-subtitle", {
    strings: ["Data Enthusiast.", "Based in College Park, Maryland."],
      loop: true,
      typeSpeed: 80,
    });
  }, []); */
  return (
    <div className="section started" style={{ height: "96vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text="I'm Irfan">
              <span>Hi! I'm Irfan</span>
            </div>
              <span className="typed-subtitle" />
          </div>
        </div>
      </div>
      {mouse && (
        <a href="#" className="mouse_btn">
          <span class="ion ion-mouse"></span>
        </a>
      )}
    </div>
  );
};
export default Hero;

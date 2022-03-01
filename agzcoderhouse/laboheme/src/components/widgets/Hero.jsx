import React from "react";
import "./Widgets.css";

const Hero = ({ backgrundHero, title, text }) => {
  return (
    <div className={backgrundHero} id="hero">
      <div>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__text">{text}</p>
      </div>
    </div>
  );
};

export default Hero;

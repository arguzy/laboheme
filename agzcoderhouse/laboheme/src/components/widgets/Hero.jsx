import React from "react";
import "./Widgets.css";
//Este componente fue creado porque a las pages "contact" y "faqs", las pensé con la misma estructura inicial
//Fácil de setear recibe texto por props y un URL que le corre un efecto parallax por detrás, con el css.
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
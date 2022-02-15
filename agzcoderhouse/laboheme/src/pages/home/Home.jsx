import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Home.modules.css";

const Home = () => {
  return (
    <Fragment>
      <section className="hero">
        <div className="hero__backgrounds">
          <div className="hero__background"></div>
          <div className="hero__background"></div>
          <div className="hero__background"></div>
          <div className="hero__background"></div>
        </div>
        <div className="hero__marquee">
          <div className="hero__titleBox">
            <h1 className="hero__title">LA BOHÈME</h1>
          </div>
          <div className="hero__subtitleBox">
            <p className="hero__subtitle">
              ...un modo de vida apartado de las normas y convenciones de la tradición
              gastronómica...
            </p>
          </div>
          <div className="hero__btnBox">
            <button className="hero__btn dark">
              <Link to="./Contact">Contact</Link>
            </button>
            <button className="hero__btn">
              <Link to="./Store">Take Away</Link>
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
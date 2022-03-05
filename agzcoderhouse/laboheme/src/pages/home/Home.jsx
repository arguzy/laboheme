import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Home.modules.css";
//Home, es un componente presentacional.
// El diseño de css salió por 2 cosas. El primero de los motivos es porque hay cosas que en html y css, salen faciles, pero en reactjs no (una simple transición de keyframe, con las url de los backgrounds elegidos, salía con un pantallaso blanco en el medio -no hay porque-).
// Y la solución (más recien empezado el curso) fue una composición de dos cosas que vi: 1) https://codepen.io/chris22smith/pen/RZogMa (en estó vi el ángulo de las cajas, y ya había visto anteriormente que para hacer algo parecido a un popup de frases de comic's se usaban una propiedad llamada clip-path) y 2) la aplicación que me ayudo a cranear el movimiento https://bennettfeely.com/clippy/ (si bien es cierto que algún movimiento se puede sacar pensando, hay uno en la keyframe que usé, que no lo sacaba sin esto).
//Igual quedo muy pesada, al menos en mi maquina, molesta un poco el delay de carga.
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
          <div className="hero__captionBox">
            <h1 className="hero__caption">LA BOHÈME</h1>
          </div>
          <div className="hero__subtitleBox">
            <p className="hero__subtitle">
              ...un modo de vida apartado de las normas y convenciones de la
              tradición gastronómica...
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

import React, { useState } from "react";
import CartView from "../widgets/CartView";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navigation.css";
//El NavBar es parte del primer desafío. Hoy quizás la redacción sería con un useRef, y no con un State. Pero funciona, esta redactado con los conocimiento que tenía en ese momento.
// Se declara un State(show), y se hace una suerte de event toggle, con lógica condicional en una funcion flecha, donde todo evento onClick del jsx niega el valor del estado.
// Se incorpora el componente cartView.  Se usa para el menu hamburgesa, la librería de iconos reactIcon.
const Navbar = () => {
  const [show, setShow] = useState(false);
  const ToggleMenu = () => setShow((pre) => !pre);

  return (
    <nav className="nav">
      <div className="nav__motley">
        <Link to="/" className="nav__logo">
          LA BOHEME
        </Link>
        <div className="nav__shop">
          <CartView />
        </div>
      </div>
      <button className="nav__btnToggle" onClick={ToggleMenu}>
        <FaBars />
      </button>
      <ul className={show ? "nav__menu nav__menuVisible" : "nav__menu"}>
        <li className="nav__menuItem">
          <Link to="./" className="nav__menuLink" onClick={ToggleMenu}>
            Inicio
          </Link>
        </li>
        <li className="nav__menuItem">
          <Link to="./Contact" className="nav__menuLink" onClick={ToggleMenu}>
            Quiénes Somos
          </Link>
        </li>
        <li className="nav__menuItem">
          <Link to="./Store" className="nav__menuLink" onClick={ToggleMenu}>
            Menú y Take Away
          </Link>
        </li>
        <li className="nav__menuItem">
          <Link to="./Faqs" className="nav__menuLink" onClick={ToggleMenu}>
            Preguntas Frecuentes
          </Link>
        </li>
        <span className="nav__menuIndicator"></span>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Footer = () => {
  return (
    <>
      <div className="footContent">
        <div className="sitemap">
          <h4 className="sitemap__title">Mapa del Sitio</h4>
          <ul className="sitemap__ul">
            <li className="sitemap__li">
              <Link className="sitemap__links" to={"./"}>
                Inicio
              </Link>
            </li>
            <li className="sitemap__li">
              <Link className="sitemap__links" to={"./Contact"}>
                Contacto
              </Link>
            </li>
            <li className="sitemap__li">
              <Link className="sitemap__links" to={"./Store"}>
                Menú y Take Away
              </Link>
            </li>
            <li className="sitemap__li">
              <Link className="sitemap__links" to={"./Faqs"}>
                Preguntas Frecuentes
              </Link>
            </li>
          </ul>
        </div>

        <address className="address">
          <h5 className="address__title">Contáctate</h5>
          <ul className="address__ul">
            <li className="address__li">
              <p className="address__par">Whatsapp:</p>
              <h6 className="address__subtitle">+54 11 2745-9251</h6>
            </li>
            <li className="address__li">
              <p className="address__par">E-mail:</p>
              <h6 className="address__subtitle">labohemeba@gmail.com</h6>
            </li>
          </ul>
        </address>
      </div>

      <div className="copyright">
        <p className="copyright__text">
          Copyright La Bohème S.A. - 2022. Todos los derechos reservados.
        </p>
      </div>
    </>
  );
};

export default Footer;

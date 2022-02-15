import React from "react";
import { BsSkipBackwardCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NotFound.modules.css";
const PageNotFound = () => {
  return (
    <section className="errorNotFound">
      <div className="errorNotFound__shaper">
        <h6 className="errorNotFound__title">HTTP 404 NO ENCONTRADO:</h6>
        <p className="errorNotFound__text">
          No existe el recurso que ha sido solicitado, pero puedes volver
          haciendo click en:{" "}
          <Link to="/" className="errorNotFound__icon">
            <BsSkipBackwardCircle />
          </Link>
        </p>{" "}
        <p className="errorNotFound__text">
          o intentar otra cosa, o apretar F5, eso a veces funciona... quien
          sabe, no?
        </p>
      </div>
    </section>
  );
};

export default PageNotFound;
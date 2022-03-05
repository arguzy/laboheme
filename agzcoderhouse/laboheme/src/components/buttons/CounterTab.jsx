import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Buttons.css";

//ha quedado así después del lifting stand Up. No es la construcción con la mejor practica, tomando en cuenta que se pudo hacer un context o volver a armar el componente una vez que se ha aprobado el desafío -para entender la decisión de mantenerle en este estado, ver el readme sobre concepto de Proyecto-.

const CounterTab = ({ price, onStock, counter, plus, minus, subtotal }) => {
//EL COUNTER TAB TOMA POR PROPS TODO SU FUNCIONAMIENTO, DESDE EL ARCHIVO /store/ProductDetail.jsx
//Su mayor trabajo sostener la estructura jsx, del boton y alojar las funciones en botones y darle vida en los onClick.
    return (
    <div className="counterBox">
      <button
        className="counterBox__button"
        onClick={() => {
          minus();
          subtotal(counter, price);
        }}
      >
        <FaMinus />
      </button>
      <p className="counterBox__num">{counter}</p>
      <button
        className="counterBox__button"
        onClick={() => {
          plus(onStock);
          subtotal(counter, price);
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default CounterTab;

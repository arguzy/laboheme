import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
//Este fue el componente que me presentó dificultades. Es sencillo pero la lógica en el context dentro del CartContext.jsx se volvió un problema
//Como componente es presentacional y tiene un sólo aspecto de lógica incrustado en el Link, donde se evita que el usuario tenga acceso a la vista del OrderSummary, si el array del cart esta en 0
//Lo demas un OnChange para que cada vez que se genera un cambio en el array sea renderizado.
//Es una llamada al cartContext y un icono de librería.
const CartView = () => {
  const { cartLength } = useCart();

  return (
    <div>
      <span onChange={cartLength}>
        <Link
          to={cartLength > 0 ? "OrderSummary" : "Store"}
          className="nav__shopIcon"
        >
          <ImCart />
        </Link>
        <p className="nav__shopConunt">{cartLength}</p>
      </span>
    </div>
  );
};

export default CartView;

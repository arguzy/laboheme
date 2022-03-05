import React from "react";
import CounterTab from "../buttons/CounterTab";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ModalStop from "../widgets/ModalStop";
import "./Card.modules.css";

function DetailCard({ product, minus, plus, counter, amount, subtotal }) {
  const { addProduct, cart } = useCart();
  //Este componente tiene por objetivo recibir una función y un state del context, donde dar lugar al proceso de agregar al array un indice con un objeto cuya composición será alojada en el State, llamado cart.
  const { imageSrc, name, ingredient, price, stock } = product;
  //Se hace una desestructuración del array producto
  const handleClickAdd = () => {
    addProduct(product, counter, amount);
  };
  // Función manejadore del evento onClick

  //Este return tiene incorporado dos componentes, uno es parte del proceso de lifting StandUp State - El CounterTab
  // el otro componente es un PopUp (ModalStop) condicional que emite un mensaje cuando el carro esta vacío y que caso contrario enlaza al sitio de order summary
  return (
    <section className="detailCard">
      <div className="detailCard__container">
        <img className="detailCard__image" src={imageSrc} alt={name} />

        <div className="detailCard__titleBox">
          <div className="detailCard__title">{name}</div>
        </div>

        <div className="detailCard__drop">
          <div className="detailCard__btnBackBox">
            <button className="detailCard__btnBack">
              <Link to="/Store" className="detailCard__btnBackLink">
                Volver
              </Link>
            </button>
          </div>
          <div className="detailCard__ingredientBox">
            <p className="detailCard__ingredient">{ingredient}</p>
          </div>
          <div className="detailCard__fullStockTaked">
            {stock === counter && <p>No quedan más unidades</p>}
          </div>
          <div className="detailCard__amountBox">
            <p
              className="detailCard__price"
              onChange={subtotal(counter, price)}
            >
              Precio $ {amount}
            </p>

            <CounterTab
              onStock={stock}
              minus={minus}
              plus={plus}
              counter={counter}
              price={price}
              subtotal={subtotal}
            />
          </div>
          <div className="detailCard__btns">
            <button className="detailCard__btnAddCart" onClick={handleClickAdd}>
              Agregar
            </button>
            <button className="detailCard__btnBuyNow">
              <ModalStop
                buttonText={"Finalizar"}
                message="Debes agregar algo al carrito"
                cart={cart}
                road={"/OrderSummary"}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailCard;

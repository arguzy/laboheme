import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./Store.modules.css";
// este componente es presentación en parte y tiene un IF como para condicionar la eliminación de productos, hasta que no quede uno solo (como el state cart no muta inmediatamente se usa <= 1 que para el caso es 0)
// El error que señala la consola del browser es aceptado. Es por una cuestión de css. Me gustó y me sirve usar los DataLabel de las listas. Tarde en entenderlo cuando lo vi, pero me funciona y queda bien, no impde funcionalidades. La idea salió de https://codepen.io/AllThingsSmitty/pen/MyqmdM (en el curso de html y css no se vieron listas, por lo que tuve que mirar cómo se usan bien)
const OrderSummary = () => {
  const { cart, eraseProduct, total, eraseAllProduct } = useCart();
  const navigate = useNavigate();

  function handleClickDeleteItem(itemToDelete) {
    eraseProduct(itemToDelete);
    if (cart.length <= 1) {
      navigate("/Store");
    }
  }

  return (
    <section className="orderSummary">
      <div className="totals">
        <div className="totals__info">
          <div className="totals__buttonBack">
            <span className="totals__buttonBackIcon">
              <RiArrowGoBackFill />
            </span>
            <span className="totals__buttonBackText">
              <button>
                <Link to="/Store">Volver</Link>
              </button>
            </span>
          </div>
          <p>Final a Pagar $ {total}</p>
          <div className="totals__buttonPay">
            <span className="totals__buttonIconPay">
              <MdOutlinePayments />
            </span>
            <span>
              <button className="totals__buttonTextPay">
                <Link to="/checkOut">Pagar</Link>
              </button>
            </span>
          </div>
        </div>
      </div>
      {cart.map((orderbuy) => {
        return (
          <div key={orderbuy.product.id}>
            <table className="table">
              <tbody className="table__body">
                <tr className="table__deck">
                  <th scope="col" className="table__headline">
                    Imagen
                  </th>
                  <th scope="col" className="table__headline">
                    Nombre
                  </th>
                  <th scope="col" className="table__headline">
                    Precio
                  </th>
                  <th scope="col" className="table__headline">
                    Cantidad
                  </th>
                  <th scope="col" className="table__headline">
                    Subtotal
                  </th>
                  <th scope="col" className="table__headline">
                    Canasta
                  </th>
                </tr>
                <tr className="table__dataRow">
                  <td dataLabel="Imagen" className="table__data">
                    <img
                      className="table__Img"
                      src={orderbuy.product.imageSrc}
                      alt={orderbuy.product.name}
                    />
                  </td>
                  <td dataLabel="Nombre" className="table__data">
                    <p className="table__dataText">{orderbuy.product.name}</p>
                  </td>
                  <td dataLabel="Precio" className="table__data">
                    <p className="table__dataText">
                      $ {orderbuy.product.price}
                    </p>
                  </td>
                  <td dataLabel="Cantidad" className="table__data">
                    <p className="table__dataText">{orderbuy.quantity}</p>
                  </td>
                  <td dataLabel="Subtotal" className="table__data">
                    <p className="table__dataText">${orderbuy.amount}</p>
                  </td>
                  <td dataLabel="Canasta" className="table__data table__button">
                    <div className="table__btnbox">
                      <span className="table__btnbox-icon">
                        <BiTrash />
                      </span>
                      <span>
                        <button
                          type="button"
                          className="table__btnbox-text"
                          onClick={() =>
                            handleClickDeleteItem(orderbuy.product.id)
                          }
                        >
                          QUITAR
                        </button>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="table__swept"></div>
          </div>
        );
      })}
      <div className="trashAll">
        <div className="trashAll__button">
          <span className="trashAll__buttonIcon">
            <BiTrash />
          </span>
          <span className="trashAll__buttonText">
            <button>
              <Link to="/Store" onClick={eraseAllProduct}>
                Vaciar Canasta
              </Link>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;

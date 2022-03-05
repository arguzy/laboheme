import { createContext, useContext, useState } from "react";
import swal from "sweetalert";
import "./Context.css";

export const CartContext = createContext({});
// Como espacio de trabajo los context son los que tienen mayor trabajo de javaScript porque tiene por objetivo darle en parte vida y funcionalidad al trabajo del proyecto
// Dicho esto, este context, es el encargado de hacer factible el algoritmo de la compra
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [popUp, setPopUp] = useState(false);
//declaro los State, con los que va a trabajar
  const addProduct = (product, quantity, amount) => {
// esta función flecha, recibe por props todos los datos del array que se conforma con cada producto individual, que son cargado en la página por el otro context (ProductDataContext.jsx)
const preOrder = { product, quantity, amount };
//se declara como constante un objeto con el arreglo de productos, y  "Quantity y Amount", que son dos valores numéricos que le llegan desde el conuterTab -que tiene su lifting StanUp en DetailCard-

    if (cart.length <= 0) {
      //1er condicional "si el array tiene indices?"
      setCart((prevState) => [...prevState, { product, quantity, amount }]);
      let measure = preOrder.quantity;
      setCartLength(measure);
      
    } else {
      //Al tener instancias indexadas, qué son? y Se Repiten?
      let repeat = cart.some((e) => preOrder.product.id === e.product.id);
      //con un some a true or false, para saber si repite
      if (repeat === true) {
        //condicional por si repite
        let index = cart.findIndex((e) => e.product.id === preOrder.product.id);
        let stoked = cart[index].quantity + preOrder.quantity;
        if (stoked > cart[index].product.stock) {
          //condicional por si el Stock es suficiente
          getAlert(cart[index].product.stock);
        } else {
          //Si hay stock, entonces se suman las cantidades y resultado reimprime en el objeto cuyo index ha sido encontrado como repetición
          let newAmount = cart[index].amount + preOrder.amount;
          cart[index].quantity = stoked;
          cart[index].amount = newAmount;
          let measure = cart
            .map((obj) => obj.quantity)
            .reduce((preValue, currentValue) => preValue + currentValue, 0);
          setCartLength(measure);
        }
      } else
      //El caso de tener instancias indexadas pero que no repiten el id - No necesita evaluar Stock, eso lo detiene el counterTab antes.
        setCart((prevState) => [...prevState, { product, quantity, amount }]);
      let measure = cart
        .map((obj) => obj.quantity)
        .reduce((preValue, currentValue) => preValue + currentValue, 0);
      setCartLength(measure);
    }
  };

  //funcion flecha para borrar una instancia indexada en el array del state cart, cuyo id, sea excluido por el filter
  const eraseProduct = (id) => {
    setCart((prev) => prev.filter((element) => element.product.id !== id));
    let measure = cart
      .map((obj) => obj.quantity)
      .reduce((preValue, currentValue) => preValue + currentValue, 0);
    cart.length <= 1 ? setCartLength(0) : setCartLength(measure);
  };

  //funcion flecha para setear declarar que el array incerto dentro del state cart no tiene instancias indexadas, sea de lo que fuere.
  const eraseAllProduct = () => {
    setCart([]);
    setCartLength(0);
  };
  //esta es una simple constante que por un map y un reduce lee y toma los valores numericos de todos los amount y los suma.
  const total = cart
    .map((obj) => obj.amount)
    .reduce((preValue, currentValue) => preValue + currentValue, 0);

  //Este popUp esta para informar al usuario que el limite en stock ha sido superado (se usa la librería porque no tiene sentido hacer tanto trabajo de modal por todo lo que ocurra, principio KISS)
  function getAlert(limit) {
    swal(`Lo sentimos pero sólo quedan ${limit}!`, {
      buttons: false,
      timer: 3000,
    });
  }
// A LO LARGO DE TODA LA REDACCIÓN DE EVENTOS SE HA TENIDO QUE TRABAJAR Y REPETIR UNA PIEZA DE CÓDIGO SOBRE EL STATE LLAMADO CARTLENGTH. QUE COMO SE EXPLICA EN EL README, NO FUNCIONA CON UN USE EFFECT, O NO SE COMPORTA COMO SE ESPERA QUE LO HAGA.
  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        eraseProduct,
        eraseAllProduct,
        total,
        cartLength,
        popUp,
        setPopUp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);

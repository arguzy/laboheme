import { createContext, useContext, useState } from "react";
import swal from 'sweetalert';
import './Context.css'

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [popUp, setPopUp] = useState(false)

  const addProduct = (product, quantity, amount) => {
    const preOrder = { product, quantity, amount };

    if (cart.length <= 0) {
      setCart((prevState) => [...prevState, { product, quantity, amount }]);
      let measure = preOrder.quantity;
      setCartLength(measure);
    } else {
      let repeat = cart.some((e) => preOrder.product.id === e.product.id);
      if (repeat === true) {
        let index = cart.findIndex((e) => e.product.id === preOrder.product.id);
        let stoked = cart[index].quantity + preOrder.quantity;
        if (stoked > cart[index].product.stock) {
          getAlert(cart[index].product.stock);
        } else {
          let newAmount = cart[index].amount + preOrder.amount;
          cart[index].quantity = stoked;
          cart[index].amount = newAmount;
          let measure = cart
            .map((obj) => obj.quantity)
            .reduce((preValue, currentValue) => preValue + currentValue, 0);
          setCartLength(measure);
        }
      } else
        setCart((prevState) => [...prevState, { product, quantity, amount }]);
      let measure = cart
        .map((obj) => obj.quantity)
        .reduce((preValue, currentValue) => preValue + currentValue, 0);
      setCartLength(measure);
    }
  };

  const eraseProduct = (id) => {
    setCart((prev) => prev.filter((element) => element.product.id !== id));
    let measure = cart
      .map((obj) => obj.quantity)
      .reduce((preValue, currentValue) => preValue + currentValue, 0);
    cart.length <= 1 ? setCartLength(0) : setCartLength(measure);
  };

  const eraseAllProduct = () => {
    setCart([]);
    setCartLength(0);
  };

  const total = cart
    .map((obj) => obj.amount)
    .reduce((preValue, currentValue) => preValue + currentValue, 0);

  function getAlert(limit){
    swal(`Lo sentimos pero sólo quedan ${limit}!`, {
      buttons: false,
      timer: 3000,
    });
  }

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
        setPopUp
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);

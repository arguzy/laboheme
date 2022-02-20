import { createContext, useContext, useState } from "react";



export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
 

  const addProduct = (product, quantity, amount) => {
    const preOrder = { product, quantity, amount };
    
    if (cart.length <= 0) {
      setCart((prevState) => [...prevState, { product, quantity, amount }]);
    } 
    else {
      let repeat = cart.some((e) => preOrder.product.id === e.product.id);
      if (repeat === true) {
        let index = cart.findIndex((e) => e.product.id === preOrder.product.id);
        let stoked = cart[index].quantity + preOrder.quantity;
        if (stoked > cart[index].product.stock) {
          alert("No hay más Stock");
        } else {
          let newAmount = cart[index].amount + preOrder.amount;
          cart[index].quantity = stoked;
          cart[index].amount = newAmount;
        }
      } else
        setCart((prevState) => [...prevState, { product, quantity, amount }]);
    }
  };

  const eraseProduct = (id) => {
    setCart((prev) => prev.filter((element) => element.product.id !== id));
  };

  const eraseAllProduct = () => {
    setCart([]);
  };

  const total = cart.map(obj => obj.amount).reduce((preValue, currentValue) => preValue + currentValue, 0);

  const cartLenght = cart.map(obj => obj.quantity).reduce((preValue, currentValue) => preValue + currentValue, 0)




  return (
    <CartContext.Provider
      value={{ cart, addProduct, eraseProduct, eraseAllProduct , total , cartLenght }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
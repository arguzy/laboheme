import { createContext, useEffect, useState } from "react";

const ProductDataContext = createContext({});

export default ProductDataContext;

export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/inventory")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((err) => setErrors(err))
      .finally(() => setIsLoading(false));
  }, []);

  /*
    const 
    */

  return (
    <ProductDataContext.Provider value={{ products, errors, isLoading }}>
      {children}
    </ProductDataContext.Provider>
  );
};
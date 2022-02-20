import React, { createContext, useEffect, useState } from "react";

import { getFirestore } from "../firebase/index";

const ProductDataContext = createContext({});
export default ProductDataContext;

export const ProductDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  

  

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("inventory");

    const getData = async () =>{
      setIsLoading(true)
      try{ 
        const res = await productsCollection.get();
      if (res.empty) console.log("no hay productos");
      setData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (err) {
          setErrors(err);
        } finally {
          setIsLoading(false);
        }
    };

   getData();
  }, []);

  return (
    <ProductDataContext.Provider value={{ data, errors, isLoading }}>
      {children}
    </ProductDataContext.Provider>
  );
};

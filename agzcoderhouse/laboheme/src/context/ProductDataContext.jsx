import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../firebase/index";

const ProductDataContext = createContext({});
export default ProductDataContext;

export const ProductDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {categoryid} = useParams();
  console.log(categoryid);
  useEffect(() => {
    const db = getFirestore();
    let productsCollection;
    if (categoryid) {
      productsCollection = db
        .collection("inventory")
        .where("category", "==", categoryid);
    } else productsCollection = db.collection("inventory");

    const getData = async () => {
      setIsLoading(true);
      try {
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
  }, [categoryid]);

  return (
    <ProductDataContext.Provider value={{ data, errors, isLoading }}>
      {children}
    </ProductDataContext.Provider>
  );
};

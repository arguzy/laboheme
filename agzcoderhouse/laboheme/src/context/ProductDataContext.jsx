import React, { createContext, useEffect, useState } from "react";

import { getFirestore } from "../firebase/index";

const ProductDataContext = createContext({});
export default ProductDataContext;

export const ProductDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
//Es el componente Context llamado a hacer de llave entre lo que se encuentra alojado en firestore como collection "inventory".
//sin el useEffect que se encuentra en esta pieza de código no arranca el proyecto.
  useEffect(() => {
    //como hook y más como useEffect tiene su ciclo de vida orientado a obtener la información y luego ser desmotado.
    const db = getFirestore();
    //la constante db, dispara la función getFirestor() encargada de conectar con el servidor de firebase.
    const productsCollection = db.collection("inventory");
    // se nombra una constante para ser la encargada de alojar lo que se traiga de una collection seleccionada, en este caso inventory.
    const getData = async () => {
      // get data es una función asincrona que nos devuelve una promise, que luego es manejada a razón de tres resultados factibles( "pedir y ejecutar cuando se esperar", "obtener"-succes-o "no obtener"-error o fail-).
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
  }, []);

  return (
    <ProductDataContext.Provider value={{ data, errors, isLoading }}>
      {children}
    </ProductDataContext.Provider>
  );
};

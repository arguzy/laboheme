import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/widgets/Spinner";
import DetailCard from "../../components/cards/DetailCard";
import PageNotFound from "../errors/PageNotFound";
import { getFirestore } from "../../firebase";
//Este componente fue el elegido para cumplir con la tarea del desafío de Lifting standUp, del counterTab.
//Por eso y por su estructura (es un componente que realiza una segunda consulta a firestore, para mostrar el detalle del producto, badaso en el hook useParams-que se trae en los argumentos el id, del componente ProductCard.jsx), es un componente con más js que jsx y que por lo tanto podría ser estructurado de otra manera para ser o un context, o un hook depende para que lado se lo mire. 
const ProductDetail = () => {
  const { ident } = useParams();
//declara el useParams y se desestructura el contenido del elemento que se trae de ProductCard.jsx
  const [product, setProduct] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(1);
  const [amount, setAmount] = useState(0);
//se declaran los useState que se van a usar en la lógica del counterTab y del useEffect que opera con el valor del useParams
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("inventory");
    const selectedProduct = productsCollection.doc(ident);
//Es una función async, que se trae la función "getFirestore()" del index.js de la carpeta firebase. Luego se declara una constante que indica de dónde/ qué collection se solicitará, y finalmente que parametro de la collection se usará para determinar que item se desea ver. 
    setIsLoading(true);
    selectedProduct.get().then((res) => {
      try {
        if (!res.exists) console.log("Not Have a Product");
        setProduct({ ...res.data(), id: res.id });
      } catch (err) {
        setErrors(err);
      } finally {
        setIsLoading(false);
      }
    });
  }, [ident]); //se desmonta y se limpia, para evitar que se un efecto de actualización constante de renderizado

  const plus = (onStock) => {
    if (counter < onStock) {
      setCounter((prevState) => prevState + 1);
    }
  };

  const minus = () => {
    if (counter > 1) {
      setCounter((prevState) => prevState - 1);
    }
  };
  const subtotal = (counter, price) => {
    setAmount(price * counter);
  };

  if (isLoading) {
    return <Spinner />;
  } else if (errors) {
    return <PageNotFound />;
  }

  return (
    <DetailCard
      product={product}
      minus={minus}
      plus={plus}
      counter={counter}
      amount={amount}
      subtotal={subtotal}
    />
  );
};

export default ProductDetail;

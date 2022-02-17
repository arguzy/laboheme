import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/widgets/Spinner";
import DetailCard from "../../components/cards/DetailCard";
import PageNotFound from "../errors/PageNotFound";
import { getFirestore } from "../../firebase";

const ProductDetail = () => {
  const { ident } = useParams();

  const [product, setProduct] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(1);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection('inventory');
    const selectedProduct = productsCollection.doc(ident);
    
    setIsLoading(true);
    selectedProduct.get().then((res) => {
      try{
        if(!res.exists) console.log("Not Have a Product")
        setProduct({...res.data(), id: res.id})
      } catch (err) { 
        setErrors(err);
      } finally{
        setIsLoading(false);
      };
    })}, [ident]);

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
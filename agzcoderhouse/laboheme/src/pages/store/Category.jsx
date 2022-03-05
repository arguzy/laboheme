import React, { useEffect, useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import PageNotFound from "../errors/PageNotFound";
import Spinner from "../../components/widgets/Spinner";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
//Es una reproducción parte de ProductDetail.jsx y parte del Store.jsx. Cualquier explicación, necesaria se remite a los dos componentes
//El aditivo que le diferencia un Switch para el css, más que nada.
const Category = () => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db
      .collection("inventory")
      .where("category", "==", category);
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
  }, [category]);

  let banner;
  switch (category) {
    case "beer":
      banner = "CERVEZA";
      break;
    case "burger":
      banner = "HAMBURGUESAS";
      break;
    case "appetizer":
      banner = "APERITIVOS";
      break;
    default:
      break;
  }

  if (isLoading) {
    return <Spinner />;
  } else if (errors) {
    return <PageNotFound />;
  }
  return (
    <section className="menu">
      <div className="menu__comeBack">
        <Link to="/Store">
          <RiArrowGoBackFill />
          Volver
        </Link>
      </div>
      <div className="menu__cover">
        <div className="menu__titleBox">
          <h1 className="menu__title">{banner}</h1>
          <h1 className="menu__title">{banner}</h1>
          <h1 className="menu__title">{banner}</h1>
        </div>
        <div className="menu__productBox">
          {data.map((product) => {
            return (
              <div className="menu__product" key={product.id}>
                <ProductCard
                  imageSrc={product.imageSrc}
                  name={product.name}
                  ident={product.id}
                  price={product.price}
                  stock={product.stock}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;

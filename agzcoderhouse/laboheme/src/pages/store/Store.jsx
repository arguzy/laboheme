import React, { useContext } from "react";
import ProductDataContext from "../../context/ProductDataContext";
import ProductCard from "../../components/cards/ProductCard";
import Spinner from "../../components/widgets/Spinner";
import PageNotFound from "../errors/PageNotFound";
import "./Store.modules.css";
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Store = () => {

  const { data, errors, isLoading } = useContext(ProductDataContext);

  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner />;
  } else if (errors) {
    return <PageNotFound />;
  }
  let categoryid = "appetizer";
  let categoryid2 = "burger";
  let categoryid3 = "beer";



  return (
    <section className="menu">
      <ul>
        <li><button onClick={() => navigate(`category/${categoryid}`)}>APERITIVOS</button></li>
        <li><button onClick={() => navigate(`category/${categoryid2}`)}>HAMBURGUESAS</button></li>
        <li><button onClick={() => navigate(`category/${categoryid3}`)}>CERVEZAS</button></li>
      </ul>
      <div className="menu__cover">
        <div className="menu__titleBox">
          <h1 className="menu__title">APERITIVOS</h1>
          <h1 className="menu__title">APERITIVOS</h1>
          <h1 className="menu__title">APERITIVOS</h1>
        </div>
        <div className="menu__productBox">
          {data.map((product) => {
            if (product.category === "appetizer") {
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="menu__cover">
        <div className="menu__titleBox">
          <h1 className="menu__title">HAMBURGUESAS</h1>
          <h1 className="menu__title">HAMBURGUESAS</h1>
          <h1 className="menu__title">HAMBURGUESAS</h1>
        </div>
        <div className="menu__productBox">
          {data.map((product) => {
            if (product.category === "burger") {
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="menu__cover">
        <div className="menu__titleBox">
          <h1 className="menu__title">CERVEZAS</h1>
          <h1 className="menu__title">CERVEZAS</h1>
          <h1 className="menu__title">CERVEZAS</h1>
        </div>
        <div className="menu__productBox">
          {data.map((product) => {
            if (product.category === "beer") {
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Store;
import React, { useContext } from "react";
import ProductDataContext from "../../context/ProductDataContext";
import ProductCard from "../../components/cards/ProductCard";
import Spinner from "../../components/widgets/Spinner";
import PageNotFound from "../errors/PageNotFound";
import "./Store.modules.css";

const Store = () => {
  const { products, errors, isLoading } = useContext(ProductDataContext);

  if (isLoading) {
    return <Spinner />;
  } else if (errors) {
    return <PageNotFound />;
  }
  return (
    <section className="menu">
      <div className="menu__cover">
        <div className="menu__titleBox">
          <h1 className="menu__title">APPETIZERS</h1>
          <h1 className="menu__title">APPETIZERS</h1>
          <h1 className="menu__title">APPETIZERS</h1>
        </div>
        <div className="menu__productBox">
          {products.map((product) => {
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
          <h1 className="menu__title">HAMBURGUEZAS</h1>
          <h1 className="menu__title">HAMBURGUEZAS</h1>
          <h1 className="menu__title">HAMBURGUEZAS</h1>
        </div>
        <div className="menu__productBox">
          {products.map((product) => {
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
          {products.map((product) => {
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
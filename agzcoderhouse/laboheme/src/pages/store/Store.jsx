import React, { useContext } from "react";
import ProductDataContext from "../../context/ProductDataContext";
import ProductCard from "../../components/cards/ProductCard";
import Spinner from "../../components/widgets/Spinner";
import PageNotFound from "../errors/PageNotFound";
import "./Store.modules.css";
import { useNavigate } from "react-router";



const Store = () => {

  const { data, errors, isLoading } = useContext(ProductDataContext);
  const navigate = useNavigate()

  let repeat;
  function matching(direction){
    repeat = data.some((e) => direction === e.category);
    if (repeat === true){
      navigate((`category/${direction}`))
  }

  }

  if (isLoading) {
    return <Spinner />;
  } else if (errors) {
    return <PageNotFound />;
  }


 
 return (
   <section className="menu">
      <button onClick={()=> matching("appetizer")}>Aperitivos</button>
      <button onClick={()=> matching("burger")}>Hamburguesas</button>
      <button onClick={()=> matching("beer")}>Cervezas</button>
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
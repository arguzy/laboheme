import React, { useContext } from "react";
import ProductDataContext from "../../context/ProductDataContext";
import ProductCard from "../../components/cards/ProductCard";
import Spinner from "../../components/widgets/Spinner";
import PageNotFound from "../errors/PageNotFound";
import { useNavigate } from "react-router";
import { GiHamburger, GiFrenchFries } from "react-icons/gi";
import { TiBeer } from "react-icons/ti";
import "./Store.modules.css";

// Este componente es el encargado de dar forma a la muestra inicial de productos
const Store = () => {
  const { data, errors, isLoading } = useContext(ProductDataContext);
  const navigate = useNavigate();
  //desestructura y trae los elementos que seran utilizados del useContext llamado ProductDataContext
  //Declara el hook useNavigate, para hacer el renderizado a la ruta siguiente
  let repeat;
  function matching(direction) {
    repeat = data.some((e) => direction === e.category);
    if (repeat === true) {
      navigate(`category/${direction}`);
    }
  }
  // la variable let y la funcion matching son usadas para poder armar el enroutedo al componente Category.jsx, llevando el string que voy a usar de parametro en el "where" de la async.
  // fue la mejor manera de armar un filtro por categorias que encontre. Me encasillé en separar los productos, y no lo pensé para darle un sentido logico, como por ejemplo categoría productos "veganos", que habría tenido más concepto de empresa
  if (isLoading) {
    return <Spinner />;
  } else if (errors) {
    return <PageNotFound />;
  }
  // Lo que debería haber sido un componente presentacional sencillo con un map quedo un poco embrutecido por la falta de singularidad: el "filtro" por decirlo así, de las categorías, era un aspecto que se podía atimzar fácil en un componente. El efecto banner que separa a los productos es otro.
  // La lógica se explica rápido, el map, corre por el array de data que se trae de firestore, y coloca los datos de cada categoría separada por un banner, en el componente cardProduct (que lo mejor que hace es encuadrarlo en tarjetas que el usuario puede entender rápidamente)
  return (
    <section className="menu">
      <ul className="menu__list">
        <li className="menu__listItem">
          <span>
            <GiHamburger />
            <button onClick={() => matching("burger")}>Hamburguesas</button>
          </span>
        </li>
        <li className="menu__listItem">
          <span>
            <GiFrenchFries />
            <button onClick={() => matching("appetizer")}>Aperitivos</button>
          </span>
        </li>
        <li className="menu__listItem">
          <span>
            <TiBeer />
            <button onClick={() => matching("beer")}>Cervezas</button>
          </span>
        </li>
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

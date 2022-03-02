import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Spinner from "../../components/widgets/Spinner";
import { getFirestore } from "../../firebase";
import PageNotFound from "../errors/PageNotFound";
import "./Store.modules.css";

const Greeting = () => {
  const { orderId } = useParams();
  const [info, setInfo] = useState({});
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      setIsLoading(true);
      db.collection("ORDERCONFIRMED")
        .doc(orderId)
        .get()
        .then((res) => setInfo({ id: res.id, ...res.data() }))
        .catch((err) => setErrors(err))
        .finally(() => setIsLoading(false));
    }, 1000);
  }, [orderId]);

  //.then((res) =>{ if(!res.ok) console.log("La orden fue procesada pero no pudo ser expuesta, porque firestore demora demasiado")})


  if (isLoading) {
    return <Spinner />;
  } else if (errors) {
    return <PageNotFound />;
  }

  const client = info?.buyer?.form?.name;
  const balance = info?.total?.total;

  return (
    <>
      <section className="greetings">
        <div className="greetings__Info">
          <div className="greetings__client">
            <p>
              Hola <span className="greetings__highlight">{client}</span>,
              Agradecemos tu compra, ya la estamos preparando!
            </p>
          </div>
          <div className="greetings__totalValue">
            <p>
              Valor a ser abonado en local:{" "}
              <span className="greetings__highlight">${balance}</span>{" "}
            </p>
          </div>
          <div className="greetings__nextStepsBox">
            <button className="greetings__btnBack">
              <Link to={"/"}>VOLVER</Link>
            </button>
            <button className="greetings__btnChangeOrder">
              CAMBIAR DATOS
            </button>
            <button className="greetings__btnDeleteOrder">
              ELIMINAR ORDER
            </button>
          </div>
        </div>

        {info.items?.cart.map((salesCheck) => {
          return (
            <div key={salesCheck.product.id}>
              <table className="table tableOnGreetings">
                <tbody className="table__body onGreetings">
                  <tr className="table__deck onGreetings">
                    <th scope="col" className="table__headline onGreetings">
                      Imagen
                    </th>
                    <th scope="col" className="table__headline onGreetings">
                      Nombre
                    </th>
                    <th scope="col" className="table__headline onGreetings">
                      Precio
                    </th>
                    <th scope="col" className="table__headline onGreetings">
                      Cantidad
                    </th>
                    <th scope="col" className="table__headline onGreetings">
                      Subtotal
                    </th>
                  </tr>
                  <tr className="table__dataRow DataRowOnGreetings">
                    <td
                      dataLabel="Imagen"
                      className="table__data imgOnGreetings"
                    >
                      <img
                        className="table__Img"
                        src={salesCheck.product.imageSrc}
                        alt={salesCheck.product.name}
                      />
                    </td>
                    <td dataLabel="Nombre" className="table__data">
                      <p className="table__dataText onGreetings">
                        {salesCheck.product.name}
                      </p>
                    </td>
                    <td dataLabel="Precio" className="table__data">
                      <p className="table__dataText onGreetings">
                        $ {salesCheck.product.price}
                      </p>
                    </td>
                    <td dataLabel="Cantidad" className="table__data">
                      <p className="table__dataText onGreetings">
                        {salesCheck.quantity}
                      </p>
                    </td>
                    <td dataLabel="Subtotal" className="table__data">
                      <p className="table__dataText onGreetings">
                        ${salesCheck.amount}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="table__swept"></div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Greeting;

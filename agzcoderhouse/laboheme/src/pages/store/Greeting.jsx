import { useEffect, useState } from "react";
import { useParams } from "react-router";
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
      <div className="totals__info">

      <div>
        <p>Hola {client} Agradecemos tu compra</p>
      </div>
      <div >
        <p>Valor a ser abonado en local: ${balance} </p>
      </div>
      </div>
      
      {info.items?.cart.map((salesCheck) => {

        return (
          <div key={salesCheck.product.id}>
            <table className="table">
              <tbody className="table__body">
                <tr className="table__deck">
                  <th scope="col" className="table__headline">
                    Imagen
                  </th>
                  <th scope="col" className="table__headline">
                    Nombre
                  </th>
                  <th scope="col" className="table__headline">
                    Precio
                  </th>
                  <th scope="col" className="table__headline">
                    Cantidad
                  </th>
                  <th scope="col" className="table__headline">
                    Subtotal
                  </th>
                </tr>
                <tr className="table__dataRow">
                  <td dataLabel="Imagen" className="table__data">
                    <img
                      className="table__Img"
                      src={salesCheck.product.imageSrc}
                      alt={salesCheck.product.name}
                    />
                  </td>
                  <td dataLabel="Nombre" className="table__data">
                    <p className="table__dataText">{salesCheck.product.name}</p>
                  </td>
                  <td dataLabel="Precio" className="table__data">
                    <p className="table__dataText">
                      $ {salesCheck.product.price}
                    </p>
                  </td>
                  <td dataLabel="Cantidad" className="table__data">
                    <p className="table__dataText">
                      {salesCheck.quantity}
                    </p>
                  </td>
                  <td dataLabel="Subtotal" className="table__data">
                    <p className="table__dataText">
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

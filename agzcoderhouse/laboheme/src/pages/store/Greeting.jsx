import { useEffect, useState } from "react";
import ModalForm from "../../components/widgets/ModalForm";
import PageNotFound from "../errors/PageNotFound";
import Spinner from "../../components/widgets/Spinner";
import swal from "sweetalert";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Store.modules.css";
//Es el componente que cierra el circulo del CRUD para la orden de take away del cliente. Este componente en el return toma la estructura del OrderSummary

const Greeting = () => {
  const { orderId } = useParams();
  const [info, setInfo] = useState({});
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // el useEffect para traer por el argumento que tiene el useParams, la data de la collection "ORDERCONFIRMED"
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
  // el useEffect para ELIMINAR con el argumento que tiene el useParams, la data de la collection "ORDERCONFIRMED"
  // acá se podía hacer un Batch. Era mucho mejor practica.
  const handleClickDeleteOrder = () => {
    const db = getFirestore();
    setIsLoading(true);
    db.collection("ORDERCONFIRMED")
      .doc(orderId)
      .delete()
      .then((res) => {
        console.log("Datos Eliminados", res);
        deleteOk();
      })
      .catch((err) => {
        setErrors(err);
        deleteFail();
      })
      .finally(() => setIsLoading(false));
  };

  function deleteOk() {
    swal(`La orden ha sido eliminada`, {
      buttons: false,
      timer: 1500,
    });
  }

  function deleteFail() {
    swal(`No has logrado eliminar la orden, intentalo nuevamente`, {
      buttons: false,
      timer: 3000,
    });
  }

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
              <ModalForm buttonText={"ACTUALIZAR DATOS"} orderId={orderId} />
            </button>
            <button
              className="greetings__btnDeleteOrder"
              onClick={handleClickDeleteOrder}
            >
              <Link to={"/"}>CANCELAR ORDEN</Link>
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

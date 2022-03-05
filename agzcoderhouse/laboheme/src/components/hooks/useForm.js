import { useState } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase";

//Este componente es un custom hook, porque su estructura es completamente lógica y tiene por objetivo ser utilizado en momentos puntuales y no a lo largo de todo el sitio y la interacción con el usuario. 
export const useForm = (initialForm, validateForm) => {
  const { cart, total, eraseAllProduct } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [faild, setFaild] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
//se trea lo que va a ser usado del context CartContext
//se crean los States a ser usados en las funciones

//se trae a cuenta el UseNavigate para redirigir al usuario y renderízar una vez que se hace el CHECKOUT y se pasa a la página de agradecimientos.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  //la función para captar los valores en los formularios que durieran existir.
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  //la función para despiarar los mensajes de error en la vista del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateForm(form));

    //La constante que construye el objeto que conforma cada orden de compra
    const ORDERCONFIRMED = {
      buyer: { form },
      items: { cart },
      total: { total },
    };
    //función async para hacer el post de la orden
    if (Object.keys(errors).length === 0) {
      const db = getFirestore();
      const collection = db.collection("ORDERCONFIRMED");
      setLoading(true);
      collection
        .add(ORDERCONFIRMED)
        .then((res) => {
          console.log("Orden Enviada", res.id);
          eraseAllProduct();
          navigate(`/greeting/${res.id}`);
        })
        .catch((err) => setFaild(err))
        .finally(setLoading(false));
    } else {
      alert("No se ha enviado revisa los datos ingresados");
    }
  };
  //función async para hacer el Update de la orden
  const handleUpdate = (e, orderId) => {
    e.preventDefault();

    setErrors(validateForm(form));

    const ORDERUPDATE = {
      buyer: { form },
    };

    if (Object.keys(errors).length === 0) {
      const db = getFirestore();
      const collection = db.collection("ORDERCONFIRMED");
      setLoading(true);
      collection
        .doc(orderId)
        .update(ORDERUPDATE)
        .then((res) => {
          console.log("Datos Actualizados", res);
          UpdateOk();
        })
        .catch((err) => setFaild(err))
        .finally(setLoading(false));
    } else {
      UpdateFail();
    }
  };
//las funciones que encapsulan los popups para el manejo del exito o fracaso del trabajo con la promise
  function UpdateOk() {
    swal(`Han sido actualizados los datos!`, {
      buttons: false,
      timer: 1500,
    });
  }

  function UpdateFail() {
    swal(`No se ha enviado revisa los datos ingresados`, {
      buttons: false,
      timer: 3000,
    });
  }

  return {
    form,
    errors,
    faild,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
    handleUpdate,
  };
};

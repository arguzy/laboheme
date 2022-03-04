import { useState } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase";

export const useForm = (initialForm, validateForm) => {
  const { cart, total, eraseAllProduct } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [faild, setFaild] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateForm(form));

    const ORDERCONFIRMED = {
      buyer: { form },
      items: { cart },
      total: { total },
    };

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

  const handleUpdate = (e , orderId) => {
    e.preventDefault();

    setErrors(validateForm(form));

    const ORDERUPDATE = {
      buyer: { form }
    };

    if (Object.keys(errors).length === 0) {
      const db = getFirestore();
      const collection = db.collection("ORDERCONFIRMED");
      setLoading(true);
      collection.doc(orderId)
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
  
  function UpdateOk(){
    swal(`Han sido actualizados los datos!`, {
      buttons: false,
      timer: 1500,
    });
  }

  function UpdateFail(){
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
    handleUpdate
  };
};

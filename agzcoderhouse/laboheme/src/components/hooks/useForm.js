import { useState } from "react";
import { useNavigate } from "react-router";
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



  return {
    form,
    errors,
    faild,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

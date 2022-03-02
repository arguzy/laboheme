import React from "react";
import PageNotFound from "../../pages/errors/PageNotFound";
import { useForm } from "../hooks/useForm";
import Spinner from "../widgets/Spinner";
import "./CheckOutForm.css"

const initialForm = {
  name: "",
  email: "",
  phone: "",
};

const validationsForm = (form) => {
  let errors = {};
  let errorName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let errorEmail = /^(\w+[/./-/_]?){1,}@[a-z]+[/.]\w{2,}$/;
  let errorPhone = /^.{10,10}$/;

  if (!form.name.trim()) {
    errors.name = "Nombre y apellido son necesarios";
  } else if (!errorName.test(form.name.trim())) {
    errors.name = "No parece un nombre o apellido real";
  }

  if (!form.email.trim()) {
    errors.email = "La casilla de correos es necesaria";
  } else if (!errorEmail.test(form.email.trim())) {
    errors.email = "Trata otra vez, pero con una real";
  }

  if (!form.phone.trim()) {
    errors.phone = "El nro de teléfono es requerido";
  } else if (!errorPhone.test(form.phone.trim())) {
    errors.phone = "Revisa el número ejemplo, algo esta mal";
  }

  return errors;
};

const CheckOutForm = () => {
  const {
    form,
    errors,
    loading,
    faild,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  if (loading) {
    return <Spinner />;
  } else if (faild) {
    return <PageNotFound />;
  }

  return (
    <div className="checkOut__form">
      <form onSubmit={handleSubmit} className="checkOut__formFrame">
        <label htmlFor="name" className="checkOut__formLabel">NOMBRE y APELLIDO</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Escribe tu Nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
          className="checkOut__formInput"
        />
        {errors.name && <p className="checkOut__formError">{errors.name}</p>}

        <label htmlFor="email" className="checkOut__formLabel">EMAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Escribe tu Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
          className="checkOut__formInput"
        />
        {errors.email && <p className="checkOut__formError">{errors.email}</p>}

        <label htmlFor="phone" className="checkOut__formLabel">TELÉFONO</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Ej; 1551998877"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.phone}
          required
          className="checkOut__formInput"
        />
        {errors.phone && <p className="checkOut__formError">{errors.phone}</p>}

        <input type="submit" value="Enviar" className="checkOut__formButton"/>
      </form>
    </div>
  );
};

export default CheckOutForm;

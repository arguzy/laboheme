import React from "react";
import PageNotFound from "../../pages/errors/PageNotFound";
import { useForm } from "../hooks/useForm";
import Spinner from "../widgets/Spinner";

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
    errors.name = "El su nombre y apellido son requeridos";
  } else if (!errorName.test(form.name.trim())) {
    errors.name = "El campo sólo acepta espacios y letras";
  }

  if (!form.email.trim()) {
    errors.email = "La casilla de correo es requerida";
  } else if (!errorEmail.test(form.email.trim())) {
    errors.email = "El campo sólo acepta una dirección de correo válida";
  }

  if (!form.phone.trim()) {
    errors.phone = "El nro de teléfono es requerido";
  } else if (!errorPhone.test(form.phone.trim())) {
    errors.phone = "El campo sólo un número de teléfono correcto";
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
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NOMBRE y APELLIDO</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Escribe tu Nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p>{errors.name}</p>}

        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Escribe tu Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="phone">TELÉFONO</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Ej; 1551998877"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.phone}
          required
        />
        {errors.phone && <p>{errors.phone}</p>}

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default CheckOutForm;

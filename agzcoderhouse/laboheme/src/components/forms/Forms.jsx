import React, { useState } from "react";

export default function Forms() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario Enviado");
  };

  return (
    <>
      <form action="" autoComplete="on" onSubmit={handleSubmit}>
        <label htmlFor="firstNameClient">NOMBRE</label>
        <input
          type="text"
          id="firstNameClient"
          name="firstNameClient"
          placeholder="Escribe tu Nombre"
          value={form.firstNameClient}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="lastnameClient">APELLIDO</label>
        <input
          type="text"
          id="lastNameClient"
          name="lastNameClient"
          placeholder="Escribe tu Apellido"
          value={form.lastNameClient}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="emailClient">E-MAIL</label>
        <input
          type="email"
          id="emailClient"
          name="emailClient"
          placeholder="Escribe tu Casilla de e-mail"
          value={form.emailClient}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="phoneClient">TELÉFONO</label>
        <input
          type="number"
          id="phoneClient"
          name="phoneClient"
          placeholder="Escribe tu Número de Teléfono"
          value={form.phoneClient}
          onChange={handleChange}
        />
        <br />

        <input
          type="radio"
          id="cash"
          name="clientWayToPay"
          value="cash"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="clientWayToPay">Dinero</label>
        
        <br />
        <input
          type="radio"
          id="qr"
          name="clientWayToPay"
          value="qr"
          onChange={handleChange}
        />
        <label htmlFor="clientWayToPay">Código QR</label>
        <br />

        <input
          type="radio"
          id="creditcard"
          name="clientWayToPay"
          value="creditcard"
          onChange={handleChange}
        />
        <label htmlFor="clientWayToPay">Targeta de Crédito</label>
        <br />

        <input type="submit" value="Finalizar Compra" />
      </form>
    </>
  );
}

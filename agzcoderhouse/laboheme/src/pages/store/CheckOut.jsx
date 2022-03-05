import React from "react";
import CheckOutForm from "../../components/forms/CheckOutForm";
//Componente presentacional, lo más importante que hace es llamar al componente CheckOutForm en el momento indicado para construir de manera definitiva la orden de compra.
const CheckOut = () => {
  return (
    <div className="checkOut">
      <div className="checkOut__overley">
        <div className="checkOut__framming">
          <div className="checkOut__content">
            <h2 className="checkOut__title">INTRODUZCA LOS DATOS</h2>
            <div className="checkOut__line"></div>
            <CheckOutForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

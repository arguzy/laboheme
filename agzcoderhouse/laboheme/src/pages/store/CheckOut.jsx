import React from "react";
import CheckOutForm from "../../components/forms/CheckOutForm";

const CheckOut = () => {
  return (
    <div className="checkOut">
      <div className="checkOut__overley">
        <div className="checkOut__framming">
          <div className="checkOut__content">
            <h2 className="checkOut__title">INTRODUZCA LOS DATOS</h2>
            <CheckOutForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

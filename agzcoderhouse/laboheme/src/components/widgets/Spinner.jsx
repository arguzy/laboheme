import React from "react";
import "./Widgets.css";
//El componente salió como idea del loading nro 7 y 10 de acá https://codepen.io/Manoz/pen/kyWvQw
const Spinner = () => {
  return (
    <div className="loadOverlay">
      <div className="load">
        <div className="load__bar"></div>
      </div>
    </div>
  );
};

export default Spinner;

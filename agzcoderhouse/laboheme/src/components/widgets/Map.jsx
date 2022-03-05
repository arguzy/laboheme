import React from "react";
import "./Widgets.css";
//Inicialmente se creo el componente porque vi que en google había una librería con api's para los map's etc. Pensé que era mucho más complicado.
//intenté poner le iframe, salió bien, quedo. El componente esta para hacer singularidad o molecularización de componentes nada más.
const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.817560354189!2d-58.44148168517723!3d-34.58348256393388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb592bb1bba45%3A0xe4e22d91ebc469fb!2sLa%20Boh%C3%A8me!5e0!3m2!1ses-419!2sar!4v1646059316030!5m2!1ses-419!2sar"
      title="La Bohème"
      allowFullScreen="Nuestro Local"
      loading="lazy"
      className="widget__map"
    ></iframe>
  );
};

export default Map;

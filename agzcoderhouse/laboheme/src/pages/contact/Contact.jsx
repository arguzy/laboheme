import React from "react";
import Map from "../../components/widgets/Map";
import "./Contact.modules.css";
import {
  GiLaurelsTrophy,
  GiFireSilhouette,
  GiGuardedTower,
  GiBreakingChain,
  GiHeartKey,
} from "react-icons/gi";
import { LittleBanners } from "../../components/widgets/LittleBanners";
import Hero from "../../components/widgets/Hero";

const Contact = () => {
  return (
    <section className="contact">
      <article className="contact__hero">
        <Hero backgrundHero="HeroContact" title="hola" text="lorem" />
      </article>
      <article className="contact__drops">
        <span className="contact__titleBox">
          <h2 className="contact__title">
            Nuestros Principios y Valores Fundantes
          </h2>
        </span>
        <div className="contact__basis">
          <LittleBanners
            background="quality"
            icon={<GiLaurelsTrophy />}
            title="Calidad"
            text="Nos gusta hacer bien las cosas. Buscamos la excelencia en todo lo
    que hacemos."
          />
          <LittleBanners
            background="enterprising"
            icon={<GiFireSilhouette />}
            title="Con Espíritu"
            text="Asumimos riesgos y nos animamos a hacer las cosas de una manera diferente, nueva, entretenida."
          />
          <LittleBanners
            background="independence"
            icon={<GiBreakingChain />}
            title="Inefables"
            text="Sin estar condicionados por responder a intereses externos, somos lo que queremos ser."
          />
          <LittleBanners
            background="hospitality"
            icon={<GiHeartKey />}
            title="A la medida"
            text="Sean clientes, compañeros de trabajo o proveedores, el objetivo es tratarlos bien."
          />

          <LittleBanners
            background="liable"
            icon={<GiGuardedTower />}
            title="Seguros"
            text="Sabemos trabajar nuestro bar, que alimenta a lo más importante, nuestros clientes."
          />
        </div>
      </article>
      <article className="contact__location">
        <div className="contact__map">
          <Map />
        </div>
        <div className="contact__locationTitleBox">
          <h2 className="contact__locationTitle">¿Dónde esta el local?</h2>
        </div>
        <di className="contact__info">
          <h3 className="contact__locationSubtitle">
            Diás y Horarios de Atención
          </h3>
          <ul className="contact__infoList">
            <li className="contact__infoItem">
              <p>LUNES A DOMINGOS</p>
            </li>
            <li className="contact__infoItem">
              <p>HORARIOS:</p>
            </li>
            <li className="contact__infoItem">
              <p>12:00-12:00</p>
            </li>
            <li className="contact__infoItem">
              <p>20:00-00:00</p>
            </li>
          </ul>
        </di>
      </article>
    </section>
  );
};

export default Contact;

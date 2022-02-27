import React from "react";
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
      <div className="contact__hero">
        <Hero backgrundHero="HeroContact" title="hola" text="lorem" />
      </div>
      <article className="contact__drops">
        <span className="contact__titleBox">
          <h2 className="contact__title">Nuestros Principios y Valores Fundantes</h2>
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
    </section>
  );
};

export default Contact;

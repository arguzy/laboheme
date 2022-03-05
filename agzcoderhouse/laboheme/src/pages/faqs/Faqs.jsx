import React from "react";
import Hero from "../../components/widgets/Hero";
import Quiz from "../../components/widgets/Quiz";
import "./Faqs.modules.css";
//contact es un componente meramente presentacional, no tiene aspectos de lógica o desarrollo de un algoritmo.
//Se podría dejar el paquete de faqs__grid en un component para que quede mejor el código.
const Faqs = () => {
  return (
    <section className="faqs">
      <article className="faqs__wall">
        <div className="faqs__wallCenter">
          <Hero
            backgrundHero="HeroFaqs"
            title="PARA LAS PREGUNTAS"
            text="Aquí encontrarás todo lo necesario para elegirnos"
          />
        </div>
        <div className="faqs__grida"></div>
        <div className="faqs__gridb"></div>
        <div className="faqs__gridc"></div>
        <div className="faqs__gridd"></div>
        <div className="faqs__gride"></div>
        <div className="faqs__grida1"></div>
        <div className="faqs__gridb1"></div>
        <div className="faqs__gridc1"></div>
        <div className="faqs__gridd1"></div>
        <div className="faqs__gride1"></div>
        <div className="faqs__grida2"></div>
        <div className="faqs__gridb2"></div>
        <div className="faqs__gridc2"></div>
        <div className="faqs__gridd2"></div>
        <div className="faqs__gride2"></div>
        <div className="faqs__grida3"></div>
        <div className="faqs__gridb3"></div>
        <div className="faqs__gridc3"></div>
        <div className="faqs__gridd3"></div>
        <div className="faqs__gride3"></div>
      </article>
      <article className="faqs__card">
        <Quiz
          backgroundCard="quiz__background QuizChef"
          question="QUIÉN COCINA?"
          answer=" Sergio Busquets es nuestro CRACK en la cocina! Tiene experiencia, su sello, su personalidad, siempre en evolución... nunca falla!"
        />
        <Quiz
          backgroundCard="quiz__background QuizMeat"
          question="QUÉ CARNE USAMOS?"
          answer="Cortes roastBeef de Angus Aberdeen, es perfecta, nos aporta la textura ideal y el sabor se adapta perfectamente a los ingredientes que usamos!"
        />
        <Quiz
          backgroundCard="quiz__background QuizVegetable"
          question="Y LOS VEGETALES, QUÉ?"
          answer="Gracias a los mejores productores regionales, podemos estar orgullosos de lo que te damos en cada hamburguesa."
        />
        <Quiz
          backgroundCard="quiz__background QuizBread"
          question="QUÉ PAN USAMOS?"
          answer="Con nuestro pan de papa, reemplazamos toda la harina de trigo. El horneado es a sartén, y se hace en el momento."
        />
        <Quiz
          backgroundCard="quiz__background QuizBeer"
          question="AH! Y LA BIRRA?"
          answer="Somos partner de la cervecería que cambió la historia de la cerveza artesanal en el sur del país... CERVEZA PATAGONIA"
        />
      </article>
    </section>
  );
};

export default Faqs;

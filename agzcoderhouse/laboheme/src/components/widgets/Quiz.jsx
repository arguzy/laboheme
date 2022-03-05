import React, { useState } from "react";
import { GiBackForth } from "react-icons/gi";
import "./Widgets.css";
// Tanto la Section como este componente, se hicieron con la idea que salió de https://codepen.io/noahraskin/pen/JjrydbL y de acá https://codepen.io/darkwing/pen/DrNEzy
//No tiene nada dificil, recibe por props el contenido a poner dentro de la pseudo card que se armo. Y luego, se usa un estado con un condicional, para la asignación del css.

const Quiz = ({ backgroundCard, question, answer }) => {
  const [turnCard, setTurnCard] = useState(false);

  let card = "quiz front";

  function handleClickOnCard() {
    setTurnCard((prev) => !prev);
  }

  if (turnCard) {
    card = "quiz back";
  }

  return (
    <div className={card} onClick={handleClickOnCard}>
      <div className="quiz__overley">
        <div className="quiz__signal">
          <GiBackForth />
        </div>

        <div className={turnCard ? "quiz__backgroundOff" : backgroundCard}>
          <div className="quiz__content">
            <h1
              className={turnCard ? "quiz__question off" : "quiz__question on"}
            >
              {question}
            </h1>
            <p className={turnCard ? "quiz__answer on" : "quiz__answer off"}>
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

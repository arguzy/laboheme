import React, { useState } from "react";
import "./Widgets.css";

export const LittleBanners = ({ background, icon, title, text }) => {
  const [drop, setDrop] = useState(false);

  let className = "about";
  let visible = "about__info";
  let iconMoves = "about__icon"

  function handleClick() {
    setDrop((pre) => !pre);
  }
  if (drop) {
    className = "about expand";
    visible = "about__info visibleOn";
    iconMoves = "about__icon moveIconGo"
  } else {
    className = "about shrink";
    visible = "about__info visibleOff";
    iconMoves = "about__icon moveIconBack"

  }

  return (
    <div className={className}>
      <div className={background} id="about__framming" onClick={handleClick}>
        <div className="about__content">
          <div className="about__iconBox">
            <p className={iconMoves}>{icon}</p>
          </div>
          <div className={visible}>
            <h3 className="about__title" datatype="text">
              {title}
            </h3>
            <p className="about__text" datatype="text">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

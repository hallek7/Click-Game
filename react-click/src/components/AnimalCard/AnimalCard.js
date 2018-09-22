import React from "react";
import "./AnimalCard.css";

const AnimalCard = props => (
  <div className="card">
    <div className="img-container">
      <a
        onClick={() => {
          console.log("selecting animal... props are ...", props);
          props.selectAnimal(props.animal);
        }}
        className={
          props.curScore === 0
            ? "style_prevu_kit style_prevu_kit_ex"
            : "style_prevu_kit"
        }
      >
        <img alt={props.id} src={props.image} />
      </a>
    </div>
  </div>
);

export default AnimalCard;

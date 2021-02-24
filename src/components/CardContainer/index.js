import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}

export default CardContainer;
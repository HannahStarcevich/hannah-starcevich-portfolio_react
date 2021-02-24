import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={props.image} className="card-img-top" alt={props.title}></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a class="btn btn-primary" href={props.site} role="button">Live Site</a>
        <a class="btn btn-outline-primary" href={props.github} role="button">GitHub</a>
      </div>
    </div>
 </div>
</div>
  );
}

export default Card;
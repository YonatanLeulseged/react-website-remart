import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out what your local CSUS </h1>
      <div className="cards__continer">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

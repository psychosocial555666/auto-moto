import React from "react";
import engine from "../../../img/engine.svg";
import power from "../../../img/power.svg";
import capacity from "../../../img/capacity.svg";
import transmission from "../../../img/transmission.svg";
import {getCars} from "./../../reducer/data/selectors.js"
import {connect} from "react-redux";

function Description (props) {

  const {
    cars,
  } = props
  
  const car = cars[0];

  return (
    <React.Fragment>
      <section className="description">
        <h1 className="description__name">{car.name}</h1>
        <ul className="description__list">
          <li className="description__item">
            <img src={engine} alt="Engine"/>
            <span>{car.shortCharacteristics.fuel}</span>
          </li>
          <li className="description__item">
            <img src={transmission} alt="Transmission"/>
            <span>{car.shortCharacteristics.transmission}</span>
          </li>
          <li className="description__item">
            <img src={power} alt="Power"/>
            <span>{car.shortCharacteristics.power}</span>
          </li>
          <li className="description__item">
            <img src={capacity} alt="Capacity"/>
            <span>{car.shortCharacteristics.engine}</span>
          </li>
        </ul>
        <div className="description__wrapper">
          <p className="description__current-price">{car.price.currentPrice}</p>
          <span className="description__prev-price">{car.price.prevPrice}</span>
        </div>
        <button type="button" className="description__submit button">Оставить заявку</button>
        <button type="button" className="description__credit button">В кредит от {car.price.creditPrice}</button>
      </section>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  cars: getCars(state),
});

export default connect(mapStateToProps, null)(Description);
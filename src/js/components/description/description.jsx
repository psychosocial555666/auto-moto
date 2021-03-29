import React from "react";
import engine from "../../../img/engine.svg";
import power from "../../../img/power.svg";
import capacity from "../../../img/capacity.svg";
import transmission from "../../../img/transmission.svg";
import {getCars} from "./../../reducer/data/selectors.js"
import {connect} from "react-redux";
import { carsType } from "../../types";

function Description (props) {

  const {
    cars,
  } = props
  

  return (
    <React.Fragment>
      <section className="description">
        <h1 className="description__name">{cars.name}</h1>
        <ul className="description__list">
          <li className="description__item">
            <img src={engine} alt="Engine"/>
            <span>{cars.shortCharacteristics.fuel}</span>
          </li>
          <li className="description__item">
            <img src={transmission} alt="Transmission"/>
            <span>{cars.shortCharacteristics.transmission}</span>
          </li>
          <li className="description__item">
            <img src={power} alt="Power"/>
            <span>{cars.shortCharacteristics.power}</span>
          </li>
          <li className="description__item">
            <img src={capacity} alt="Capacity"/>
            <span>{cars.shortCharacteristics.engine}</span>
          </li>
        </ul>
        <div className="description__wrapper">
          <p className="description__current-price">{cars.price.currentPrice}</p>
          <span className="description__prev-price">{cars.price.prevPrice}</span>
        </div>
        <button type="button" className="description__submit button">Оставить заявку</button>
        <button type="button" className="description__credit button">В кредит от {cars.price.creditPrice}</button>
      </section>
    </React.Fragment>
  );
}

Description.propTypes = {
  cars: carsType,
}

const mapStateToProps = (state) => ({
  cars: getCars(state),
});

export default connect(mapStateToProps, null)(Description);
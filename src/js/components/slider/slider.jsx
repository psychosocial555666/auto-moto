import React from "react";
import arrow from "../../../img/arrow.svg";
import {getCars} from "./../../reducer/data/selectors.js";
import {connect} from "react-redux";
import {getCurrentSlide} from "../../reducer/ui/selectors";
import {ActionCreator} from "../../reducer/ui/ui.js"
import PropTypes from 'prop-types';
import { carsType } from "../../types";

function Slider (props) {
  const {
    cars,
    currentSlide,
    onNextButtonClick,
    onPrevButtonClick,
  } = props;


  return (
    <React.Fragment>
      <section className="photo-slider">
        <div className="photo-slider__photo">
          <img src={cars.photos[currentSlide]} alt="Big_picture" width="600" height="375"/>
        </div>

        <div className="photo-slider__container">
          <button type="button" className="photo-slider__button photo-slider__button--prev" onClick={() => onPrevButtonClick(currentSlide)} disabled={currentSlide === 0 ? true : false}>
            <img src={arrow} alt="back" width="14" height="14"/>
          </button>
          {cars.photos.map((item) => {
            return (
              <div key={item} className="photo-slider__miniature">
                <img src={item} alt="miniature" width="128" height="80"/>
              </div>
            )
          })}
          <button type="button" className="photo-slider__button photo-slider__button--next" onClick={() => onNextButtonClick(currentSlide)} disabled={currentSlide === cars.photos.length - 1 ? true : false}>
            <img src={arrow} alt="next" width="14" height="14"/>
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

Slider.propTypes = {
  cars: carsType,
  currentSlide: PropTypes.number,
  onPrevButtonClick: PropTypes.func,
  onNextButtonClick: PropTypes.func,
}

const mapStateToProps = (state) => ({
  cars: getCars(state),
  currentSlide: getCurrentSlide(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPrevButtonClick(currentSlide) {
    dispatch(ActionCreator.reduceSlide(currentSlide));
  },
  onNextButtonClick(currentSlide) {
    dispatch(ActionCreator.increaseSlide(currentSlide));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);

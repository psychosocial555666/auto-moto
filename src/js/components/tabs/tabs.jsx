import React from "react";
import {getCar} from "./../../reducer/data/selectors.js"
import {connect} from "react-redux";
import {getCurrentTab} from "../../reducer/ui/selectors";
import {ActionCreator} from "../../reducer/ui/ui.js"
import {TabType} from "../../const.js";
import Characteristics from "../characteristics/characteristics.jsx";
import Reviews from "../reviews/reviews.jsx";
import Contacts from "../contacts/contacts.jsx";
import PropTypes from 'prop-types';
import {carType} from "../../types";

function Tabs (props) {
  const {
    car,
    currentTab,
    onTabButtonClick,
  } = props;

  let tabScreen;

  switch (currentTab) {
    case TabType.CHARACTERISTICS:
      tabScreen = <Characteristics characteristics={car.characteristics} />
      break;
    case TabType.REVIEWS:
      tabScreen = <Reviews reviews={car.reviews}/>
      break;
    case TabType.CONTACTS:
      tabScreen = <Contacts />
      break;
  
    default:
      break;
  };

  return (
    <React.Fragment>
      <section className="tabs">
        <div className="tabs__controls">
          <button className={
            currentTab === TabType.CHARACTERISTICS ? "tabs__control tabs__control--characteristics tabs__control--active" : "tabs__control tabs__control--characteristics"}
            onClick = {() => {onTabButtonClick(TabType.CHARACTERISTICS)}}
            >Характеристики</button>
          <button className={
            currentTab === TabType.REVIEWS ? "tabs__control tabs__control--reviews tabs__control--active" : "tabs__control tabs__control--reviews"}
            onClick = {() => {onTabButtonClick(TabType.REVIEWS)}}
            >Отзывы</button>
          <button className={
            currentTab === TabType.CONTACTS ? "tabs__control tabs__control--contacts tabs__control--active" : "tabs__control tabs__control--contacts"}
            onClick = {() => {onTabButtonClick(TabType.CONTACTS)}}
            >Контакты</button>
        </div>
        <div className="tabs__content">
            {tabScreen}
        </div>
      </section>
    </React.Fragment>
  );
}

Tabs.propTypes = {
  car: carType,
  currentTab: PropTypes.string,
  onTabButtonClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  car: getCar(state),
  currentTab: getCurrentTab(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTabButtonClick(currentTab) {
    dispatch(ActionCreator.setCurrentTab(currentTab));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
import React from "react";
import {getCars} from "./../../reducer/data/selectors.js"
import {connect} from "react-redux";
import {getCurrentTab} from "../../reducer/ui/selectors";
import {ActionCreator} from "../../reducer/ui/ui.js"
import { TabType } from "../../const.js";
import Characteristics from "../characteristics/characteristics.jsx";
import Reviews from "../reviews/reviews.jsx";
import Contacts from "../contacts/contacts.jsx";
import PropTypes from 'prop-types';
import { carsType } from "../../types";

function Tabs (props) {
  const {
    cars,
    currentTab,
    onTabButtionClick,
  } = props;

  let tabScreen;

  if(currentTab === TabType.CHARACTERISTICS) {
    tabScreen = <Characteristics characteristics={cars.characteristics} />
  }
  if(currentTab === TabType.REVIEWS) {
    tabScreen = <Reviews reviews={cars.reviews}/>
  }
  if(currentTab === TabType.CONTACTS) {
    tabScreen = <Contacts />
  }

  return (
    <React.Fragment>
      <section className="tabs">
        <div className="tabs__controls">
          <button className={
            currentTab === TabType.CHARACTERISTICS ? "tabs__control tabs__control--characteristics tabs__control--active" : "tabs__control tabs__control--characteristics"}
            onClick = {() => {onTabButtionClick(TabType.CHARACTERISTICS)}}
            >Характеристики</button>
          <button className={
            currentTab === TabType.REVIEWS ? "tabs__control tabs__control--reviews tabs__control--active" : "tabs__control tabs__control--reviews"}
            onClick = {() => {onTabButtionClick(TabType.REVIEWS)}}
            >Отзывы</button>
          <button className={
            currentTab === TabType.CONTACTS ? "tabs__control tabs__control--contacts tabs__control--active" : "tabs__control tabs__control--contacts"}
            onClick = {() => {onTabButtionClick(TabType.CONTACTS)}}
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
  cars: carsType,
  currentTab: PropTypes.string,
  onTabButtionClick: PropTypes.func,
}

const mapStateToProps = (state) => ({
  cars: getCars(state),
  currentTab: getCurrentTab(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTabButtionClick(currentTab) {
    dispatch(ActionCreator.setCurrentTab(currentTab));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
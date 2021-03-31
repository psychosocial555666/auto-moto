import React from "react";
import {characteristicsType} from "../../types";

function Characteristics(props) {
  const {characteristics} = props;
  return (
    <React.Fragment>
      <ul className="tabs__characteristics characteristics">
        {characteristics.map((item) => {
          return(
            <li key={item.name} className="characteristics__item">
              <span className="characteristics__name">{item.name}</span>
              <span className="characteristics__value">{item.value}</span>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  );
};

Characteristics.propTypes = {
  characteristics: characteristicsType,
};

export default Characteristics;
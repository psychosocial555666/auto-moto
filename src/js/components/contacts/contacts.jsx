import React from "react";
import SimpleMap from "../map/map.jsx";

function Contacts() {
  return (
    <React.Fragment>
      <div className="tabs__contacts contacts">
        <div className="contacts__wrapper">
          <div className="contacts__item">
            <h3>Адрес</h3>
            <p>Санкт-Петербург, <br /> набережная реки Карповки, дом 5</p>
          </div>
          <div className="contacts__item">
            <h3>Режим работы</h3>
            <p>Ежедневно, с 10:00 до 21:00</p>
          </div>
          <div className="contacts__item">
            <h3>Телефон</h3>
            <a href="tel:+78003335599">8 (800) 333-55-99</a>
          </div>
          <div className="contacts__item">
            <h3>E-mail</h3>
            <a href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
          </div>
        </div>
        <div className="contacts__map">
          <SimpleMap />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
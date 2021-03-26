/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./../../../img/logo.svg";

const menuItems = ['Автомобили', 'Контакты', 'Услуги', 'Вакансии',];

function Header() {
  return (
    <React.Fragment>
      <header className="page-header">
        <div className="container">
          <div className="page-header__content">
            <div className="page-header__logo">
              <img src={logo} alt="Auto-Moto" />
            </div>
            <nav className="page-header__nav main-nav">
              <ul className="main-nav__list">
                {menuItems.map((item) => {
                  return (
                  <li key={item} className="main-nav__item">
                    <a href="#" className="main-nav__link">{item}</a>
                  </li>
                  )
                  
                })}
              </ul>
            </nav>
            <button className="page-header__toggle">
              Меню
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;

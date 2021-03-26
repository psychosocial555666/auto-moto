/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const menuItems = ['Корпоративным клиентам', 'Клиентам', 'Аренда авто', 'Каршеринг', 'Как продать авто', 'Trade-in', 'Test drive',];

function Footer() {
  return (
    <React.Fragment>
      <footer className="page-footer">
        <div className="container">
          <div className="page-footer__content">
            <nav className="page-footer__nav">
              <ul className="page-footer__list">
                {menuItems.map((item) => {
                  return (
                  <li key={item} className="page-footer__item">
                    <a href="#" className="page-footer__link">{item}</a>
                  </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
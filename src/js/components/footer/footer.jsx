/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {footerMenuItems} from "../../const";

function Footer() {
  return (
    <React.Fragment>
      <footer className="page-footer">
        <div className="container">
          <div className="page-footer__content">
            <nav className="page-footer__nav">
              <ul className="page-footer__list">
                {footerMenuItems.map((item) => {
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
};

export default Footer;
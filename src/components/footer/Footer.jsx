import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">CassChris</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portafolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/christiancasafranca/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram-alt"></i>
          </a>
          <a
            href="https://github.com/CassChris"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/christian-casafranca/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">Todos los derechos reservados ©2023 Christian Casafranca.</span>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from 'react'
import './services.css';



const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index)
    }



  return (
    <section className="services section" id="services">
        <h2 className="section__title">Servicios</h2>
        <span className="section__subtitle">Lo que ofrezco</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-window services__icon"></i>
                    <h3 className="services__title">Desarrollador <br />Frontend</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>Ver Más
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ?  "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Desarrollo <br />Web</h3>
                        <p className="services__modal-subtitle">Servicio con experiencia realizando proyectos y trabajando colaborativamente en una empresa como desarrollador Frontend.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desarrollo de páginas web.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Mantenimiento y optimización de sitios web.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Gestionar la accesibilidad y adaptabilidad de un sitio web.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-comparison services__icon"></i>
                    <h3 className="services__title">Técnico <br />Informático</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>Ver más
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ?  "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Técnico <br />Informático</h3>
                        <p className="services__modal-subtitle">Habilidades desarrolladas a lo largo de mi carrera me permiten brindar este servicio.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Soporte Técnico de Hardware y Software.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Manejo de herramientas TI.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implementación de herramientas de Ofimática para el manejo de datos en procesos internos de una empresa.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-database services__icon"></i>
                    <h3 className="services__title">Desarrollador <br />Backend</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>Ver más
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ?  "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Desarrollador <br />Backend</h3>
                        <p className="services__modal-subtitle">Servicio con experiencia aplicando mis conocimientos técnicos en proyectos.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Creación, análisis, desarrollo y mantenimiento de Bases de Datos.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Creación y manejo de procesos internos de una web.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Creación de interfaz del programa de aplicación(API).</p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services
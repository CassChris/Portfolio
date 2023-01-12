import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index)
    }


  return (
    <div className="section qualification">
      <h2 className="section__title">Calificación</h2>
      <span className="section__subtitle">Mi trayectoria personal</span>
    
    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            } 
            onClick={() => toggleTab(1)}>
                <i className="uil uil-graduation-cap qualification__icon"></i> Education
            </div>  

            <div className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            } 
            onClick={() => toggleTab(2)}>
                <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
            </div>
        </div>

        <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>


                <div className="qualification__data">
                <div></div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Desarrollo Web</h3>
                        <span className="qualification__subtitle">ONE – Oracle Next Education</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> Nov. 2022 - En curso
                        </div>
                    </div>

                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Computación e Infomática</h3>
                        <span className="qualification__subtitle">I.E.S.T.P. Gilda Liliana Ballivian Rosado</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> Mar. 2019 - Dic. 2022
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                <div></div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Soporte Técnico</h3>
                        <span className="qualification__subtitle">I.E.S.T.P. La Católica</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> Ene. 2016 - Jun. 2017
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>


                <div className="qualification__data">
                <div></div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Desarrollador Frontend</h3>
                        <span className="qualification__subtitle">Agencia Consigue Ventas Online</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> Set. 2022 - Dic. 2022
                        </div>
                    </div>

                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Soporte Técnico
</h3>
                        <span className="qualification__subtitle">Lima Rental Center</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> feb. 2018 - dic. 2019
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
  );
};

export default Qualification;

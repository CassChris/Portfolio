import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className='bx bx-award about__icon' ></i>
            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">+1 Año</span>
        </div>

        <div className="about__box">
        <i className='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title">Completado</h3>
            <span className="about__subtitle">2 + Proyectos</span>
        </div>

        <div className="about__box">
        {/* <i className='bx bx-support about__icon' ></i> */}
        <i className='bx bxs-graduation about__icon' ></i>
            <h3 className="about__title">Educación</h3>
            <span className="about__subtitle">Técnico</span>
        </div>
    </div>
    )
}

export default Info
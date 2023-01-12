import React from 'react'
import './skills.css';
import FrontEnd from './Frontend';
import BackEnd from './Backend';
import OtherTools from './OtherTools';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Mi nivel técnico</span>

        <div className="skills__container container grid">
            <FrontEnd />
            <BackEnd />
            <OtherTools />
        </div>
    </section>
  )
}

export default Skills
import React from 'react'
import './skills.css';
import FrontEnd from './Frontend';
import BackEnd from './Backend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <FrontEnd />
            <BackEnd />
        </div>
    </section>
  )
}

export default Skills
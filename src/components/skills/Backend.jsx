import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i className='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills name">PHP</h3>
                <span className="skills__level">Básico</span>
            </div>
            </div>

            <div className="skills__data">
            <i className='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills name">Laravel</h3>
                <span className="skills__level">Básico</span>
            </div>
            </div>

            <div className="skills__data">
            <i className='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills name">NodeJS</h3>
                <span className="skills__level">Básico</span>
            </div>
            </div>
        </div>	

        <div className="skills__group">
            <div className="skills__data">
            <i className='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills name">MySQL</h3>
                <span className="skills__level">Intermedio</span>
            </div>
            </div>

            <div className="skills__data">
            <i className='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills name">PostgreSQL</h3>
                <span className="skills__level">Básico</span>
            </div>
            </div>

        </div>	
    </div>
</div>
  )
}

export default Backend
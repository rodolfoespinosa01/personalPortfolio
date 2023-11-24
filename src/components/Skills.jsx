import React from 'react'

import HTML from '../assets/img/pngTree_html.png'
import CSS from '../assets/img/pngTree_css.png'
import JS from '../assets/img/pngTree_javascript.png'
import REACT from '../assets/img/iconfinder_react.png'
import MYSQL from '../assets/img/freepnglogos_mysql.png'
import MONGODB from '../assets/img/MongoDB_Fores-Green.svg'

const Skills = () => {
  return (
    <>
      <div className="text-gray-300 flex flex-col p-5">

        <div className="flex flex-row justify-between p-10">
          <div >
            <img className="w-24" src={HTML} alt="HTML icon" />

          </div>

          <div>
            <img className="w-24" src={CSS} alt="CSS icon" />

          </div>

          <div >
            <img className="w-24" src={JS} alt="JS icon" />

          </div>

        </div>


        <div className="flex flex-row justify-between p-10">
          <div >
            <img className="w-24" src={MYSQL} alt="MYSQL icon" />

          </div>

          <div >
            <img className="w-24" src={MONGODB} alt="MONGODB icon" />

          </div>

          <div >
            <img className="w-24" src={REACT} alt="REACT icon" />

          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
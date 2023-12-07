import React from 'react'

import { projects } from '../assets/js/data';



const WorkData = () => {
  return (

    <div className="text-white bg-cyan-800">
      <div className="max-w-[1150px] mt-[-96px] w-full mx-auto items-center flex flex-col">
        {projects.map((project, index) => (
          <div key={project.id} className={`my-2 mx-auto flex flex-col items-center text-center border-double border-4 border-white rounded-lg ${index % 2 === 0 ? 'bg-cyan-600' : 'bg-cyan-900'}`}>
            <p className="p-8 text-4xl">{project.projectTitle}</p>
            <div><img src={project.img} alt="project preview" className="w-auto" /></div>

            <div className="pt-8 text-center">
              <a href={project.demoLink}><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#003554] font-bold text-lg hover:bg-black hover:text-white">Demo</button></a>
              <a href={project.githubLink}><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#003554] font-bold text-lg hover:bg-black hover:text-white">Code</button></a>

            </div>

            <p className="text-lg p-8">{project.projectDescription}</p>

            {/* Tech Stack Buttons */}
            <div className="flex flex-wrap mt-4">
              {project.techStack.map((tech, index) => (
                <button key={index} className="bg-blue-500 text-white py-2 px-4 mx-2 mb-2 rounded">
                  {tech}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>

  )
}

export default WorkData
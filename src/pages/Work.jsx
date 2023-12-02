import React from 'react'
import { BsArrowDownSquare } from "react-icons/bs";

import WorkData from './WorkData'

import data from '../assets/js/data';

const { projects } = data;


const Work = () => {
  return (
    <>
      <div name="work" className="w-full sm:h-screen text-gray-300 bg-[#051923]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8 mt-20">
            <p className="sm:text-4xl md:text-8xl font-bold inline border-b-4 text-white border-[#00a6fb]">Work</p>
            <p className="py-6 sm:text-lg md:text-4xl">Check out some of my recent work</p>
          </div>

          {/* Container */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* All Projects*/}
            {projects.map((project) => (
              <div key={project.id} style={{ backgroundImage: `url(${project.img})` }}
                className="shadow-lg shadow-[#00a6fb] group container rounded-md flex justify-center items-center mx-auto content-div">

                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    {project.projectTitle}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={project.demoLink}><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#003554] font-bold text-lg hover:bg-black hover:text-white">Demo</button></a>
                    <a href={project.githubLink}><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#003554] font-bold text-lg hover:bg-black hover:text-white">Code</button></a>

                  </div>

                </div>

              </div>
            ))}
            <div className="flex flex-col items-center justify-center  mb-20">
              <p className="text-white text-center mt-5 text-2xl">
                Check Out The Details Below!
              </p>
              <BsArrowDownSquare className="text-white text-5xl mt-3" />
            </div>

          </div>


        </div>

      </div>


      <WorkData />
    </>
  )
}

export default Work

import React from 'react'
import { FcBusiness } from 'react-icons/fc'
import Skills from '../components/Skills'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (

    <div name='home' className='w-full h-screen bg-[#051923]'>

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-[#0582ca]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00A6Fb]">Rodolfo E.N.</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#003554]'>I am a Full Stack Developer</h2>
        <p className="text-[#006494] py-4 max-w-[700px]">I'm a full-stack developer specializing in building out the most accurate diet generator. I plan to integrate the diet algorithm I came up with into my web application to help millions around the world improve their overall nutrition lifestyle.</p>
        <div>
          <NavLink to="/work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00a6fb] ">
              View Work
              <span className="ml-3">
                <FcBusiness />
              </span>
            </button>
          </NavLink>
          <Skills />



        </div>

      </div>

    </div>

  )
}

export default Home
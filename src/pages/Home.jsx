import React from 'react'
import { FcBusiness } from 'react-icons/fc'
import Skills from '../components/Skills'
import smileEmoji from '../assets/img/smileEmoji.png'

import { NavLink } from 'react-router-dom'

import selfie from '../assets/img/me_edit2.png'
const Home = () => {
  return (

    <div name='home' className='w-full h-auto bg-[#051923]'>

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-[#0582ca] mt-20">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00A6Fb]">Rodolfo E.N.</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#003554]'>Full Stack Developer</h2>
        <p className="text-[#006494] py-4 max-w-[1000px]">
          I'm a dedicated full-stack developer passionate about creating innovative solutions. Actively seeking full-time opportunities, I'm committed to contributing my skills to a dynamic team. Concurrently, I'm devoted to developing my personal project—an advanced diet generator, reflecting my commitment to global nutrition impact.

          My goal is to integrate the cutting-edge diet algorithm I've developed into my web application, empowering millions to enhance their nutrition lifestyle. I believe in technology's power to transform lives and am eager to join a forward-thinking company, contributing my expertise while continuing to innovate independently.

          Recruiters or employers interested in a health tech enthusiast and full-stack developer with ongoing personal projects, I'm open to connecting with you.
        </p>
        <div>
          <NavLink to="/work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00a6fb] ">
              View Work
              <span className="ml-3">
                <FcBusiness />
              </span>
            </button>
          </NavLink>

        </div>
        <Skills />
      </div>



      <div className="flex justify-center items-center gap-20">
        <img src={selfie} alt="" className="w-60" />
        <div className="flex flex-col items-center">
          <img className="w-32 h-32 m-10" src={smileEmoji} alt="" />
          <div className="bg-blue-500 p-4 rounded-lg max-w-md">
            <p className="text-white">
              Hey there, nice pleasure to meet you virtually!
            </p>
          </div>
        </div>
      </div>



    </div>

  )
}

export default Home
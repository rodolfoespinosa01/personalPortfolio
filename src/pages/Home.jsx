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
        <h2 className='text-4xl sm:text-7xl font-bold text-[#003554]'>Full Stack Developer</h2>
        <p className="text-[#006494] py-4 max-w-[700px]">I'm a dedicated full-stack developer with a passion for crafting innovative solutions. Currently, I am actively seeking full-time opportunities to contribute my skills and expertise to a dynamic team. As I actively pursue job opportunities, I am earnestly dedicating my efforts to the development of my personal project—an advanced diet generator. This endeavor reflects my commitment to making a positive impact on global nutrition and well-being.

          My goal is to seamlessly integrate the cutting-edge diet algorithm I've developed into my web application. By doing so, I aim to empower millions of individuals worldwide to enhance their overall nutrition lifestyle. I believe in the power of technology to transform lives, and I am excited about the prospect of joining a forward-thinking company where I can contribute my knowledge while continuing to build and innovate on the side.

          If you are a recruiter or employer interested in a full-stack developer passionate about health tech and dedicated to ongoing personal projects, I would love to connect with you.
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
          <Skills />



        </div>

      </div>

    </div>

  )
}

export default Home
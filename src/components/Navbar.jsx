import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'



import Logo from '../assets/img/whiteLogo-rodo_code.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="w-full h-[80px] flex justify-between items-center px-4 bg-cyan-950 text-gray-300">

      <div >
        <img src={Logo} alt="rodo_code logo" style={{ width: '150px' }} />

      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li><NavLink className="hover:underline p-1" to="/">Home</NavLink></li>
        <li> <NavLink className="hover:underline p-1" to="/about">About</NavLink></li>
        <li> <NavLink className="hover:underline p-1" to="/work">Work</NavLink></li>
        <li> <NavLink className="hover:underlin p-1" to="/contact">Contact</NavLink></li>
        <li> <NavLink className="hover:underlin p-1" to="/resume">Resume</NavLink></li>
      </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul onClick={handleClick} className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#051923] flex flex-col justify-center items-center "}>

        <li className="py-6 text-4xl"><NavLink to="/">Home</NavLink></li>

        <li className="py-6 text-4xl"> <NavLink to="/about">About</NavLink></li>

        <li className="py-6 text-4xl"><NavLink to="/work">Work</NavLink></li>

        <li className="py-6 text-4xl"><NavLink to="/contact">Contact</NavLink></li>

        <li className="py-6 text-4xl"><NavLink to="/resume">Resume</NavLink></li>

      </ul>


      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#003554]">

            <NavLink className="flex justify-between items-center w-full text-gray-300" to="/resume">Resume <BsFillPersonLinesFill size={30} /></NavLink>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">

            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/rodolfo-espinosa-nunez-77131b64/" target="_blank" rel="noopener noreferrer">Linkedin <FaLinkedin size={30} /></a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">

            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/rodolfoespinosa01" target="_blank" rel="noopener noreferrer">Github <FaGithub size={30} /></a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0582ca]">

            <NavLink className="flex justify-between items-center w-full text-gray-300" to="/contact">Contact <HiOutlineMail size={30} /></NavLink>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Navbar


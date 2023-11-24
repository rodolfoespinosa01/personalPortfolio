import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#051923] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00a6fb]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Rodolfo...website made with REACT.js!</p>
          </div>
          <div>
            <p>
              I enjoy building platforms that are personalized for all types of businesses. The ultimate goal is to create a web app/platform specifically designed to help maximize business efficiency, streamline processes, and enhance overall productivity. By tailoring solutions to meet the unique needs of each business, I aim to empower organizations to achieve their full potential and thrive in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
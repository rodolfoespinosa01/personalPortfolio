import React from 'react'
import workout_plannerIMG from '../assets/img/project2_preview.png'
import save_plannerIMG from '../assets/img/save_planner.png'
import sistine_previewIMG from '../assets/img/sistine_preview.png'

const projects = [


  { id: 1, img: sistine_previewIMG, githubLink: "", demoLink: "https://github.com/rodolfoespinosa01/sistine", projectTitle: "Sistine Eccommerce Website" },

  { id: 2, img: workout_plannerIMG, githubLink: "https://github.com/rodolfoespinosa01/bc_c14_mvc", demoLink: "https://github.com/rodolfoespinosa01/Workout_Planner_Project", projectTitle: "Workout Planner" },



  { id: 3, img: save_plannerIMG, githubLink: "https://github.com/CoreyPhillipsOfficial/save-smart", demoLink: "https://mighty-reaches-45633-a7b714f2317a.herokuapp.com/", projectTitle: "Save Smart Planner" },



]


const Work = () => {
  return (
    <div name="work" className="w-full sm:h-screen text-gray-300 bg-[#051923]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#00a6fb]">Work</p>
          <p className="py-6">Check out some of my recent work</p>
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
                  <a href={project.demoLink}><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#003554] font-bold text-lg">Demo</button></a>
                  <a href={project.githubLink}><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#003554] font-bold text-lg">Code</button></a>

                </div>
              </div>
            </div>
          ))}

        </div>


      </div>
    </div>
  )
}

export default Work

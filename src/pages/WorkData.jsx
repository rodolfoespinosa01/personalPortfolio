import React from 'react'
import workout_plannerIMG from '../assets/img/project2_preview.png'
import save_plannerIMG from '../assets/img/save_planner.png'
import sistine_previewIMG from '../assets/img/sistine_preview.png'

const projects = [
  {
    id: 1,
    img: sistine_previewIMG,
    githubLink: "https://github.com/rodolfoespinosa01/sistine",
    demoLink: "https://lit-beach-80573-72943f4d2381.herokuapp.com/",
    projectTitle: "Eccommerce Website",
    projectDescription: "Here we have an Eccommerce store that currently has user authentication and the add to cart feature fully functioning. The authentication was done using jsonwebtoken and cookie-parsar. I have also integrated Stripe for payments. This app was created with create-react-app",
    techStack: ["React", "Javascript", "Node.js", "Express", "JWT", "Stripe", "Bootstrap"]
  },
  {
    id: 2,
    img: workout_plannerIMG,
    githubLink: "https://github.com/rodolfoespinosa01/bc_c14_mvc",
    demoLink: "https://github.com/rodolfoespinosa01/Workout_Planner_Project",
    projectTitle: "Workout Planner",
    projectDescription: "This was a group project where myself and another team member focused on the back end functionality. We integrated two different APIs where one API randomly generated data and the other returns data the user is requesting.",
    techStack: ["JavaScript", "Node.js", "Express", "APIs"]
  },
  {
    id: 3,
    img: save_plannerIMG,
    githubLink: "https://github.com/CoreyPhillipsOfficial/save-smart",
    demoLink: "https://mighty-reaches-45633-a7b714f2317a.herokuapp.com/",
    projectTitle: "Save Smart Planner",
    projectDescription: "This was a project where I created a tool that helped you quickly calculate how far away you are from purchasing a goal item. Before the user can use the tool, they need to register an account to get authenticated. Once the user is registered and logged in, they can add a new goal and set the initial values.",
    techStack: ["React", "Javascript", "Node.js", "Express", "MYSQL", "JWT"]
  },
];


const WorkData = () => {
  return (

    <div className="text-white bg-cyan-800">
      <div className="max-w-[1150px] mt-[-96px] w-full mx-auto items-center flex flex-col">
        {projects.map((project) => (
          <div key={project.id} className="my-2 mx-auto flex flex-col items-center text-center border-double border-4 border-white rounded-lg">
            <p className="p-8 text-4xl">{project.projectTitle}</p>
            <div><img src={project.img} alt="project preview" className="w-auto" /></div>

            <div className="pt-8 text-center">
              <a href={project.demoLink}><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#003554] font-bold text-lg hover:bg-black hover:text-white">Demo</button></a>
              <a href={project.githubLink}><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#003554] font-bold text-lg hover:bg-black hover:text-white">Code</button></a>

            </div>

            <p className="text-lg p-8">{project.projectDescription}</p>

            {/* Tech Stack Buttons */}
            <div className="flex mt-4">
              {project.techStack.map((tech, index) => (
                <button key={index} className="bg-blue-500 text-white py-2 px-4 mx-2 rounded">
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
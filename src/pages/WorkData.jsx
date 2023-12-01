import React from 'react'
import workout_plannerIMG from '../assets/img/project2_preview.png'
import save_plannerIMG from '../assets/img/save_planner.png'
import sistine_previewIMG from '../assets/img/sistine_preview.png'

const projects = [


  { id: 1, img: sistine_previewIMG, githubLink: "https://github.com/rodolfoespinosa01/sistine", demoLink: "https://lit-beach-80573-72943f4d2381.herokuapp.com/", projectTitle: "Eccommerce Website", projectDescription: "Here we have an Eccommerce store that currently has user authentication and the add to cart feature fully functioning. the authentication was done using jsonwebtoken and cookie-parsar. I have also integrated Stripe for payments. This app was created with create-react-app" },

  { id: 2, img: workout_plannerIMG, githubLink: "https://github.com/rodolfoespinosa01/bc_c14_mvc", demoLink: "https://github.com/rodolfoespinosa01/Workout_Planner_Project", projectTitle: "Workout Planner", projectDescription: "This was a group project where myself and another team member focused on the back end functionality. We integrated two different APIs where one API randomly generated data and the other returns data the user is requesting." },

  { id: 3, img: save_plannerIMG, githubLink: "https://github.com/CoreyPhillipsOfficial/save-smart", demoLink: "https://mighty-reaches-45633-a7b714f2317a.herokuapp.com/", projectTitle: "Save Smart Planner", projectDescription: "This was a project where I created a tool that helped you quickly calculate how far away you are from purchasing a goal item. Before the user can use the tool, they need to register an account to get authenticated. Once the user is registered and logged in, they can add a new goal and set the initial values." },

]

const WorkData = () => {
  return (

    <div className="text-white bg-cyan-800">
      <div className="max-w-[800px] mt-[-96px] w-full mx-auto text-center flex flex-col justify-center">
        {projects.map((project) => (
          <div key={project.id}>
            <p className="bg-cyan-300">{project.projectTitle}</p>
            <div><img src={project.img} alt="project preview" className="w-60" /></div>
            <h1 className="text-white">{project.projectDescription}</h1>
          </div>
        ))}
      </div>

    </div>

  )
}

export default WorkData
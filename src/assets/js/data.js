import workout_plannerIMG from "../img/project2_preview.png";
import save_plannerIMG from "../img/save_planner.png";
import sistine_previewIMG from "../img/sistine_preview.png";

import HTML from "../img/pngTree_html.png";
import CSS from "../img/pngTree_css.png";
import JS from "../img/pngTree_javascript.png";
import REACT from "../img/iconfinder_react.png";
import MYSQL from "../img/freepnglogos_mysql.png";
import MONGODB from "../img/MongoDB_Fores-Green.svg";

const projects = [
  {
    id: 1,
    img: sistine_previewIMG,
    githubLink: "https://github.com/rodolfoespinosa01/sistine",
    demoLink: "https://lit-beach-80573-72943f4d2381.herokuapp.com/",
    projectTitle: "Eccommerce Website",
    projectDescription:
      'In this eCommerce store, robust user authentication and a fully operational "add to cart" feature are in place. Authentication is implemented using JSON Web Tokens and the cookie-parser library. Additionally, Stripe integration has been seamlessly incorporated for secure payment processing. The entire application has been developed using create-react-app.',
    techStack: [
      "React",
      "Javascript",
      "Node.js",
      "Express",
      "JWT",
      "Stripe",
      "Bootstrap",
    ],
  },
  {
    id: 2,
    img: workout_plannerIMG,
    githubLink: "https://github.com/rodolfoespinosa01/bc_c14_mvc",
    demoLink: "https://github.com/rodolfoespinosa01/Workout_Planner_Project",
    projectTitle: "Workout Planner",
    projectDescription:
      "This collaborative project involved the collaborative efforts of myself and another team member, with a primary focus on developing the backend functionality. Our work included the integration of two distinct APIs. One API was responsible for generating random data, while the other was designed to provide data based on specific user requests.",
    techStack: ["JavaScript", "Node.js", "Express", "APIs", "localStorage"],
  },
  {
    id: 3,
    img: save_plannerIMG,
    githubLink: "https://github.com/CoreyPhillipsOfficial/save-smart",
    demoLink: "https://shrouded-cove-58821-68df129a8584.herokuapp.com/",
    projectTitle: "Save Smart Planner",
    projectDescription:
      "In this project, I designed a tool aimed at efficiently calculating the proximity to achieving a goal item purchase. To utilize the tool, users are required to register an account for authentication purposes. Once registered and logged in, users gain access to functionality enabling them to add new goals and establish initial values for their objectives.",
    techStack: ["React", "Javascript", "Node.js", "Express", "MYSQL", "JWT"],
  },
];

const skillsData = [
  { imgSrc: HTML, alt: "HTML icon" },
  { imgSrc: CSS, alt: "CSS icon" },
  { imgSrc: JS, alt: "JS icon" },
  { imgSrc: MYSQL, alt: "MYSQL icon" },
  { imgSrc: MONGODB, alt: "MONGODB icon" },
  { imgSrc: REACT, alt: "REACT icon" },
];

export default { projects, skillsData };

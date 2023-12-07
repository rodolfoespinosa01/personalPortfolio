import workout_plannerIMG from "../img/project2_preview.png";
import save_plannerIMG from "../img/save_planner.png";
import sistine_previewIMG from "../img/sistine_preview.png";
import dietGenerator_preview from "../img/dietGenerator_preview.png";

import HTML from "../img/pngTree_html.png";
import CSS from "../img/pngTree_css.png";
import JS from "../img/pngTree_javascript.png";
import REACT from "../img/iconfinder_react.png";
import MYSQL from "../img/freepnglogos_mysql.png";
import MONGODB from "../img/MongoDB_Fores-Green.svg";

export const projects = [
  {
    id: 1,
    img: dietGenerator_preview,
    githubLink: "https://github.com/rodolfoespinosa01/dietGenerator",
    demoLink: "https://young-woodland-31941-a293038cf79d.herokuapp.com/login",
    projectTitle: "Diet Generator",
    projectDescription:
      "Introducing our revolutionary diet generator, a one-of-a-kind tool designed to cater to your unique preferences and goals. What sets our generator apart is its unparalleled personalization, achieved through a comprehensive questionnaire that delves into crucial factors. Users provide details such as age, height, weight, preferred number of daily meals, and specific training times. We customize your macronutrient ratios around your training schedule, ensuring optimal nutrition. Additionally, we consider your weekly schedule, allowing you to indicate days off and tailor your plan accordingly. Choose from a variety of meal plan types, including standard, carb-cycling, and keto. Specify your fitness goals—whether it's weight loss, maintaining or enhancing physique, or gaining muscle. We go even further by considering your lifestyle, categorized as low, mid, or active. But the personalization doesn't stop there. You have the freedom to select the foods you love, and our algorithm calculates precise portions for each meal, aligning with your unique macro goals. Experience a truly personalized approach to nutrition planning with our cutting-edge diet generator. Your journey to a healthier, more tailored lifestyle starts here. THE PROJECT IS IN A VERY EARLY STAGE RIGHT NOW. THE DEMOS JUST ILLUSTRATES A COMPLETE USER AUTHENTICATION MODEL.",
    techStack: [
      "React",
      "Javascript",
      "Node.js",
      "Express",
      "JWT",
      "Stripe",
      "Bootstrap",
      "Axios",
      "Bcrypt",
      "Cookie-parsar",
      "Dotenv",
      "Jsonwebtoken",
      "mongoose",
    ],
  },
  {
    id: 2,
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
    id: 3,
    img: workout_plannerIMG,
    githubLink: "https://github.com/rodolfoespinosa01/bc_c14_mvc",
    demoLink: "https://github.com/rodolfoespinosa01/Workout_Planner_Project",
    projectTitle: "Workout Planner",
    projectDescription:
      "This collaborative project involved the collaborative efforts of myself and another team member, with a primary focus on developing the backend functionality. Our work included the integration of two distinct APIs. One API was responsible for generating random data, while the other was designed to provide data based on specific user requests.",
    techStack: ["JavaScript", "Node.js", "Express", "APIs", "localStorage"],
  },
  {
    id: 4,
    img: save_plannerIMG,
    githubLink: "https://github.com/CoreyPhillipsOfficial/save-smart",
    demoLink: "https://shrouded-cove-58821-68df129a8584.herokuapp.com/",
    projectTitle: "Save Smart Planner",
    projectDescription:
      "In this project, I designed a tool aimed at efficiently calculating the proximity to achieving a goal item purchase. To utilize the tool, users are required to register an account for authentication purposes. Once registered and logged in, users gain access to functionality enabling them to add new goals and establish initial values for their objectives.",
    techStack: ["React", "Javascript", "Node.js", "Express", "MYSQL", "JWT"],
  },
];

export const skillsData = [
  { imgSrc: HTML, alt: "HTML icon" },
  { imgSrc: CSS, alt: "CSS icon" },
  { imgSrc: JS, alt: "JS icon" },
  { imgSrc: MYSQL, alt: "MYSQL icon" },
  { imgSrc: MONGODB, alt: "MONGODB icon" },
  { imgSrc: REACT, alt: "REACT icon" },
];

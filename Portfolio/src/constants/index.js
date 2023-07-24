import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cpp,
  python,
  bootstrap,
  word,
  powerpoint,
  excel,
  premierepro,
  photoshop,
  audition,
  canva,
  college,
  school,
  office,
  images,
  pecfest,
  coinkeeper,
  weatherapp,
  shoppingcart,
  peb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "pors",
    title: "POR's",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer - Frontend",
    icon: web,
  },
  {
    title: "Public Relations Officer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "BootStrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Office",
    icon: office,
  },
  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  {
    name: "Adobe Premiere Pro",
    icon: premierepro,
  },
  {
    name: "Adobe Audition",
    icon: audition,
  },
];

const educations = [
  {
    title: "B.Tech in Electrical Engineering",
    company_name: "Punjab Engineering College",
    icon: college,
    iconBg: "#383E56",
    date: "2021 - 2025",
    points: ["Current CGPA : 8.95/10"],
  },
  {
    title: "Senior-Secondary (12th CBSE)",
    company_name: "St. Anne's Convent School",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2021",
    points: ["Percentage : 95.4 %"],
  },
  {
    title: "Marticulation (10th CBSE)",
    company_name: "St. Anne's Convent School",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2019",
    points: ["Percentage : 97.6 %"],
  },
];

const por = [
  {
    title: "Public Relations Officer",
    company_name: "IMAGES (NGO)",
    icon: images,
    iconBg: "#383E56",
    date: "May 2023 - Present",
  },
  {
    title: "Discipline Sub-Head",
    company_name: "PECFEST",
    icon: pecfest,
    iconBg: "#E6DEDD",
    date: "Nov 2022",
  },
  {
    title: "Video Editing & Designing Head",
    company_name: "Punjabi Editorial Board (PEB PEC)",
    icon: peb,
    iconBg: "#383E56",
    date: "June 2023 - Present",
  },
];

const achievements = [
  {
    achievement:
      "Solved 250+ DSA problems on different platform includeing LeetCode, GeeksForGeeks & CodeStudio",
    name: "Proficient In DSA",
  },
  {
    achievement: "Got Rank 2971 in CodeJam 2023 Round A",
    name: "Google CodeJam",
  },
  {
    achievement:
      "Worked on a real life problem of finding jobs and helping people connect with peers working in related inductry",
    name: "Hackathons",
  },
];

const projects = [
  {
    name: "Coin Keeper",
    description:
      "Coinkeeper is a web based personal finance tracker that helps you keep track of your income and expenses. It provides an intuitive interface for adding, editing, and deleting transactions, allowing you to easily manage your financial recons.",
    tags: [
      {
        name: "html&css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: coinkeeper,
    source_code_link:
      "https://github.com/lakshayybatra/CoinKeeper_App-GitHub_CopilotHackathon",
  },
  {
    name: "Weather App",
    description:
      "A Front-End project which uses openweathermap API to fetch and display weather of different cities entered by the user.",
    tags: [
      {
        name: "html&css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "openweatherAPI",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link:
      "https://github.com/lakshayybatra/Projects/tree/master/Weather%20App",
  },
  {
    name: "Shopping Cart",
    description:
      "Created a front-End project displaying a functional shopping cart using useReducer, useContext hooks in React.Js.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html&css",
        color: "pink-text-gradient",
      },
    ],
    image: shoppingcart,
    source_code_link:
      "https://github.com/lakshayybatra/Projects/tree/master/Shopping%20Cart",
  },
];

export { services, technologies, educations, por, achievements, projects };

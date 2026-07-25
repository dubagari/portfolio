import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiRender,
  SiVercel,
  SiMongoose,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux Toolkit", icon: SiRedux },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiExpress },
      { name: "JWT Authentication", icon: SiExpress },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Render", icon: SiRender },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];
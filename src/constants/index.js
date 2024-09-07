import {
  iitrpr,
  portfolio,
  chargeswap,
  newsApp,
  fabhotels,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiVite,
  SiNextdotjs,
  SiSpringboot,
  SiMongodb,
  SiExpress,
  SiHtml5,
} from "react-icons/si";


import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1vkxyMDB5_KpMwt4QXFgT2aqdRizr8Czh/view?usp=sharing";

export const callToAction = "https://www.linkedin.com/in/chopra-prisha/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
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
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: iitrpr,
    title: "Indian Institue of Technology, Ropar",
    degree: "Bachelor of Technology",
    duration: "December 2021 - May 2025",
    content1: "Major: Chemical Engineering",
  },
];



export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiCplusplus,
        name: "C++",
      },
      
      {
        id: "pl-3",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-4",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-6",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-7",
        icon: DiCss3,
        name: "CSS",
      },
      
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiSpringboot,
        name: "Springboot",
      },
      {
        id: "f-2",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "f-7",
        icon: SiExpress,
        name: "Express.js",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-7",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-8",
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Fab Hotels",
    logo: fabhotels,
    link: "https://www.fabhotels.com/?source=google&medium=ppc&campaign=Performance_Max-2&campaignid=21069958068&adgroupid=&device=c&keyword=&gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gx7TXaoDWUQ3yDPOt9r2bJDbrqDjVOnMiv7dikJsBeDtZnh372TSfYaAophEALw_wcB",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "July 2024 - August 2024",
        content: [
          {
            text: "Developed RESTful APIs for user authentication, transaction management, and profile management",
            link: ""
          },
          {
            text:"Integrated PostgreSQL with Spring Boot applications",
            link: ""
          },
          {
            text:"used Spring Security for authentication and authorization, along with request DTOs to handle the application data efficiently",
            link: ""
          }
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Spark",
    github: "https://github.com/TuhinanshuModgil/chat_app_backend.git",
    link: "",
    image: chargeswap,
    content:
      "A real-time chat app using WebSockets for seamless communication, coupled with email authentication to ensure that only users from the same institute can connect and interact securely",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-4",
        icon: SiExpress,
        name: "Express.js"
      },
      {
        id: "icon-5",
        icon: SiHtml5,
        name: "Html"
      },
      
    ],
  },
  {
    id: "project-2",
    title: "Continuing Education and Outreach Activities Portal,IIT Ropar",
    github:"https://github.com/TuhinanshuModgil/CEOE_website.git",
    link: "https:",
    image: iitrpr,
    content:
      "The official site of Continuing Education and Outreach Activities, IIT Ropar.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
    ],
  },
  {
    id: "project-3",
    title: "News aggregator",
    github: "https://github.com/chopra-prisha/News-Aggregator.git",
    link: "",
    image: newsApp,
    content:
      " A web scraper that collects tech news from various websites, summarizes articles using NLP, and delivers personalized content to users based on their preferences via email",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Python"
      },
      
      
    ],
  },
   {
    id: "project-4",
    title: "Portfolio",
    github: "https://github.com/mittal-parth/personal-portfolio",
    link: "",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
];




export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/chopra-prisha/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/chopra-prisha",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:prishachopra6@gmail.com",
  },
];

export const aboutMe = {
    name: "Prisha Chopra",
    intro: "A passionate software developer from India, always exploring new challenges and creating innovative solutions"
}

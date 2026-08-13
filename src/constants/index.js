import {
  mobile,
  backend,
  creator,
  web,
  java,
  kotlin,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  infosys,
  vw_technologies,
  gehealthcare,
  fractal,
  globallogic,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Design & Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Devops Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Consultant",
    company_name: "GlobalLogic",
    icon: globallogic,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Team Leadership & Governance: Led a cross-functional team of up to 10 frontend and backend engineers. Mentored team members, managed sprint lifecycles, and translated complex business requirements into clear technical blueprints",
      "Full-Stack & Microservices Architecture: Co-designed and developed high-concurrency, reactive microservices and responsive user interfaces. Engineered a global localization system that eliminated cross-border display anomalies across multiple services",
      "Data Pipeline Engineering: Spearheaded the development of automated data pipelines using shell scripting and asynchronous processing. Ensured flawless daily data synchronization from MySQL to Oracle DB and Cassandra with built-in error handling.",
      "DevOps & Cloud Observability: Accelerated CI/CD workflows by containerizing services using Docker and managing Kubernetes manifests. Enabled frictionless blue-green production deployments using Jenkins, GitHub Actions, and Spinnaker.",
      "QA & Performance Validation: Directed the creation of automated unit and acceptance test suites. Authored custom high-load performance test scenarios using Gatling and Kotlin to guarantee platform stability during global traffic spikes.",
      "AI-Assisted Productivity: Integrated generative AI tools (GitHub Copilot, Gemini AI, Spring AI) into the development lifecycle to accelerate architecture ",
    ],
  },
  {
    title: "Senior Engineer",
    company_name: "Fractal Analytics",
    icon: fractal,
    iconBg: "#383E56",
    date: "Dec 2021 - August 2022",
    points: [
      "Developed efficient and maintainable software according to business objectives and needs of clients.",
      "Maintained complex technology infrastructure and collaborated with product team to implement new features and strategically plan for future products.",
      "Reviewed code, debugged problems and corrected issues.",
      "Coordinated with other engineers to evaluate and improve software interfaces.",
      "Worked with back-end developers to design APIs.",
      "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.",
    ],
  },
  {
    title: "Software Engineering Specialist",
    company_name: "GE Healthcare",
    icon: gehealthcare,
    iconBg: "#383E56",
    date: "May 2019 - March 2021",
    points: [
      "Developed Restful web-services and implemented Microservices architecture using Java/NodeJS.",
      "Collaborated with Tech Lead to integrate UI features capable of complying with prescribed code standards and technical design guidelines.",
      "UI Developer involved in building Application as required.",
      "Tested websites and performed troubleshooting prior to deployment.",
      "Worked with new on new concept called Micro-Apps for UI and got recognition for that.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "VW Technologies",
    icon: vw_technologies,
    iconBg: "#383E56",
    date: "August 2018 - May 2019",
    points: [
      "Designed UIs within frontend web frameworks such as ReactJS , exploiting associated templates and tools to shorten development times.",
      "Improved and expanded project platforms using JavaScript to develop rich User Interfaces.",
      "Developed interfaces using ReactJS that simplified overall management and offered ease-of-use.",
      "Involved in training/helping fresher/Juniors",
    ],
  },
  {
    title: "Senior Systems Engineer",
    company_name: "Infosys Ltd",
    icon: infosys,
    iconBg: "#383E56",
    date: "Dec 2014 - Mar 2018",
    points: [
      "Collaborated with Tech Leads and other senior Developers to integrate UI features capable of complying with prescribed code standards and technical design guidelines.",
      "Improved and expanded project platforms using JavaScript to develop rich User Interfaces.",
      "Developed interfaces using ReactJS that simplified overall management and offered ease-of-use.",
      "Designed UI using ReactJS , exporing associated templates and tools to shorten development times and involved in developing microservices using Java.",
    ],
  },
];

export { services, technologies, experiences };
// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Arjun",
  middleName: "",
  lastName: "G",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/arjupba",
    },
    {
      image: "fa-stack-overflow",
      url: "https://stackoverflow.com/users/5349917/arjun-g?tab=profile",
    },
    {
      image: "fa-npm",
      url: "https://www.npmjs.com/~arjupba",
      size: "1.05em",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/arjupba/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/arjupba/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/arjupba",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/arjupba/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/arjupba.png"),
  imageSize: 375,
  message:
    "My name is Arjun G. I’m a graduate of 2014 from Calicut University with a degree in Electronics. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume:
    "https://docs.google.com/document/d/1j0TX_vHq8uOLTnLvRec3a_lzenQ6ZyRXPk9n56VX6VE/edit",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "arjupba",
  reposLength: 0,
  specificRepos: [
    "nestjs-secret-manager",
    "nestjs-ssm-param-store ",
    "middy-middleware-class-validator",
    "nestjs-mongodb-auth-crud-starter",
    "objectid-validator",
    "node-oauth2-server",
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "NodeJS", value: 90 },
    { name: "NestJS", value: 95 },
    { name: "ExpressJS", value: 85 },
    { name: "MongoDB", value: 85 },
    { name: "Kafka", value: 70 },
    { name: "React", value: 65 },
    { name: "CSS/HTML", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "arjupba@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Module Lead",
      companylogo: require("../assets/img/aspire.png"),
      date: "Apr 2023 – Present",
      url: "https://www.aspiresys.com/",
    },
    {
      role: "Senior Software Engineer",
      companylogo: require("../assets/img/sorice.png"),
      date: "Apr 2021 – Mar 2023",
      url: "https://soricesolutions.com/",
    },
    {
      role: "Software Engineer",
      companylogo: require("../assets/img/frugal.png"),
      date: "Dec 2017 – Mar 2021",
      url: "https://www.frugalscientific.com/",
    },
  ],
};

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };

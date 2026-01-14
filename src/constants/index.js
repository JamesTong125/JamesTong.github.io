const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },

];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Developer",
    modelPath: "/models/c++.glb",
    scale: 0.08,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "SOLIDWORKS 3D Modeler",
    modelPath: "/models/SW Cube.glb",
    scale: 0.15,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "In my early highschool years, I did not have a clear sense of direction in my life, which led me to participate in many different kinds of extracurricular activities",
    logoPath: "/images/JALogo.png",
    title: "Information Technologies and Vice President of Environmental Impacts",
    date: "October 2022 - March 2024",
    responsibilities: [
      "Developed student company websites to increase sales and traffic.",
      "Managed company accounts such as gmail and social media",
      "Reduced the company’s carbon footprint by 9000kg of C02 equivalent.",
      "Formed partnerships with local environmental organizations and charities."
    ],
  },
  {
    review: "Throughout highschool I developed a passion for medicine and was leaning towards a career in life or health sciences.",
    logoPath: "/images/YourekaLogo.png",
    title: "High School Student Researcher and Investigator",
    date: "January 2024 - June 2024",
    responsibilities: [
      "Research about the effects of radon gas on the progression of lung cancer.", 
      "Utilized biotech software (RStudio and Galaxy) to analyze collected data.",
      "Created a three-minute-thesis, poster, and PowerPoint to present our research",
      "Presented research at the regional symposium and won a gold medal.",
    ],
  },
  {
    review: "Nowadays, I am still passionate about healthcare and life sciences, but I have rediscovered my love for engineering and problem solving, which has led me to where I am today.",
    logoPath: "/images/BiotronLogo.png",
    title: "Core Team Member",
    date: "September 2025 - Present",
    responsibilities: [
      "Developed a mechanically controlled lower body exoskeleton utilizing biosensors to interpret muscle signals, supporting lower body movement.",
      "Applied proficiency in electric component integration and programming using ESP32 and CAN protocol to ensure seamless hardware-software functionality.",
      "Designed, 3D-printed, assembled and tested a fully functional lower body Exoskeleton.",
    ],
  },
];



const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/jame.s.tong/"
  },

  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/james-tong-6022592b6/"
  },
];

export {
  words,
  expCards,
  socialImgs,
  techStackIcons,
  navLinks,
};
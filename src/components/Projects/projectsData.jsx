/** @format */

// import astronexImage1 from "../../assets/images/AstroNex/1a.webp";
// import astronexImage2 from "../../assets/images/AstroNex/2a.webp";
// import astronexImage3 from "../../assets/images/AstroNex/3.webp";
// import astronexImage4 from "../../assets/images/AstroNex/4.webp";
// import astronexImage5 from "../../assets/images/AstroNex/5b.webp";
// import astronexImageMain from "../../assets/images/AstroNex/main.webp";

// import airImage1 from "../../assets/images/air/air1.webp";
// import airImage2 from "../../assets/images/air/air2.webp";
// import airImage3 from "../../assets/images/air/air3.webp";
// import airImage4 from "../../assets/images/air/air4.webp";
// import airImage5 from "../../assets/images/air/air5.webp";
// import airImage6 from "../../assets/images/air/air6.webp";
// import airImageMain from "../../assets/images/air/main.png";

import mybikeImage1 from "../../assets/images/myBike/1.webp";
import mybikeImage2 from "../../assets/images/myBike/2.webp";
import mybikeImage3 from "../../assets/images/myBike/3.webp";
import mybikeImage4 from "../../assets/images/myBike/4.webp";
import mybikeImageMain from "../../assets/images/myBike/main.webp";

import pastelMain from "../../assets/images/pastelpixels/main.webp";
import pastelImage1 from "../../assets/images/pastelpixels/1.webp";
import pastelImage2 from "../../assets/images/pastelpixels/2.webp";
import pastelImage3 from "../../assets/images/pastelpixels/3.webp";

import radarMain from "../../assets/images/Radar/main.webp";
import radarImage1 from "../../assets/images/Radar/1.webp";
import radarImage2 from "../../assets/images/Radar/2.webp";
import radarImage3 from "../../assets/images/Radar/3.webp";
import radarImage4 from "../../assets/images/Radar/4.webp";


// import gameImage from '../../assets/images/2048/game1.jpg';

import todoImage from '../../assets/images/todo/new.png';

export const projects = [
  {
    image1: radarMain,
    name: "Rival Radar",
    year: "2026",
    isLarge: true,
    images: [radarMain, radarImage1, radarImage2, radarImage3, radarImage4],
    video: null,
    techsteck: "HTML5, CSS3, JavaScript, BEM",
    description:
      "A fully responsive SaaS landing page focused on product clarity, structured content hierarchy, and conversion-driven layout. The project includes reusable UI components, pricing logic, hover interactions, optimized for seamless performance across all screen sizes.",
    liveLink: "https://rivalradar.netlify.app",
    codeLink: null,
  },
  
  {
    image1: mybikeImageMain,
    name: "MyBike",
    year: "2025",
    isLarge: false,
    images: [mybikeImage1, mybikeImage2, mybikeImage3, mybikeImage4],
    video: null,
    techsteck: "HTML5, CSS3, JavaScript, BEM",
    description:
      "A fully responsive product landing page focused on clean layout, strong visuals, and clear content structure. The project features hover interactions, subtle scroll-based animations, and a fully responsive layout designed to work seamlessly across screen sizes.",
    liveLink: "https://mybikelanding.netlify.app",
    codeLink: null,
  },

  // {
  //   image1: astronexImageMain,
  //   name: "AstroNex",
  //   year: "2025",
  //   images: [
  //     astronexImage1,
  //     astronexImage2,
  //     astronexImage3,
  //     astronexImage4,
  //     astronexImage5,
  //   ],
  //   video: null,
  //   techsteck: "JavaScript, HTML5, CSS3",
  //   description:
  //     "Astrology-themed marketing website with a strong emphasis on visual hierarchy, responsive layout, and detailed UI implementation. Built using clean HTML, CSS, and JavaScript with custom interactive elements and subtle animations to enhance user experience.",
  //   liveLink: "https://astro-nex.netlify.app",
  //   codeLink: null,
  // },
      {
    image1: todoImage,
    name: "Task Management App with API",
    year: "2024",
    isLarge: false,
    images: [],
    video: require('../../assets/images/todo/todo.mov'),
    techsteck: 'Typescript, HTML5, CSS, SASS, React',
    description: 'This is a task management application designed and developed to provide a seamless experience for creating, updating, and managing tasks. The app is built using React and TypeScript and integrates with an API for dynamic task handling.',
    liveLink: "https://task-management-app-iota-roan.vercel.app",
    codeLink: "https://github.com/NKoshmak/task-management-app"
  },
  {
    image1: pastelMain,
    name: "Pastel Pixels Studio",
    year: "2025",
    isLarge: true,
    images: [pastelMain, pastelImage1, pastelImage2, pastelImage3],
    video: null,
    techsteck: "Next.js, CSS3, GSAP",
    description:
      "A production-ready studio website built with Next.js, featuring modular components, custom CSS architecture, and GSAP-powered motion effects. The project emphasizes clean content hierarchy, scalable structure, and smooth performance across all screen sizes.",
    liveLink: "https://www.pastelpixelsstudio.com/",
    codeLink: null,
  },



  // {
  //   image1: airImageMain,
  //   name: "Air",
  //   year: "2023",
  //   isLarge: true,
  //   images: [airImage1, airImage2, airImage3, airImage4, airImage5, airImage6],
  //   video: null,
  //   techsteck: "HTML5, CSS3, SASS, BEM",
  //   description:
  //     "A fully responsive landing page, that ensuring seamless functionality across all screen sizes. Provide smooth navigation with links scrolling to corresponding sections, reusable components for consistency in “Who We Are” and “Our Expertise” sections, interactive slider and animated cards for an engaging user experience, functional contact forms with validation and smooth scrolling after submission.",
  //   liveLink: "https://nkoshmak.github.io/air-landing/",
  //   codeLink: "https://github.com/NKoshmak/air-landing",
  // },

  // {
  //   image1: gameImage,
  //   name: "Game 2048",
  //   year: "2022",
  //   isLarge: true,
  //   images: [],
  //   video: require('../../assets/images/2048/record2048.mov'),
  //   techsteck: 'JavaScript, HTML/CSS, SASS',
  //   description: 'A dynamic web-based clone of the popular 2048 game, built for seamless gameplay and responsiveness. Features include intuitive tile sliding, smooth animations for merging tiles, and real-time score updates. Designed to provide an engaging and interactive user experience across both desktop and mobile platforms.',
  //   liveLink: "https://2048-game-phi-two.vercel.app",
  //   codeLink: "https://github.com/NKoshmak/2048-game",
  // },
];

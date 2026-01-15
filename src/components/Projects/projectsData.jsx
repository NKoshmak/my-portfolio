import astronexImage1 from '../../assets/images/AstroNex/1a.png';
import astronexImage2 from '../../assets/images/AstroNex/2a.png';
import astronexImage3 from '../../assets/images/AstroNex/3.png';
import astronexImage4 from '../../assets/images/AstroNex/4.png';
import astronexImage5 from '../../assets/images/AstroNex/5b.png';

import airImage1 from '../../assets/images/air/air1.jpg';
import airImage2 from '../../assets/images/air/air2.jpg';
import airImage3 from '../../assets/images/air/air3.jpg';
import airImage4 from '../../assets/images/air/air4.jpg';
import airImage5 from '../../assets/images/air/air5.jpg';
import airImage6 from '../../assets/images/air/air6.jpg';

import gameImage from '../../assets/images/2048/game1.jpg';

import todoImage from '../../assets/images/todo/todo1.jpg';
// import boImage1 from '../../assets/images/bo/bo1.jpg';
// import boImage2 from '../../assets/images/bo/bo2.jpg';
// import boImage3 from '../../assets/images/bo/bo3.jpg';
// import boImage4 from '../../assets/images/bo/bo4.jpg';

export const projects = [
    { 
    image1: astronexImage1,
    name: "AstroNex",
    year: "2025",
    isLarge: true,
    images: [
      astronexImage1,
      astronexImage2,
      astronexImage3,
      astronexImage4,
      astronexImage5,
         
    ],
    video: null,
    techsteck: 'JavaScript, HTML/CSS',
    description: 'Astrology-themed marketing website with a strong emphasis on visual hierarchy, responsive layout, and detailed UI implementation. Built using clean HTML, CSS, and JavaScript with custom interactive elements and subtle animations to enhance user experience.',
    liveLink: "https://effortless-horse-20a7f2.netlify.app",
    codeLink: null,
  },
  { 
    image1: todoImage,
    name: "Task Management App with API",
    year: "2024",
    
    images: [],
    video: require('../../assets/images/todo/todo.mov'),
    techsteck: 'Typescript, HTML5/CSS, SASS, React',
    description: 'This is a task management application designed and developed to provide a seamless experience for creating, updating, and managing tasks. The app is built using React and TypeScript and integrates with an API for dynamic task handling.',
    liveLink: "https://task-management-app-iota-roan.vercel.app",
    codeLink: "https://github.com/NKoshmak/task-management-app"
  },
  {
    image1: airImage1,
    name: "Air",
    year: "2023",
    images: [
      airImage1,
      airImage2,
      airImage3,
      airImage4,
      airImage5,
      airImage6,
      
    ],
    video: null,
    techsteck: 'JavaScript, HTML5/CSS, SASS, BEM',
    description: 'A fully responsive landing page, that ensuring seamless functionality across all screen sizes. Provide smooth navigation with links scrolling to corresponding sections, reusable components for consistency in “Who We Are” and “Our Expertise” sections, interactive slider and animated cards for an engaging user experience, functional contact forms with validation and smooth scrolling after submission.',
    liveLink: "https://nkoshmak.github.io/air-landing/",
    codeLink: "https://github.com/NKoshmak/air-landing",
  },

  // {
  //   image1: boImage1,
  //   name: "B&O",
  //   year: "2024",
  //   isLarge: true,
  //   images: [
  //     boImage1,
  //     boImage2,
  //     boImage3,
  //     boImage4,     
  //   ],
  //   video: null,
  //   techsteck: 'JavaScript, HTML5, CSS/SASS, BEM',
  //   description: 'A responsive landing page for B&O, showcasing modern design principles and user-friendly functionality. Includes email form validation, interactive hover and focus states, clickable phone numbers, and address links to Google Maps. Designed with mobile-first and cross-browser compatibility in mind.',
  //   liveLink: "https://nkoshmak.github.io/BO-landing-page/",
  //   codeLink: "https://github.com/NKoshmak/BO-landing-page",
  // },

  {
    image1: gameImage,
    name: "Game 2048",
    year: "2022",
    isLarge: true,
    images: [],
    video: require('../../assets/images/2048/record2048.mov'),
    techsteck: 'JavaScript, HTML/CSS, SASS',
    description: 'A dynamic web-based clone of the popular 2048 game, built for seamless gameplay and responsiveness. Features include intuitive tile sliding, smooth animations for merging tiles, and real-time score updates. Designed to provide an engaging and interactive user experience across both desktop and mobile platforms.',
    liveLink: "https://2048-game-phi-two.vercel.app",
    codeLink: "https://github.com/NKoshmak/2048-game",
  },
];
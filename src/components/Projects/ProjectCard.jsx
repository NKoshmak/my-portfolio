import classNames from "classnames";
import { useState } from "react";
import { ProjectPopup } from './ProjectPopup.jsx';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createPortal } from 'react-dom';

export const ProjectCard = ({ project }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = (e) => {
    // Don't close if clicking inside the popup
    if (e && (e.target.closest('.carousel-arrow') || e.target.closest('.project__img'))) {
      e.stopPropagation();
      return;
    }
    
    setIsPopupVisible(!isPopupVisible);

    if (!isPopupVisible) {
      document.body.style.overflow = "hidden";
      ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
    } else {
      document.body.style.overflow = "";
      ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
    }
  };

  return (
    <>
      <div 
        className={classNames('project-card', { 'large': project.isLarge })} 
        onClick={togglePopup}
      >
        <img src={project.image1} alt={project.name} className="project-image" />
        <div className="project-details">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-year">{project.year}</p>
        </div>
      </div>

      {isPopupVisible && createPortal(
        <div className="project-popup-overlay" onClick={togglePopup}>
          <ProjectPopup 
            project={project} 
            onClose={togglePopup} 
          />
        </div>,
        document.body
      )}
    </>
  );
};
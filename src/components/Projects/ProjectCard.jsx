import classNames from "classnames";
import { useState } from "react";
import { ProjectPopup } from './ProjectPopup.jsx';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ProjectCard = ({ project }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);

    if (!isPopupVisible) {
      document.body.style.overflow = "hidden";
      ScrollTrigger.getAll().forEach((trigger) => trigger.disable()); // Pause GSAP animations
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
      ScrollTrigger.getAll().forEach((trigger) => trigger.enable()); // Resume GSAP animations
    }
  };

  return (
    <div 
      className={classNames('project-card', { 'large': project.isLarge })} 
      onClick={togglePopup}
    >
      <img src={project.image1} alt={project.name} className="project-image" />
      <div className="project-details">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-year">{project.year}</p>
      </div>

      {isPopupVisible && (
        <ProjectPopup project={project} onClose={togglePopup} />
      )}
    </div>
  );
};
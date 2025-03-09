import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { ProjectPopup } from './ProjectPopup.jsx';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createPortal } from 'react-dom';
import gsap from 'gsap';

export const ProjectCard = ({ project }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    
    const handleEnter = () => {
      gsap.to(card, {
        duration: 0.8,
        background: 'linear-gradient(65deg, rgba(217, 70, 239, 0.2), rgba(20, 184, 166, 0.2))',
        backdropFilter: 'blur(75px)',
        boxShadow: '0 0 40px rgba(217, 70, 239, 0.2), 0 0 30px rgba(20, 184, 166, 0.3)',
        ease: 'power2.inOut'
      });

      gsap.to(image, {
        duration: 0.8,
        scale: 0.96,
        filter: 'none',
        ease: 'power2.inOut'
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        duration: 0.8,
        background: 'none',
        backdropFilter: 'blur(0px)',
        boxShadow: 'none',
        ease: 'power2.inOut'
      });

      gsap.to(image, {
        duration: 0.8,
        scale: 1,
        filter: 'none',
        ease: 'power2.inOut'
      });
    };

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mouseleave', handleLeave);

    // Touch events for mobile
    card.addEventListener('touchstart', handleEnter);
    card.addEventListener('touchend', handleLeave);

    return () => {
      card.removeEventListener('mouseenter', handleEnter);
      card.removeEventListener('mouseleave', handleLeave);
      card.removeEventListener('touchstart', handleEnter);
      card.removeEventListener('touchend', handleLeave);
    };
  }, []);

  const togglePopup = (e) => {
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
        ref={cardRef}
        className={classNames('project-card', { 'large': project.isLarge })} 
        onClick={togglePopup}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <img 
          ref={imageRef} 
          src={project.image1} 
          alt={project.name} 
          className="project-image" 
        />
        <div className="project-details">
          <h3 className="project-name">{project.name}</h3>
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
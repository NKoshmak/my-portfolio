import { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export const ProjectPopup = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [];

  useEffect(() => {
    if (!project.video) {
      gsap.fromTo(
        ".carousel-container img",
        { opacity: 0 },
        { opacity: 1, scale: 1, duration: 3 }
      );
    }

    gsap.fromTo(
      ".project__details",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 1.6 }
    );
  }, [project.video]);

  const nextImage = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    // Two-pointer approach for image navigation
    if (clickX < rect.width / 2) {
      prevImage(e); 
    } else {
      nextImage(e); 
    }
  };

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClose();
  };

  return (
    <div className="container" onClick={(e) => e.stopPropagation()}>
      <div className="project-popup-overlay" onClick={handleClose}></div>
      <div className="project-popup" onClick={(e) => e.stopPropagation()}>
        <div className="nav">
          <Link 
            to="/" 
            className="back__link"
            onClick={handleClose}
          >
            Back to main page
          </Link>
        </div>

        <div className="project__info">
          {project.video ? (
            <div className="video__container">
              <video
                src={project.video}
                autoPlay
                loop
                controls
                className="video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
              <button 
                className="carousel-arrow left" 
                onClick={prevImage}
              >
                <i className="fa-duotone fa-solid fa-arrow-left fa-sm"></i>
              </button>
              <img
                className="project__img"
                src={images[currentImageIndex]}
                alt="project"
                onClick={handleImageClick}
              />
              <button 
                className="carousel-arrow right" 
                onClick={nextImage}
              >
                <i className="fa-duotone fa-solid fa-arrow-right fa-sm"></i>
              </button>
            </div>
          )}

          <div className="project__details">
            <h2 className="project__name">{project.name}</h2>
            <p className="project__description">{project.description}</p>
            <ul className="project__list">
              {project.techsteck.split(",").map((tech, index) => (
                <li key={index} className="project__tech">
                  {tech.trim()}
                </li>
              ))}
            </ul>

            <div className="project-popup-buttons">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="popup-button"
              >
                Live View
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="popup-button"
              >
                Code View
              </a>
            </div>
          </div>
        </div>

        <div className="footer">
          <h4 className="footer__name">Natalia Koshmak</h4>
          <span>&copy; {new Date().getFullYear()} Copyright</span>
          <a
            className="text__content__link footer__link"
            href="mailto:koshmaknatalia@gmail.com"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

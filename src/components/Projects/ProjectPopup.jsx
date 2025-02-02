import { useEffect, useState } from "react";
import gsap from "gsap";

export const ProjectPopup = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [];

  useEffect(() => {
    if (!project.video) {
      // Animate the carousel image
      gsap.fromTo(
        ".carousel-container img",
        { opacity: 0 }, // Initial state
        { opacity: 1, scale: 1, duration: 3 } // Final state: fade in and scale to normal
      );
    }

    // Animate the project details on load
    gsap.fromTo(
      ".project__details",
      { opacity: 0, yPercent: 100 }, // Initial state (invisible and slightly translated)
      { opacity: 1, yPercent: 0, duration: 1.6 } // Final state: fully visible and in place
    );
  }, [project.video]);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container">
      <div className="project-popup-overlay show" onClick={onClose}></div>
      <div className="project-popup show">
        <div className="nav">
          <a href="#main" className="back__link">
            Back to main page
          </a>
        </div>

        <div className="project__info">
          {/* Conditionally render video or carousel */}
          {project.video ? (
            <div className="video__container">
              <video src={project.video} autoPlay loop controls className="video">
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="carousel-container">
              <button className="carousel-arrow left" onClick={prevImage}>
                <i class="fa-duotone fa-solid fa-arrow-left fa-sm"></i>
              </button>
                <img
                  className="project__img"
                  src={images[currentImageIndex]}
                  alt="project"
                />
              <button className="carousel-arrow right" onClick={nextImage}>
                <i class="fa-duotone fa-solid fa-arrow-right fa-sm"></i>
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
          <h4 className="footer__name">Nataliia Koshmak</h4>
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
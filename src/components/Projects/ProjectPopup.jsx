import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export const ProjectPopup = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const images = project.images || [];

  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const popup = popupRef.current;
    const overlay = overlayRef.current;

    // Initial positions (start point)
    const startScale = 0.3;
    const endScale = 1;

    // Create timeline for coordinated animation
    const tl = gsap.timeline();

    // Animate overlay
    tl.fromTo(overlay, 
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    // Animate popup
    tl.fromTo(popup,
      {
        scale: startScale,
        opacity: 0,
        y: '100vh'
      },
      {
        scale: endScale,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.2" // Overlap with overlay animation
    );

    // Cleanup animation on unmount
    return () => {
      tl.kill();
    };
  }, []);

  const handleClose = () => {
    const popup = popupRef.current;
    const overlay = overlayRef.current;

    // Animate out using two points (current -> end)
    const tl = gsap.timeline({
      onComplete: onClose
    });

    tl.to(popup, {
      scale: 0.3,
      opacity: 0,
      y: '100vh',
      duration: 0.4,
      ease: "power2.in"
    });

    tl.to(overlay, {
      opacity: 0,
      duration: 0.3
    }, "-=0.2");
  };

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

    if (window.innerWidth <= 768) {
      setIsFullscreen(true);
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;

      if (clickX < rect.width / 2) {
        prevImage(e); 
      } else {
        nextImage(e); 
      }
    }
  };

  const closeFullscreen = (e) => {
    e.stopPropagation();
    setIsFullscreen(false);
  };

  // Handle touch gestures for mobile swiping
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };


  const handleTouchEnd = (e) => {
    const touchX = touchStartX;
    const swipeDistance = touchStartX - touchEndX;
  
    if (swipeDistance > 50) {
      nextImage(e);
    } else if (swipeDistance < -50) {
      prevImage(e); 
    } else {
      const screenWidth = window.innerWidth;
  
      if (touchX < screenWidth / 2) {
        prevImage(e); 
      } else {
        nextImage(e); 
      }
    }
  };

  return (
    <div className="container" onClick={(e) => e.stopPropagation()}>
      <div className="project-popup-overlay" onClick={handleClose} ref={overlayRef}></div>
      <div className="project-popup" ref={popupRef} onClick={(e) => e.stopPropagation()}>
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

      {/* Fullscreen Image Overlay */}
      {isFullscreen && (
        <div
          className="fullscreen-overlay"
          onClick={closeFullscreen}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentImageIndex]}
            alt="Fullscreen project"
            className="fullscreen-img"
          />
          <button className="close-fullscreen" onClick={closeFullscreen}>
            <i className="fa-solid fa-circle-xmark fa-sm"></i>
          </button>
        </div>
      )}
    </div>
  );
};

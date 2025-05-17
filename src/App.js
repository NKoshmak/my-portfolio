
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import Lenis from '@studio-freight/lenis';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage.jsx';
import Projects from './components/Projects/Projects.jsx';
import NeonCanvas from './components/NeonCursor/NeonCanva.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const lenisRef = useRef(null);
  const [loading, setLoading] = useState(true);

  //loader
  useEffect(() => {
    let counter = { value: 40 };
    let loaderDuration = sessionStorage.getItem("visited") !== null ? 2 : 4;

    if (sessionStorage.getItem("visited") !== null) {
      counter.value = 50;
    }
    sessionStorage.setItem("visited", "true");

    function updateLoaderText() {
      let progress = Math.round(counter.value);
      document.querySelector(".loader_number").textContent = progress;
    }

    function endLoaderAnimation() {
      setLoading(false);
      if (lenisRef.current) {
        lenisRef.current.start();
      }
      gsap.set(".home-hero_content", { autoAlpha: 1 });
    }

    let tlLoad = gsap.timeline({
      onComplete: endLoaderAnimation,
      onStart: () => {
        if (lenisRef.current) {
          lenisRef.current.stop();
        }
      },
    });

    tlLoad.to(counter, {
      value: 100,
      onUpdate: updateLoaderText,
      duration: loaderDuration,
      ease: "linear",
    });

    tlLoad.to(
      ".loader_progress",
      {
        width: "100%",
        duration: loaderDuration,
        ease: "linear",
      },
      0
    );
  }, []);

  //pages
  useEffect(() => {
  let panels = gsap.utils.toArray(".panel");
  panels.pop();

  panels.forEach((panel, i) => {
    let tl = gsap.timeline({
      scrollTrigger:{
      trigger: panel,
      start: "bottom bottom",
      pinSpacing: false,
      pin: true,
      scrub: true,
      onRefresh: () => gsap.set(panel, {transformOrigin: "center " + (panel.offsetHeight - window.innerHeight / 2) + "px"})
    }
  });
  
    tl.fromTo(panel, {y:0, rotate:0, scale:1, opacity:1}, {y:0, rotateX:0, scale:0.5, opacity:0.5}, 0)
    .to(panel, {opacity:0})
    
  });
}, []);

  //scroll
  useEffect(() => {
    // Check if the device is mobile
    const isMobile = window.innerWidth <= 768;
  
    if (!isMobile) {
      lenisRef.current = new Lenis({
        smooth: true,
        infinite: true,
        duration: 1,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        wrapper: document.body
      });
  
      const lenis = lenisRef.current;
    
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.lagSmoothing(0);
    
      function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
      }
    
      requestAnimationFrame(raf);
  
      return () => {
        lenis.destroy(); // Cleanup Lenis instance
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup ScrollTriggers
      };
    }
  }, []);

  return (
    <>
    <NeonCanvas />
      {loading && (
        <div className="loader">
          <div className="loader_progress"></div>
          <span className="loader_number">0</span>
        </div>
      )}

      <div className="slides-wrapper">
        <section className="panel">
          <div className="panel-content main">
            <MainPage />
          </div>
        </section>

        <section className="panel">
          <div className="panel-content height">
            <div className="dd">
              <Projects />
            </div>
          </div>
        </section>


        <section className="panel">
          <div className="panel-content">
            <MainPage />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

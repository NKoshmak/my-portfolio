import React, { useEffect, useRef } from "react";

const NeonTrail = () => {
  const canvasRef = useRef(null);
  const trail = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const getRandomColor = () => {
      const colors = [ "#D946EF", "#14B8A6"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trail.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(trail.current[0].x, trail.current[0].y);

        for (let i = 0; i < trail.current.length - 1; i++) {
          const point1 = trail.current[i];     
          const point2 = trail.current[i + 1]; 
          
          const xc = (point1.x + point2.x) / 2;
          const yc = (point1.y + point2.y) / 2;
          ctx.quadraticCurveTo(point1.x, point1.y, xc, yc);
        }

        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = trail.current[0].color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = trail.current[0].color;
        ctx.stroke();
      }

      for (let i = 0; i < trail.current.length; i++) {
        trail.current[i].opacity -= 0.1; 
      }

      trail.current = trail.current.filter((p) => p.opacity > 0);
      requestAnimationFrame(drawTrail);
    };

    const handleMouseMove = (e) => {
      const x = e.clientX || (e.touches && e.touches[0].clientX);
      const y = e.clientY || (e.touches && e.touches[0].clientY);

      if (x && y) {
        trail.current.push({ x, y, opacity: 1, color: getRandomColor() });
        
        if (trail.current.length > 10) {
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    drawTrail();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "transparent",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default NeonTrail;
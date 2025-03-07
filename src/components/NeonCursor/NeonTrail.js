import React, { useEffect, useRef } from "react";

const NeonTrail = () => {
  const canvasRef = useRef(null);
  const trail = useRef([]); // Store trail points

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate random neon colors
    const getRandomColor = () => {
      const colors = ["#EC4899", "#D946EF", "#14B8A6", "#A855F7"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Draw neon trail
    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < trail.current.length; i++) {
        const { x, y, opacity, color } = trail.current[i];

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2); // Small circle effect
        ctx.fillStyle = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
          color.slice(3, 5),
          16
        )}, ${parseInt(color.slice(5, 7), 16)}, ${opacity})`;
        ctx.shadowBlur = 7;
        ctx.shadowColor = color;
        ctx.fill();
      }

      // Update opacity & remove old points
      for (let i = 0; i < trail.current.length; i++) {
        trail.current[i].opacity -= 0.02;
      }

      // Remove points with very low opacity
      trail.current = trail.current.filter((p) => p.opacity > 0);

      requestAnimationFrame(drawTrail);
    };

    // Mouse move event
    const handleMouseMove = (e) => {
      const x = e.clientX || (e.touches && e.touches[0].clientX);
      const y = e.clientY || (e.touches && e.touches[0].clientY);

      if (x && y) {
        trail.current.push({ x, y, opacity: 1, color: getRandomColor() });

        // Limit trail length
        if (trail.current.length > 20) {
          trail.current.shift();
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
      }}
    />
  );
};

export default NeonTrail;
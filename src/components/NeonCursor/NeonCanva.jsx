import { useState, useEffect } from "react";
import "./NeonCanva.css";

const NeonCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      let x, y;

      if (e.touches) {
        // For mobile devices (touch event)
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        // For desktop (mouse event)
        x = e.clientX;
        y = e.clientY;
      }

      setPosition({ x, y });
    };

    // Listen for both mouse and touch events
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <div
      className="neon-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default NeonCursor;
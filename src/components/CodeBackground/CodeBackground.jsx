/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = () => {
  const codeRef = useRef(null);
  const [topPosition, setTopPosition] = useState(100);
  const [fontSize, setFontSize] = useState("0.7rem"); // Default for desktop

  useEffect(() => {
    const handleResize = () => {
      setTopPosition(window.innerWidth <= 768 ? 200 : 180);
      setFontSize(window.innerWidth <= 768 ? "0.4rem" : "0.7rem"); // Adjust font size
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={codeRef}
      style={{
        position: "absolute",
        top: `${topPosition}px`,
        left: "0px",
        padding: "16px",
        color: "#fff",
        width: "500px",
        maxWidth: "100%",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        fontSize: fontSize,
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={{
          ...dracula,
          background: "none",
          backgroundColor: "transparent",
        }}
        customStyle={{
          background: "none",
          backgroundColor: "transparent",
          padding: "0px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowX: "auto",
          fontSize: fontSize,
          marginTop: "20px",
        }}
        wrapLongLines={true}
      >
        {`
  export const getProfileData = () => {
    return (
    <div>
      <h1>
         Hey there, I’m Natalia
      </h1>

      <p>
          I’m a Frontend Developer & Designer who loves
        building interactive and dynamic web 
        applications,turning ideas into engaging
        digital experiences.
          Skilled in JS, React, HTML/CSS and other 
        modern technologies.

        <strong> 
          Always learning, always building. 
        </strong>
      </p>
    </div>
    ); 
  };

  `}
      </SyntaxHighlighter>
    </div>
    
  );
};

export default CodeSnippet;

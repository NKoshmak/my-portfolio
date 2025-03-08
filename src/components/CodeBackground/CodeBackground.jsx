import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

// const CodeSnippet = () => {
//   const codeRef = useRef(null);
//   const [topPosition, setTopPosition] = useState(100);

//   useEffect(() => {
//     const handleResize = () => {
//       setTopPosition(window.innerWidth <= 768 ? 200 : 150);
//     };
//     handleResize(); 
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div
//       ref={codeRef}
//       style={{
//         position: "absolute",
//         top: `${topPosition}px`,
//         left: "0px",
//         padding: "16px",
//         color: "#ffffff",
//         width: "500px", 
//         maxWidth: "100%", 
//         overflowX: "auto", 
//         whiteSpace: "pre-wrap",
//       }}
//       className="code-container"
//     >
//       <SyntaxHighlighter
//         language="javascript"
//         style={{
//           ...dracula,
//           background: "none",
//           backgroundColor: "transparent",
//         }}
//         customStyle={{
//           background: "none",
//           backgroundColor: "transparent",
//           padding: "0px",
//           whiteSpace: "pre-wrap",
//           wordBreak: "break-word",
//           overflowX: "auto",
//           fontSize: "0.7rem",
//         }}
//         wrapLongLines={true}
//       >
//         {`
//   const getProfileData = () => {
//     return (
//     <div>
//       <h1>
//          Hey there, I’m Natalia
//       </h1>

//       <p>
//           I’m a Frontend Developer who loves
//         building interactive and dynamic web 
//         applications,turning ideas into engaging
//         digital experiences.
//           Skilled in JS, React, Next.js and other 
//         modern technologies.

//         <strong> 
//           Always learning, always building. 
//         </strong>
//       </p>
//     </div>
//     ); 
//   };`}
//       </SyntaxHighlighter>
//     </div>
//   );
// };

const CodeSnippet = () => {
  const codeRef = useRef(null);
  const [topPosition, setTopPosition] = useState(100);
  const [fontSize, setFontSize] = useState("0.7rem"); // Default for desktop

  useEffect(() => {
    const handleResize = () => {
      setTopPosition(window.innerWidth <= 768 ? 200 : 150);
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
        color: "#ffffff",
        width: "500px",
        maxWidth: "100%",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        fontSize: fontSize, // Dynamic font size
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={{ ...dracula, background: "none", backgroundColor: "transparent" }}
        customStyle={{
          background: "none",
          backgroundColor: "transparent",
          padding: "0px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowX: "auto",
          fontSize: fontSize, // Apply font size here too
        }}
        wrapLongLines={true}
      >
        {`
  const getProfileData = () => {
    return (
    <div>
      <h1>
         Hey there, I’m Natalia
      </h1>

      <p>
          I’m a Frontend Developer who loves
        building interactive and dynamic web 
        applications,turning ideas into engaging
        digital experiences.
          Skilled in JS, React, Next.js and other 
        modern technologies.

        <strong> 
          Always learning, always building. 
        </strong>
      </p>
    </div>
    ); 
  };`}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;

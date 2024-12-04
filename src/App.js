import React from "react";
import { motion } from "framer-motion";

function App() {
  const sections = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Education" },
    { id: 5, isHighlight: true }, // Highlighted section
    { id: 6, text: "Certifications" },
    { id: 7, text: "Skills and Knowledge Base" },
    { id: 8, text: "Extra Curricular" },
    { id: 9, text: "Research and Patents" },
  ];

  const handleClick = (section) => {
    if (!section.isHighlight) {
      alert(`You clicked on ${section.text} section`);
    }
  };

  return (
    <div className="relative w-full h-screen bg-overall-gradient">
      {/* Vertical and Horizontal Glowing Lines */}
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="33%"
          x2="33%"
          y1="0"
          y2="100%"
          className="line-gradient animate-line-motion"
        />
        <line
          x1="67%"
          x2="67%"
          y1="0"
          y2="100%"
          className="line-gradient animate-line-motion"
        />
        <line
          x1="0"
          x2="100%"
          y1="33%"
          y2="33%"
          className="line-gradient animate-line-motion"
        />
        <line
          x1="0"
          x2="100%"
          y1="67%"
          y2="67%"
          className="line-gradient animate-line-motion"
        />
      </svg>

      {/* Grid Sections */}
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full overflow-hidden">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`${
              section.isHighlight
                ? "bg-radial-highlight"
                : "bg-transparent"
            } flex justify-center items-center text-white cursor-pointer hover:bg-white/10 transition-transform duration-300`}
            onClick={() => handleClick(section)}
          >
            {section.isHighlight ? (
              <div className="text-center">
                <motion.h1
                  className="text-5xl font-extrabold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Kanav Sharma
                </motion.h1>
                <motion.p
                  className="text-2xl mt-2 font-medium text-cyan-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                >
                  DevOps Engineer
                </motion.p>
              </div>
            ) : (
              <p>{section.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

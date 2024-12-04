import React from "react";
import { motion } from "framer-motion";

function App() {
  const sections = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Education" },
    { id: 5, isHighlight: true }, // Highlighted section for "DevOps Engineer"
    { id: 6, text: "Certifications" },
    { id: 7, text: "Skills and Knowledge Base" },
    { id: 8, text: "Extra Curricular" },
    { id: 9, text: "Research and Patents" },
  ];

  const handleClick = (section) => {
    if (section.id !== 5) {
      alert(`You clicked on ${section.text} section`);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {/* SVG Animated Glowing Lines */}
      {/* Vertical Lines */}
      <motion.svg
        className="absolute w-3 left-1/3 h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 100"
      >
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#verticalGradient)"
          animate={{
            y: [0, -50, 0], // Moves line back and forth
            x: [0, 5, 0], // Slight wobble
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="verticalGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00f" />
            <stop offset="25%" stopColor="#0f0" />
            <stop offset="50%" stopColor="#f00" />
            <stop offset="75%" stopColor="#ff0" />
            <stop offset="100%" stopColor="#00f" />
          </linearGradient>
        </defs>
      </motion.svg>
      <motion.svg
        className="absolute w-3 left-2/3 h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 100"
      >
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#verticalGradient)"
          animate={{
            y: [0, -50, 0], // Moves line back and forth
            x: [0, -5, 0], // Slight wobble
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {/* Horizontal Lines */}
      <motion.svg
        className="absolute h-3 top-1/3 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 10"
      >
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#horizontalGradient)"
          animate={{
            x: [0, -50, 0], // Moves line back and forth
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="horizontalGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00f" />
            <stop offset="25%" stopColor="#0f0" />
            <stop offset="50%" stopColor="#f00" />
            <stop offset="75%" stopColor="#ff0" />
            <stop offset="100%" stopColor="#00f" />
          </linearGradient>
        </defs>
      </motion.svg>
      <motion.svg
        className="absolute h-3 top-2/3 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 10"
      >
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#horizontalGradient)"
          animate={{
            x: [0, 50, 0], // Moves line back and forth
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {/* Grid Sections */}
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full overflow-hidden">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex justify-center items-center text-white cursor-pointer hover:bg-white/10 transition-transform duration-300"
            onClick={() => handleClick(section)}
          >
            {section.isHighlight ? (
              <p className="text-2xl font-bold animate-typewriter">
                DevOps Engineer
              </p>
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

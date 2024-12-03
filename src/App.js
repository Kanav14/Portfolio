import React from "react";
import { motion } from "framer-motion";

function App() {
  const sections = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Education" },
    { id: 5, isGif: true }, // GIF section
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
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Vertical and Horizontal Animated Glowing Lines */}
      <motion.div
        className="absolute w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{ filter: "blur(2px)" }}
      ></motion.div>
      <motion.div
        className="absolute w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"
        initial={{ x: "200%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{ filter: "blur(2px)" }}
      ></motion.div>
      <motion.div
        className="absolute h-1 w-full bg-gradient-to-r from-blue-500 to-transparent"
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{ filter: "blur(2px)" }}
      ></motion.div>
      <motion.div
        className="absolute h-1 w-full bg-gradient-to-r from-blue-500 to-transparent"
        initial={{ y: "200%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{ filter: "blur(2px)" }}
      ></motion.div>

      {/* Grid Sections */}
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className="flex justify-center items-center text-white bg-black/20 cursor-pointer border border-blue-500"
            onClick={() => handleClick(section)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(0, 102, 255, 0.8)",
            }}
            transition={{ duration: 0.3 }}
          >
            {section.isGif ? (
              <img
                src="https://media.giphy.com/media/3o7ablnjH9XoVrwWdo/giphy.gif"
                alt="GIF"
                className="max-w-full max-h-full rounded-md"
              />
            ) : (
              <p>{section.text}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;

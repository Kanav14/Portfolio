import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to switch from preloader to main content after 4 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen bg-black">
        <h1 className="text-white text-6xl font-bold animate-fade-in">Hello World!</h1>
        <img
          src="https://media.giphy.com/media/3o7ablnjH9XoVrwWdo/giphy.gif"
          alt="Cloud with rain"
          className="absolute top-10 right-10 w-24 h-24 animate-bounce"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-overall-gradient">
      {/* Vertical and Horizontal Glowing Lines */}
      <div className="absolute w-0.5 h-full bg-gradient-to-b from-blue-500 via-green-400 to-purple-500 animate-gradient-vertical left-1/3"></div>
      <div className="absolute w-0.5 h-full bg-gradient-to-b from-blue-500 via-green-400 to-purple-500 animate-gradient-vertical left-2/3"></div>
      <div className="absolute h-0.5 w-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-gradient-horizontal top-1/3"></div>
      <div className="absolute h-0.5 w-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-gradient-horizontal top-2/3"></div>

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
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Kanav Sharma
                </motion.h1>
                <motion.p
                  className="text-2xl mt-2 font-medium text-cyan-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
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

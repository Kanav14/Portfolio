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
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Vertical Glowing Gradient Lines */}
      <motion.div
        className="absolute left-1/3 top-0 h-full w-2"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(180deg, cyan, magenta, purple, yellow, cyan)",
          backgroundSize: "200% 200%",
          filter: "blur(2px)",
        }}
      />
      <motion.div
        className="absolute left-2/3 top-0 h-full w-2"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(180deg, cyan, magenta, purple, yellow, cyan)",
          backgroundSize: "200% 200%",
          filter: "blur(2px)",
        }}
      />

      {/* Horizontal Glowing Gradient Lines */}
      <motion.div
        className="absolute top-1/3 left-0 w-full h-2"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, cyan, magenta, purple, yellow, cyan)",
          backgroundSize: "200% 200%",
          filter: "blur(2px)",
        }}
      />
      <motion.div
        className="absolute top-2/3 left-0 w-full h-2"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, cyan, magenta, purple, yellow, cyan)",
          backgroundSize: "200% 200%",
          filter: "blur(2px)",
        }}
      />

      {/* Grid Sections */}
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex justify-center items-center text-white cursor-pointer hover:bg-white/10 transition-transform duration-300"
            onClick={() => handleClick(section)}
          >
            {section.isHighlight ? (
              <p className="text-3xl font-bold animate-typewriter">
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

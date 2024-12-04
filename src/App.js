import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [showHelloWorld, setShowHelloWorld] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelloWorld(false);
    }, 4000); // 4 seconds delay
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

  return (
    <div className="relative w-full h-screen bg-overall-gradient">
      {/* Initial "Hello World" Screen */}
      {showHelloWorld && (
        <div className="flex h-full">
          {/* Left part: Black background */}
          <div className="flex-1 bg-black flex justify-center items-center">
            <motion.h1
              className="text-white text-8xl font-extrabold animate-hanging"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            >
              Hello World!
            </motion.h1>
          </div>

          {/* Right part: White background with GIF */}
          <div className="flex-1 bg-white flex justify-center items-center">
            <motion.img
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1sbzZyM3FjbTF5ZXpmMXlscG9oMnQ3bWVycDBkZnY3amEwOHI1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WtTnAfZn6aVJfBzlN3/giphy.gif"
              alt="Cloud with rain"
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      {!showHelloWorld && (
        <div className="relative w-full h-screen">
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
                    ? "bg-radial-highlight text-white"
                    : "bg-transparent text-black"
                } flex justify-center items-center cursor-pointer hover:bg-white/10 transition-transform duration-300`}
                onClick={() => handleClick(section)}
              >
                {section.isHighlight ? (
                  <div className="text-center">
                    <motion.h1
                      className="text-5xl font-extrabold"
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
      )}
    </div>
  );
}

export default App;

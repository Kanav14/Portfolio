import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [showHelloWorld, setShowHelloWorld] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelloWorld(false);
    }, 4000); // 4 seconds delay for "Hello World" screen
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 1, text: "About Me", delay: 0.1 },
    { id: 2, text: "Projects", delay: 0.2 },
    { id: 3, text: "Experience", delay: 0.3 },
    { id: 4, text: "Education", delay: 0.4 },
    { id: 5, isHighlight: true, delay: 0.5 }, // Highlighted section
    { id: 6, text: "Certifications", delay: 0.6 },
    { id: 7, text: "Skills and Knowledge Base", delay: 0.7 },
    { id: 8, text: "Extra Curricular", delay: 0.8 },
    { id: 9, text: "Research and Patents", delay: 0.9 },
  ];

  const handleClick = (section) => {
    if (!section.isHighlight) {
      alert(`You clicked on ${section.text} section`);
    }
  };

  return (
    <div className="relative w-full h-screen bg-overall-gradient">
      {/* Initial "Hello World" Screen */}
      {showHelloWorld ? (
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

          {/* Right part: White background with the fixed GIF */}
          <div className="flex-1 bg-[#efefef] flex justify-center items-center relative">
            <img
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1sbzZyM3FjbTF5ZXpmMXlscG9oMnQ3bWVycDBkZnY3amEwOHI1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WtTnAfZn6aVJfBzlN3/giphy.gif"
              alt="Cloud with rain"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto max-w-full"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>
      ) : (
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
                    ? "bg-black text-white"
                    : "bg-transparent text-black"
                } flex justify-center items-center cursor-pointer hover:bg-white/10 transition-transform duration-300 relative animate-fade-in-up`}
                style={{ animationDelay: `${section.delay}s` }}
                onClick={() => handleClick(section)}
              >
                {section.isHighlight ? (
                  <div className="text-center relative">
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

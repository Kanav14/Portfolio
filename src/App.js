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

          {/* Right part: White background with the loader */}
          <div className="flex-1 bg-[#efefef] flex justify-center items-center relative">
            <main className="flex justify-center items-center">
              <svg className="ip w-64 h-32" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#5ebd3e" />
                    <stop offset="33%" stopColor="#ffb900" />
                    <stop offset="67%" stopColor="#f78200" />
                    <stop offset="100%" stopColor="#e23838" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor="#e23838" />
                    <stop offset="33%" stopColor="#973999" />
                    <stop offset="67%" stopColor="#009cdf" />
                    <stop offset="100%" stopColor="#5ebd3e" />
                  </linearGradient>
                </defs>
                <g fill="none" strokeLinecap="round" strokeWidth="16">
                  <g className="ip__track" stroke="#ddd">
                    <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                    <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
                  </g>
                  <g strokeDasharray="180 656">
                    <path className="ip__worm1" stroke="url(#grad1)" strokeDashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                    <path className="ip__worm2" stroke="url(#grad2)" strokeDashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
                  </g>
                </g>
              </svg>
            </main>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-screen overflow-hidden">
          {/* Existing code for main page */}
          <img
            src="https://github.com/Kanav14/Portfolio/blob/main/vecteezy_neon-frame-motion-infinite-seamless-background_49097691-ezgif.com-resize.gif?raw=true"
            alt="Background Neon Light"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none"
          />

          <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`relative m-2 ${
                  section.isHighlight
                    ? "bg-black text-white shadow-highlight border border-cyan-400"
                    : "bg-white text-black border border-gray-200 rounded-lg shadow-md"
                } flex justify-center items-center cursor-pointer hover:shadow-lg transition-transform duration-300`}
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

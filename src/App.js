import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AboutMe from './AboutMe';  // Import the AboutMe component

function App() {
  const [showHelloWorld, setShowHelloWorld] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelloWorld(false);
    }, 4000); // 4 seconds delay for "Hello World" screen
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 1, text: "About Me", path: "/about" },
    { id: 2, text: "Projects", path: "/projects" },
    { id: 3, text: "Experience", path: "/experience" },
    { id: 4, text: "Education", path: "/education" },
    { id: 5, isHighlight: true }, // Highlighted section
    { id: 6, text: "Certifications", path: "/certifications" },
    { id: 7, text: "Skills and Knowledge Base", path: "/skills" },
    { id: 8, text: "Extra Curricular", path: "/extracurricular" },
    { id: 9, text: "Research and Patents", path: "/research" },
  ];

  // Placeholder Components for sections not yet developed
  const PlaceholderComponent = ({ title }) => (
    <div className="relative w-full h-screen bg-overall-gradient flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl text-white mb-4">{title} Page</h1>
        <p className="text-xl text-cyan-400">Coming Soon</p>
      </motion.div>
    </div>
  );

  return (
    <Router>
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
          <div className="relative w-full h-screen overflow-hidden">
            <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
              {sections.map((section) => (
                <Link 
                  key={section.id}
                  to={section.path || "/"} 
                  className={`relative m-2 ${
                    section.isHighlight
                      ? "bg-black text-white shadow-highlight border border-cyan-400"
                      : "bg-white text-black border border-gray-200 rounded-lg shadow-md"
                  } flex justify-center items-center cursor-pointer hover:shadow-lg transition-transform duration-300`}
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
                </Link>
              ))}
            </div>

            {/* Routes for different sections */}
            <Routes>
              <Route path="/about" element={<AboutMe />} />
              <Route path="/projects" element={<PlaceholderComponent title="Projects" />} />
              <Route path="/experience" element={<PlaceholderComponent title="Experience" />} />
              <Route path="/education" element={<PlaceholderComponent title="Education" />} />
              <Route path="/certifications" element={<PlaceholderComponent title="Certifications" />} />
              <Route path="/skills" element={<PlaceholderComponent title="Skills" />} />
              <Route path="/extracurricular" element={<PlaceholderComponent title="Extra Curricular" />} />
              <Route path="/research" element={<PlaceholderComponent title="Research" />} />
              <Route path="/" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

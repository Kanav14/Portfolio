import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, GitBranch, Server, Cloud, Docker } from 'lucide-react';
import AboutMe from "./AboutMe";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import ResearchAndPatents from "./ResearchAndPatents";
import SkillsAndKnowledge from "./SkillsAndKnowledge";
import ExtraCurricular from "./ExtraCurricular";

// DevOps Pipeline Animation Component
const DevOpsAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ x: "-100%", y: "50%" }}
        animate={{ x: "100%", y: "50%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute flex items-center space-x-4"
      >
        <Github className="w-6 h-6 text-cyan-400" />
        <GitBranch className="w-6 h-6 text-cyan-400" />
        <Docker className="w-6 h-6 text-cyan-400" />
        <Server className="w-6 h-6 text-cyan-400" />
        <Cloud className="w-6 h-6 text-cyan-400" />
      </motion.div>
    </div>
  );
};

function App() {
  const [showHelloWorld, setShowHelloWorld] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Sections Data with enhanced styling and icons
  const sections = [
    { id: 1, text: "About Me", icon: "👨‍💻" },
    { id: 2, text: "Experience", icon: "🚀" },
    { id: 3, text: "Education", icon: "🎓" },
    { id: 4, text: "Projects", icon: "🛠️" },
    { id: 5, isHighlight: true },
    { id: 6, text: "Certifications", icon: "📜" },
    { id: 7, text: "Skills and Knowledge Base", icon: "🧠" },
    { id: 8, text: "Extra Curricular", icon: "🎯" },
    { id: 9, text: "Research and Patents", icon: "🔬" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowHelloWorld(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (section) => {
    if (!section.isHighlight) {
      setActiveSection(section);
      const index = sections.findIndex(s => s.text === section.text);
      setCurrentSectionIndex(index);
    }
  };

  const closeModal = () => setActiveSection(null);

  const goToNext = () => {
    const nextIndex = (currentSectionIndex + 1) % sections.length;
    const nextSection = sections.find((_, index) => index === nextIndex);
    
    if (nextSection.isHighlight) {
      const afterHighlightIndex = (nextIndex + 1) % sections.length;
      setActiveSection(sections[afterHighlightIndex]);
      setCurrentSectionIndex(afterHighlightIndex);
    } else {
      setActiveSection(nextSection);
      setCurrentSectionIndex(nextIndex);
    }
  };

  const goToPrevious = () => {
    const prevIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
    const prevSection = sections.find((_, index) => index === prevIndex);
    
    if (prevSection.isHighlight) {
      const beforeHighlightIndex = (prevIndex - 1 + sections.length) % sections.length;
      setActiveSection(sections[beforeHighlightIndex]);
      setCurrentSectionIndex(beforeHighlightIndex);
    } else {
      setActiveSection(prevSection);
      setCurrentSectionIndex(prevIndex);
    }
  };

  const renderHelloWorld = () => (
    <div className="flex h-full">
      <div className="flex-1 bg-black flex justify-center items-center relative overflow-hidden">
        <motion.h1
          className="text-white text-8xl font-extrabold z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello World!
        </motion.h1>
        
        {/* Animated code lines background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400 font-mono text-sm"
              initial={{ opacity: 0, x: -100 }}
              animate={{ 
                opacity: [0, 1, 0],
                x: ["0%", "100%"]
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "loop"
              }}
              style={{
                top: `${(i * 5)}%`,
                left: `-20%`
              }}
            >
              {`const devops = new Pipeline();`}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="flex-1 bg-[#efefef] flex justify-center items-center relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src="/api/placeholder/400/400"
            alt="Developer"
            className="rounded-full border-4 border-cyan-400"
          />
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
            animate={{ y: [-5, 5] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <span className="bg-cyan-400 text-black px-4 py-2 rounded-full font-bold">
              DevOps Engineer
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  const renderSectionsGrid = () => (
    <div className="grid grid-cols-3 grid-rows-3 w-full h-full relative">
      <DevOpsAnimation />
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className={`relative m-2 ${
            section.isHighlight
              ? "bg-black text-white shadow-highlight border border-cyan-400"
              : "bg-white text-black border border-gray-200 rounded-lg shadow-md"
          } flex justify-center items-center cursor-pointer hover:shadow-lg transition-transform duration-300`}
          onClick={() => handleClick(section)}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {section.isHighlight ? (
            <div className="text-center">
              <motion.h1
                className="text-5xl font-extrabold"
                animate={{ 
                  color: ['#36cfc1', '#ffffff', '#36cfc1']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Kanav Sharma
              </motion.h1>
              <motion.p
                className="text-2xl mt-2 font-medium text-cyan-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                DevOps Engineer
              </motion.p>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-3xl mb-2">{section.icon}</div>
              <p className="text-2xl font-bold text-gray-800 hover:text-cyan-400 transition-colors duration-300">
                {section.text}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderModal = () =>
    activeSection && (
      <AnimatePresence>
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={closeModal}
            >
              ×
            </button>
            {/* Modal content components */}
            {activeSection.text === "About Me" && (
              <AboutMe closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
            )}
            {/* Add similar conditions for other sections */}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );

  return (
    <div className="relative w-full h-screen bg-overall-gradient">
      {showHelloWorld ? renderHelloWorld() : (
        <div className="relative w-full h-screen overflow-hidden">
          {renderSectionsGrid()}
          {renderModal()}
        </div>
      )}
    </div>
  );
}

export default App;

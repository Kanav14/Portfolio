import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Github, Linkedin, Mail } from "lucide-react";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import ResearchAndPatents from "./ResearchAndPatents";
import SkillsAndKnowledge from "./SkillsAndKnowledge";
import ExtraCurricular from "./ExtraCurricular";

function App() {
  const [showHelloWorld, setShowHelloWorld] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Sections Data with icons and animations
  const sections = [
    { id: 1, text: "About Me", icon: "👨‍💻" },
    { id: 2, text: "Experience", icon: "💼" },
    { id: 3, text: "Education", icon: "🎓" },
    { id: 4, text: "Projects", icon: "🚀" },
    { id: 5, isHighlight: true },
    { id: 6, text: "Certifications", icon: "📜" },
    { id: 7, text: "Skills and Knowledge Base", icon: "🛠" },
    { id: 8, text: "Extra Curricular", icon: "🎯" },
    { id: 9, text: "Research and Patents", icon: "📚" },
  ];

  // Hide "Hello World" after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHelloWorld(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Handle section click with animation
  const handleClick = (section) => {
    if (!section.isHighlight) {
      setActiveSection(section);
      const index = sections.findIndex(s => s.text === section.text);
      setCurrentSectionIndex(index);
    }
  };

  // Navigation functions
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

  // Enhanced Hello World screen with animations
  const renderHelloWorld = () => (
    <AnimatePresence>
      <motion.div 
        className="flex h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex-1 bg-black flex justify-center items-center">
          <motion.h1
            className="text-white text-4xl md:text-8xl font-extrabold"
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: [0, 10, 0],
              opacity: 1,
            }}
            transition={{ 
              y: { duration: 2, ease: "easeInOut", repeat: Infinity },
              opacity: { duration: 0.5 }
            }}
          >
            Hello World!
          </motion.h1>
        </div>
        <div className="flex-1 bg-[#efefef] flex justify-center items-center relative">
          <motion.img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1sbzZyM3FjbTF5ZXpmMXlscG9oMnQ3bWVycDBkZnY3amEwOHI1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WtTnAfZn6aVJfBzlN3/giphy.gif"
            alt="Cloud with rain"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto max-w-full"
            style={{ pointerEvents: "none" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );

  // Enhanced sections grid with animations
  const renderSectionsGrid = () => (
    <motion.div 
      className="grid grid-cols-3 grid-rows-3 w-full h-full gap-2 p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className={`relative ${
            section.isHighlight
              ? "bg-black text-white shadow-highlight border border-cyan-400"
              : "bg-white text-black border border-gray-200 rounded-lg shadow-md"
          } flex justify-center items-center cursor-pointer hover:shadow-lg`}
          onClick={() => handleClick(section)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {section.isHighlight ? (
            <div className="text-center p-2">
              <motion.h1
                className="text-2xl md:text-5xl font-extrabold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Kanav Sharma
              </motion.h1>
              <motion.p
                className="text-base md:text-2xl mt-1 font-medium text-cyan-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              >
                DevOps Engineer
              </motion.p>
              <motion.div 
                className="flex justify-center gap-4 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Github className="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors duration-300" />
                <Linkedin className="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors duration-300" />
                <Mail className="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors duration-300" />
              </motion.div>
            </div>
          ) : (
            <div className="text-center p-4">
              <div className="text-2xl mb-2">{section.icon}</div>
              <p className="text-sm md:text-2xl font-bold text-center px-2 text-gray-800 hover:text-cyan-400 transition-colors duration-300">
                {section.text}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );

  // Enhanced modal with animations
  const renderModal = () =>
    activeSection && (
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <motion.div
          className="modal-content bg-gray-800 p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <button
            className="modal-close-btn"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="flex items-center justify-between mb-4">
            <ChevronLeft 
              className="w-6 h-6 cursor-pointer hover:text-cyan-400 transition-colors duration-300"
              onClick={goToPrevious}
            />
            <h2 className="text-2xl font-bold text-cyan-400">{activeSection.text}</h2>
            <ChevronRight 
              className="w-6 h-6 cursor-pointer hover:text-cyan-400 transition-colors duration-300"
              onClick={goToNext}
            />
          </div>
          {activeSection.text === "About Me" ? (
            <AboutMe closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
          ) : activeSection.text === "Projects" ? (
            <Project closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
          ) : activeSection.text === "Experience" ? (
            <Experience closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
          ) : activeSection.text === "Education" ? (
            <Education closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
          ) : activeSection.text === "Certifications" ? (
            <Certifications closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
          ) : activeSection.text === "Skills and Knowledge Base" ? (
            <SkillsAndKnowledge closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
          ) : activeSection.text === "Extra Curricular" ? (
            <ExtraCurricular closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
          ) : activeSection.text === "Research and Patents" ? (
            <ResearchAndPatents closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
          ) : (
            <h2 className="text-xl font-bold text-white">
              Content for {activeSection.text} coming soon!
            </h2>
          )}
        </motion.div>
      </motion.div>
    );

  return (
    <div className="relative w-full h-screen bg-overall-gradient">
      <AnimatePresence mode="wait">
        {showHelloWorld ? renderHelloWorld() : (
          <div className="relative w-full h-screen overflow-hidden">
            {renderSectionsGrid()}
            {renderModal()}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

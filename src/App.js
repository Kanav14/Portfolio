import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Github, Linkedin, Mail } from 'lucide-react';
import AboutMe from "./AboutMe";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import ResearchAndPatents from "./ResearchAndPatents";
import SkillsAndKnowledge from "./SkillsAndKnowledge";
import ExtraCurricular from "./ExtraCurricular";

const EnhancedPortfolio = () => {
  const [showHelloWorld, setShowHelloWorld] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const sections = [
    { id: 1, text: "About Me", icon: "👨‍💻" },
    { id: 2, text: "Experience", icon: "💼" },
    { id: 3, text: "Education", icon: "🎓" },
    { id: 4, text: "Projects", icon: "🚀" },
    { id: 5, isHighlight: true },
    { id: 6, text: "Certifications", icon: "📜" },
    { id: 7, text: "Skills and Knowledge Base", icon: "🛠" },
    { id: 8, text: "Extra Curricular", icon: "🎯" },
    { id: 9, text: "Research and Patents", icon: "📚" }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const renderModal = () =>
    activeSection && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-white text-xl hover:text-cyan-400"
            onClick={closeModal}
          >
            &times;
          </button>
          {activeSection.text === "About Me" ? (
            <AboutMe 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : activeSection.text === "Projects" ? (
            <Project 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : activeSection.text === "Experience" ? (
            <Experience 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : activeSection.text === "Education" ? (
            <Education 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : activeSection.text === "Certifications" ? (
            <Certifications 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : activeSection.text === "Skills and Knowledge Base" ? (
            <SkillsAndKnowledge 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : activeSection.text === "Extra Curricular" ? (
            <ExtraCurricular 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : activeSection.text === "Research and Patents" ? (
            <ResearchAndPatents 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : (
            <h2 className="text-xl font-bold text-white">
              Content for {activeSection.text} coming soon!
            </h2>
          )}
        </motion.div>
      </motion.div>
    );

  return (
    <div className="w-full h-screen">
      <AnimatePresence mode="wait">
        {showHelloWorld ? (
          <motion.div
            key="hello"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full flex"
          >
            <div className="flex-1 bg-black flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  Hello World!
                </h1>
              </motion.div>
            </div>
            <div className="flex-1 bg-[#efefef] flex items-center justify-center">
              <motion.div
                className="relative w-3/4 h-auto flex items-center justify-center"
              >
                <motion.img
                  src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1sbzZyM3FjbTF5ZXpmMXlscG9oMnQ3bWVycDBkZnY3amEwOHI1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WtTnAfZn6aVJfBzlN3/giphy.gif"
                  alt="Cloud with rain"
                  className="w-full h-auto"
                  style={{ pointerEvents: "none" }}
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full h-full"
          >
            <div className="grid grid-cols-3 grid-rows-3 w-full h-full gap-2 p-2">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleClick(section)}
                  className={`
                    relative flex justify-center items-center cursor-pointer
                    ${section.isHighlight 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg' 
                      : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'}
                    rounded-lg transition-all duration-300 ease-in-out
                  `}
                >
                  {section.isHighlight ? (
                    <div className="text-center">
                      <motion.h1 
                        className="text-4xl font-bold mb-2 text-white"
                        animate={{
                          backgroundPosition: ['0%', '100%'],
                          transition: { duration: 3, repeat: Infinity }
                        }}
                      >
                        Kanav Sharma
                      </motion.h1>
                      <p className="text-xl text-cyan-200">DevOps Engineer</p>
                      <div className="flex justify-center gap-4 mt-4">
                        <Github className="w-6 h-6 text-white hover:text-cyan-200 cursor-pointer" />
                        <Linkedin className="w-6 h-6 text-white hover:text-cyan-200 cursor-pointer" />
                        <Mail className="w-6 h-6 text-white hover:text-cyan-200 cursor-pointer" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-3xl mb-2 text-cyan-400">{section.icon}</div>
                      <h2 className="text-lg font-semibold text-white">{section.text}</h2>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <AnimatePresence>
              {renderModal()}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedPortfolio;

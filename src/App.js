import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Github, Linkedin, Mail, Terminal, Cloud, Server, Database, Sun, Moon } from 'lucide-react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import * as Tooltip from '@radix-ui/react-tooltip';
import Switch from 'react-switch';
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
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const devopsQuotes = [
    {
      text: "Infrastructure as code: Because clicking buttons is so 2010.",
      icon: <Cloud className="w-8 h-8 text-cyan-400" />
    },
    {
      text: "In DevOps, we don't fix problems. We prevent them from happening.",
      icon: <Server className="w-8 h-8 text-cyan-400" />
    },
    {
      text: "Automate once, deploy anywhere.",
      icon: <Terminal className="w-8 h-8 text-cyan-400" />
    },
    {
      text: "CI/CD: Making deployments as smooth as butter.",
      icon: <Database className="w-8 h-8 text-cyan-400" />
    }
  ];

  const sections = [
    { id: 1, text: "About Me", icon: "👨‍💻" },
    { id: 2, text: "Experience", icon: "💼" },
    { id: 3, text: "Education", icon: "🎓" },
    { id: 4, text: "Projects", icon: "🚀" },
    { id: 5, text: "Kanav Sharma", isHighlight: true, subtitle: "DevOps Engineer" },
    { id: 6, text: "Certifications", icon: "📜" },
    { id: 7, text: "Skills and Knowledge Base", icon: "🛠" },
    { id: 8, text: "Extra Curricular", icon: "🎯" },
    { id: 9, text: "Research and Patents", icon: "📚" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowHelloWorld(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % devopsQuotes.length);
    }, 5000);
    return () => clearInterval(quoteTimer);
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
    const nextSection = sections[nextIndex];
    
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
    const prevSection = sections[prevIndex];
    
    if (prevSection.isHighlight) {
      const beforeHighlightIndex = (prevIndex - 1 + sections.length) % sections.length;
      setActiveSection(sections[beforeHighlightIndex]);
      setCurrentSectionIndex(beforeHighlightIndex);
    } else {
      setActiveSection(prevSection);
      setCurrentSectionIndex(prevIndex);
    }
  };

  const renderModal = () =>
    activeSection && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-white text-xl hover:text-cyan-400"
            onClick={closeModal}
          >
            &times;
          </button>
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
            <h2 className="text-2xl font-bold text-white">
              Content for {activeSection.text} coming soon!
            </h2>
          )}
          
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    );

  const renderHelloWorld = () => (
    <motion.div
      key="hello"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex"
    >
      <div className="flex-1 bg-black flex justify-center items-center">
        <motion.h1
          className="text-4xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
          animate={{
            y: [0, -20, 0],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          Hello World!
        </motion.h1>
      </div>
      <div className="flex-1 bg-[#efefef] flex justify-center items-center">
        <motion.img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1sbzZyM3FjbTF5ZXpmMXlscG9oMnQ3bWVycDBkZnY3amEwOHI1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WtTnAfZn6aVJfBzlN3/giphy.gif"
          alt="Cloud with rain"
          className="w-3/4 h-auto max-w-full"
          style={{ pointerEvents: "none" }}
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 2, repeat: Infinity }
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {showHelloWorld ? (
          renderHelloWorld()
        ) : (
          <div className="h-screen flex flex-col">
            {/* Grid Section - 75% height */}
            <div className="h-[75%]">
              <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 h-full">
                {sections.map((section) => (
                  <motion.div
                    key={section.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleClick(section)}
                    className={`
                      relative flex items-center justify-center cursor-pointer
                      ${section.isHighlight 
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 col-span-3' 
                        : 'bg-gray-800 hover:bg-gray-700'}
                      rounded-xl shadow-lg
                    `}
                  >
                    {section.isHighlight ? (
                      <div className="text-center p-4">
                        <motion.h1 
                          className="text-4xl font-bold mb-2"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1 }}
                        >
                          {section.text}
                        </motion.h1>
                        <motion.p
                          className="text-xl text-cyan-200"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, delay: 0.3 }}
                        >
                          {section.subtitle}
                        </motion.p>
                        <div className="flex justify-center gap-4 mt-4">
                          <Github className="w-6 h-6 hover:text-cyan-300 cursor-pointer" />
                          <Linkedin className="w-6 h-6 hover:text-cyan-300 cursor-pointer" />
                          <Mail className="w-6 h-6 hover:text-cyan-300 cursor-pointer" />
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-4">
                        <div className="text-3xl mb-2">{section.icon}</div>
                        <h2 className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                          {section.text}
                        </h2>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote Section - 25% height */}
            <div className="h-[25%] flex items-center justify-center p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuoteIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-gray-800 rounded-xl p-6 max-w-3xl w-full"
                >
                  <div className="flex items-center justify-center gap-4">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        transition: { duration: 20, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      {devopsQuotes[currentQuoteIndex].icon}
                    </motion.div>
                    <p className="text-xl font-bold text-cyan-400">
                      {devopsQuotes[currentQuoteIndex].text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {renderModal()}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedPortfolio;

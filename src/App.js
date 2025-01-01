import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Github, Linkedin, Mail, Terminal, Cloud, Server, Database, Sun, Moon } from 'lucide-react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import Switch from 'react-switch';
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
    { id: 1, text: "About Me" },
    { id: 2, text: "Experience" },
    { id: 3, text: "Education" },
    { id: 4, text: "Projects" },
    { id: 5, isHighlight: true },
    { id: 6, text: "Certifications" },
    { id: 7, text: "Skills and Knowledge Base" },
    { id: 8, text: "Extra Curricular" },
    { id: 9, text: "Research and Patents" }
  ];

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

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

  const renderHelloWorld = () => (
    <div className="flex h-full">
      <div className="flex-1 bg-black flex justify-center items-center">
        <motion.h1
          className="text-white text-4xl md:text-8xl font-extrabold animate-hanging"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        >
          Hello World!
        </motion.h1>
      </div>
      <div className="flex-1 bg-[#efefef] flex justify-center items-center relative">
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1sbzZyM3FjbTF5ZXpmMXlscG9oMnQ3bWVycDBkZnY3amEwOHI1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WtTnAfZn6aVJfBzlN3/giphy.gif"
          alt="Cloud with rain"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto max-w-full"
          style={{ pointerEvents: "none" }}
        />
      </div>
    </div>
  );

  const renderSectionsGrid = () => (
    <div className="grid grid-cols-3 grid-rows-3 w-full h-full gap-2 p-2">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`relative ${
            section.isHighlight
              ? "bg-black text-white shadow-highlight border border-cyan-400"
              : "bg-white text-black border border-gray-200 rounded-lg shadow-md"
          } flex justify-center items-center cursor-pointer hover:shadow-lg transition-transform duration-300`}
          onClick={() => handleClick(section)}
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
            <p className="text-sm md:text-2xl font-bold text-center px-2 text-gray-800 hover:text-cyan-400 transition-colors duration-300">
              {section.text}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  const renderQuoteSection = () => (
    <div className="h-[25%] flex items-center justify-center px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuoteIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-gray-800 rounded-xl p-6 max-w-3xl w-full shadow-lg"
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
  );

  const renderModal = () =>
    activeSection && (
      <div
        className="modal-overlay"
        onClick={closeModal}
      >
        <div
          className="modal-content bg-gray-800 p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modal-close-btn"
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
        </div>
      </div>
    );

  return (
    <div className="relative w-full h-screen bg-overall-gradient">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: { enable: true, speed: 2 }
          }
        }}
        className="absolute inset-0"
      />

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <Switch
          checked={isDarkTheme}
          onChange={() => setIsDarkTheme(!isDarkTheme)}
          onColor="#86d3ff"
          offColor="#1a1a1a"
          uncheckedIcon={<Sun className="w-4 h-4 text-yellow-400 m-1" />}
          checkedIcon={<Moon className="w-4 h-4 text-white m-1" />}
          className="react-switch"
        />
      </div>

      <div className="relative w-full h-screen overflow-hidden z-10">
        {showHelloWorld ? (
          renderHelloWorld()
        ) : (
          <div className="h-full flex flex-col">
            {renderSectionsGrid()}
            {renderQuoteSection()}
            {renderModal()}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

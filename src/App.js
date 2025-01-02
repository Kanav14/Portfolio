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
    { id: 1, text: "About Me", icon: "🔒" },
    { id: 2, text: "Experience", icon: "💼" },
    { id: 3, text: "Education", icon: "🎓" },
    { id: 4, text: "Projects", icon: "🚀" },
    { id: 5, text: "Kanav Sharma", isHighlight: true, subtitle: "DevOps Engineer" },
    { id: 6, text: "Certifications", icon: "📜" },
    { id: 7, text: "Skills and Knowledge Base", icon: "🔧" },
    { id: 8, text: "Extra Curricular", icon: "🎯" },
    { id: 9, text: "Research and Patents", icon: "📚" }
  ];

  // Theme toggling effect
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
    document.body.style.backgroundColor = isDarkTheme ? '#030306' : '#ffffff';
  }, [isDarkTheme]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: { 
        value: 80,
        density: { enable: true, value_area: 800 } 
      },
      color: { 
        value: isDarkTheme ? "#ffffff" : "#000000"
      },
      opacity: { 
        value: isDarkTheme ? 0.3 : 0.15
      },
      size: { value: 2 },
      line_linked: {
        enable: true,
        distance: 150,
        color: isDarkTheme ? "#ffffff" : "#000000",
        opacity: isDarkTheme ? 0.3 : 0.15,
        width: 1.5
      },
      move: { 
        enable: true, 
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    }
  };

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
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className={`${isDarkTheme ? 'bg-[#1e2736]' : 'bg-white'} p-6 rounded-xl shadow-lg relative max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:max-w-5xl`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-xl"
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
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="p-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="p-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    );

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-[#030306]' : 'bg-white'}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 z-0"
      />

      <div className="absolute top-4 right-4 z-50">
        <Switch
          checked={isDarkTheme}
          onChange={setIsDarkTheme}
          onColor="#86d3ff"
          offColor="#1a1a1a"
          uncheckedIcon={
            <div className="flex items-center justify-center h-full">
              <Sun className="w-4 h-4 text-yellow-400" />
            </div>
          }
          checkedIcon={
            <div className="flex items-center justify-center h-full">
              <Moon className="w-4 h-4 text-white" />
            </div>
          }
          className="react-switch"
        />
      </div>

      <div className="relative z-10">
        {showHelloWorld ? (
          <div className="flex h-screen">
            <div className="flex-1 bg-transparent flex justify-center items-center relative">
              <div className="text-center">
                <motion.h1
                  className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Hello
                </motion.h1>
                <motion.h1
                  className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  World
                </motion.h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen flex flex-col">
            <div className="grid grid-cols-3 auto-rows-fr gap-4 h-[75vh] p-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  onClick={() => handleClick(section)}
                  className={`
                    relative rounded-xl cursor-pointer transition-all duration-300
                    ${section.isHighlight
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                      : isDarkTheme 
                        ? 'bg-[#1e2736] hover:bg-[#2a3545]'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }
                    flex items-center justify-center overflow-hidden
                  `}
                >
                  {section.isHighlight ? (
                    <div className="text-center">
                      <motion.h1
                        className="text-3xl font-bold text-white mb-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {section.text}
                      </motion.h1>
                      <motion.p
                        className="text-xl text-white/80 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {section.subtitle}
                      </motion.p>
                      <div className="flex justify-center gap-4 mt-3">
                        <Github className="w-6 h-6 text-white hover:text-cyan-200 cursor-pointer" />
                        <Linkedin className="w-6 h-6 text-white hover:text-cyan-200 cursor-pointer" />
                        <Mail className="w-6 h-6 text-white hover:text-cyan-200 cursor-pointer" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-4">
                      <div className="text-3xl mb-3">{section.icon}</div>
                      <p className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>
                        {section.text}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="h-[25vh] flex items-center justify-center px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuoteIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`${isDarkTheme ? 'bg-[#1e2736]' : 'bg-gray-100'} rounded-xl p-6 max-w-3xl w-full`}
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
                    <p className="text-xl font-semibold text-cyan-400">
                      {devopsQuotes[currentQuotes[currentQuoteIndex].text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        <AnimatePresence>
          {renderModal()}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;

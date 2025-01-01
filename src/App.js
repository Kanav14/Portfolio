// App.js
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
    { id: 1, text: "About Me", icon: "👨‍💻", tooltip: "Learn more about me" },
    { id: 2, text: "Experience", icon: "💼", tooltip: "My professional journey" },
    { id: 3, text: "Education", icon: "🎓", tooltip: "Academic background" },
    { id: 4, text: "Projects", icon: "🚀", tooltip: "View my projects" },
    { id: 5, text: "Kanav Sharma", isHighlight: true, subtitle: "DevOps Engineer" },
    { id: 6, text: "Certifications", icon: "📜", tooltip: "Professional certifications" },
    { id: 7, text: "Skills and Knowledge Base", icon: "🛠", tooltip: "Technical expertise" },
    { id: 8, text: "Extra Curricular", icon: "🎯", tooltip: "Beyond work activities" },
    { id: 9, text: "Research and Patents", icon: "📚", tooltip: "Research work" }
  ];

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: isDarkTheme ? "#ffffff" : "#000000"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: isDarkTheme ? "#ffffff" : "#000000",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    },
    retina_detect: true
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

  const renderModal = () =>
    activeSection && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 ${isDarkTheme ? 'bg-black' : 'bg-white'} bg-opacity-50 flex justify-center items-center z-50`}
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:max-w-5xl`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={`absolute top-3 right-3 ${isDarkTheme ? 'text-white' : 'text-black'} text-xl hover:text-cyan-400`}
            onClick={closeModal}
          >
            &times;
          </button>
          {activeSection.text === "About Me" && (
            <AboutMe 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          )}
        </motion.div>
      </motion.div>
    );

  const themeStyles = isDarkTheme ? {
    background: 'from-gray-900 to-black',
    text: 'text-white',
    cardBg: 'bg-gray-800'
  } : {
    background: 'from-gray-100 to-white',
    text: 'text-gray-900',
    cardBg: 'bg-white'
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeStyles.background} ${themeStyles.text} overflow-hidden relative`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
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

      <AnimatePresence mode="wait">
        {showHelloWorld ? (
          <motion.div
            key="hello"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex flex-col md:flex-row relative z-10"
          >
            <div className={`flex-1 ${isDarkTheme ? 'bg-black' : 'bg-white'} flex items-center justify-center p-4 md:p-0`}>
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                <h1 className="text-4xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-center">
                  Hello World!
                </h1>
              </motion.div>
            </div>
            <div className="flex-1 bg-[#efefef] flex items-center justify-center p-8">
              <motion.img
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1sbzZyM3FjbTF5ZXpmMXlscG9oMnQ3bWVycDBkZnY3amEwOHI1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WtTnAfZn6aVJfBzlN3/giphy.gif"
                alt="Cloud with rain"
                className="w-full h-auto object-contain max-w-md"
                style={{ pointerEvents: "none" }}
                animate={{
                  scale: [1, 1.05, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4 py-8 md:px-6 md:py-12 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {sections.map((section) => (
                <Tooltip.Provider key={section.id}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => !section.isHighlight && handleClick(section)}
                        className={`
                          p-4 md:p-6 rounded-xl cursor-pointer flex items-center justify-center
                          ${section.isHighlight 
                            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 col-span-1 md:col-span-2 lg:col-span-3' 
                            : `${themeStyles.cardBg} hover:shadow-lg`}
                          transition-all duration-300 ease-in-out h-40 md:h-52
                        `}
                      >
                        {section.isHighlight ? (
                          <div className="text-center">
                            <motion.h1 
                              className="text-3xl md:text-4xl font-bold mb-2 md:mb-3"
                              animate={{
                                backgroundPosition: ['0%', '100%'],
                                transition: { duration: 3, repeat: Infinity }
                              }}
                            >
                              {section.text}
                            </motion.h1>
                            <p className="text-lg md:text-xl text-cyan-200">{section.subtitle}</p>
                            <div className="flex justify-center gap-4 md:gap-6 mt-3 md:mt-4">
                              <Github className="w-6 h-6 md:w-7 md:h-7 hover:text-cyan-300 cursor-pointer" />
                              <Linkedin className="w-6 h-6 md:w-7 md:h-7 hover:text-cyan-300 cursor-pointer" />
                              <Mail className="w-6 h-6 md:w-7 md:h-7 hover:text-cyan-300 cursor-pointer" />
                            </div>
                          </div>
                        ) : (
                          <div className="text-center">
                            <div className="text-3xl md:text-4xl mb-2 md:mb-3">{section.icon}</div>
                            <h2 className="text-lg md:text-xl font-semibold">{section.text}</h2>
                          </div>
                        )}
                      </motion.div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white shadow-md"
                        sideOffset={5}
                      >
                        {section.tooltip}
                        <Tooltip.Arrow className="fill-gray-900" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              ))}
            </div>

            {/* Enhanced DevOps Quote Section */}
            <motion.div 
              className="mt-8 md:mt-16 mb-4 md:mb-8 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuoteIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`${themeStyles.cardBg} rounded-xl p-6 max-w-3xl mx-auto shadow-lg backdrop-blur-sm`}
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
                    <p className="text-xl md:text-2xl font-bold text-cyan-400">
                      {devopsQuotes[currentQuoteIndex].text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Geometric Patterns Background */}
            <div className="fixed inset-0 z-0 opacity-5">
              <div className="absolute top-0 left-0 w-24 h-24 bg-cyan-400 rounded-full blur-xl"></div>
              <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-blue-400 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-purple-400 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-pink-400 rounded-full blur-xl"></div>
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

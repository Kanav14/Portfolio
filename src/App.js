import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Cloud, 
  Server, 
  Database,
  Sun,
  Moon,
  Lock,
  Briefcase,
  GraduationCap,
  Rocket,
  Scroll,
  Wrench,
  Target,
  BookOpen
} from 'lucide-react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import Switch from 'react-switch';
import DevopsLanding from './DevopsLanding';
import AboutMe from "./AboutMe";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import ResearchAndPatents from "./ResearchAndPatents";
import SkillsAndKnowledge from "./SkillsAndKnowledge";
import ExtraCurricular from "./ExtraCurricular";

const getIcon = (text) => {
  switch(text) {
    case "About Me": return <Lock className="w-8 h-8" />;
    case "Experience": return <Briefcase className="w-8 h-8" />;
    case "Education": return <GraduationCap className="w-8 h-8" />;
    case "Projects": return <Rocket className="w-8 h-8" />;
    case "Certifications": return <Scroll className="w-8 h-8" />;
    case "Skills and Knowledge Base": return <Wrench className="w-8 h-8" />;
    case "Extra Curricular": return <Target className="w-8 h-8" />;
    case "Research and Patents": return <BookOpen className="w-8 h-8" />;
    default: return null;
  }
};

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

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
    document.body.style.backgroundColor = isDarkTheme ? '#030306' : '#ffffff';
  }, [isDarkTheme]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const baseParticlesConfig = {
    particles: {
      number: { 
        value: 40,
        density: { enable: true, value_area: 1200 }
      },
      color: { 
        value: isDarkTheme ? "#ffffff" : "#000000"
      },
      opacity: {
        value: isDarkTheme ? 0.15 : 0.08
      },
      size: { value: 1.5 },
      line_linked: {
        enable: true,
        distance: 150,
        color: isDarkTheme ? "#ffffff" : "#000000",
        opacity: isDarkTheme ? 0.15 : 0.08,
        width: 1
      },
      move: { 
        enable: true, 
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: false }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    }
  };

  const particlesConfig = {
    ...baseParticlesConfig,
    particles: {
      ...baseParticlesConfig.particles,
      number: {
        value: showHelloWorld ? 25 : 40,
        density: { enable: true, value_area: 1200 }
      },
      move: {
        ...baseParticlesConfig.particles.move,
        speed: showHelloWorld ? 1 : 1.5
      }
    }
  };

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
          className={`${isDarkTheme ? 'bg-[#1e2736]' : 'bg-white'} p-8 rounded-xl shadow-2xl relative max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:max-w-5xl modal-content`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors text-xl"
            onClick={closeModal}
          >
            ×
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
            <h2 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>
              Content for {activeSection.text} coming soon!
            </h2>
          )}
          
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    );

  const renderGrid = () => (
    <div className="grid grid-cols-3 auto-rows-fr gap-6 h-[75vh] p-6">
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          onClick={() => handleClick(section)}
          whileHover={{ 
            y: -5,
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          className={`
            relative rounded-xl cursor-pointer overflow-hidden
            ${section.isHighlight 
              ? 'bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600'
              : isDarkTheme
                ? 'bg-[#1a1f2e] hover:bg-[#232838]'
                : 'bg-white hover:bg-gray-50'
            }
            group transition-all duration-300 ease-in-out
            border border-transparent hover:border-cyan-500/30
            ${isDarkTheme ? 'shadow-lg shadow-cyan-500/5' : 'shadow-xl shadow-gray-200/50'}
          `}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          {section.isHighlight ? (
            <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="text-4xl font-bold text-white mb-3 gradient-text"
                >
                  {section.text}
                </motion.h1>
                <p className="text-xl text-cyan-200 mb-6">{section.subtitle}</p>
                <div className="flex justify-center gap-6">
                  <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
                    <Github className="w-6 h-6 text-white hover:text-cyan-200 transition-colors" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
                    <Linkedin className="w-6 h-6 text-white hover:text-cyan-200 transition-colors" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
                    <Mail className="w-6 h-6 text-white hover:text-cyan-200 transition-colors" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-6 relative">
              <motion.div
                className={`mb-4 ${isDarkTheme ? 'text-cyan-400' : 'text-cyan-600'}`}
                animate={{ 
                  y: [0, -5, 0],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                {getIcon(section.text)}
              </motion.div>
              <h3 className={`text-xl font-semibold text-center
                ${isDarkTheme ? 'text-white' : 'text-gray-800'}
                group-hover:text-cyan-400 transition-colors`}
              >
                {section.text}
              </h3>
              
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-[#030306]' : 'bg-white'} transition-colors duration-500 ease-in-out`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
      />

      <div className="absolute top-4 right-4 z-50 transition-opacity duration-300">
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

      <motion.div 
        className="relative z-10"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {showHelloWorld ? (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <DevopsLanding 
                onAnimationComplete={() => {
                  setShowHelloWorld(false);
                }} 
                isDarkTheme={isDarkTheme} 
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-screen flex flex-col"
            >
              {renderGrid()}

              <div className="h-[25vh] flex items-center justify-center px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuoteIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`${isDarkTheme ? 'bg-[#1a1f2e]' : 'bg-gray-100'} rounded-xl p-6 max-w-3xl w-full shadow-lg backdrop-blur-sm border border-cyan-500/20`}
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
                      <p className={`text-xl font-semibold ${isDarkTheme ? 'text-cyan-400' : 'text-cyan-600'}`}>
                        {devopsQuotes[currentQuoteIndex].text}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {renderModal()}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;

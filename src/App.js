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

function App() {
  const [showHelloWorld, setShowHelloWorld] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const cardStats = {
    "Experience": { value: "5+", subtitle: "Years of Experience", icon: <Briefcase className="w-8 h-8" /> },
    "Projects": { value: "50+", subtitle: "Projects Delivered", icon: <Rocket className="w-8 h-8" /> },
    "Skills and Knowledge Base": { value: "1000+", subtitle: "Infrastructure as Code", icon: <Wrench className="w-8 h-8" /> },
    "Certifications": { value: "8+", subtitle: "Professional Certs", icon: <Scroll className="w-8 h-8" /> },
    "Education": { value: "2", subtitle: "Degrees", icon: <GraduationCap className="w-8 h-8" /> },
    "Research and Patents": { value: "3", subtitle: "Publications", icon: <BookOpen className="w-8 h-8" /> },
    "Extra Curricular": { value: "10+", subtitle: "Activities", icon: <Target className="w-8 h-8" /> },
    "About Me": { value: "4+", subtitle: "Tech Domains", icon: <Lock className="w-8 h-8" /> }
  };

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

  const renderGrid = () => (
    <div className="grid grid-cols-3 auto-rows-fr gap-6 h-[75vh] p-6">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          onClick={() => handleClick(section)}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className={`
            relative rounded-2xl cursor-pointer overflow-hidden group
            ${section.isHighlight 
              ? 'bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700'
              : isDarkTheme
                ? 'bg-[#1a1f2e]/80 hover:bg-[#1e2436]'
                : 'bg-white/90 hover:bg-white'
            }
            backdrop-blur-lg border border-cyan-500/20
            shadow-lg hover:shadow-xl transition-all duration-300
            ${isDarkTheme ? 'hover:shadow-cyan-500/20' : 'hover:shadow-cyan-200/50'}
          `}
        >
          {/* Glass Effect Background */}
          <div className="absolute inset-0 bg-grid-white opacity-[0.02] mix-blend-overlay" />
          
          {section.isHighlight ? (
            <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <motion.h1 
                  className="text-5xl font-bold mb-4 tracking-tight"
                  style={{
                    background: 'linear-gradient(to right, #E0F2FE, #FFFFFF, #93C5FD)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {section.text}
                </motion.h1>
                <motion.div 
                  className="text-xl text-cyan-200 mb-6 font-light"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {section.subtitle}
                </motion.div>
                <div className="flex justify-center gap-6">
                  {[Github, Linkedin, Mail].map((Icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer"
                    >
                      <Icon className="w-6 h-6 text-white hover:text-cyan-200 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl" />
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-6 relative">
              <motion.div
                className={`mb-4 ${isDarkTheme ? 'text-cyan-400' : 'text-cyan-500'}`}
                animate={{ 
                  y: [0, -5, 0],
                  transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                {cardStats[section.text].icon}
              </motion.div>

              {/* Value with larger font */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className={`text-3xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}
              >
                {cardStats[section.text].value}
              </motion.div>

              {/* Card Title */}
              <h3 className={`text-xl font-semibold text-center mb-2
                ${isDarkTheme ? 'text-white' : 'text-gray-800'}
                group-hover:text-cyan-400 transition-colors duration-300`}
              >
                {section.text}
              </h3>

              {/* Subtitle */}
              <p className={`text-sm text-center
                ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {cardStats[section.text].subtitle}
              </p>
              
              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderQuotes = () => (
    <div className="h-[25vh] flex items-center justify-center px-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={devopsQuotes[currentQuoteIndex].text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`
            w-full max-w-4xl relative overflow-hidden
            ${isDarkTheme ? 'bg-[#1a1f2e]/90' : 'bg-white/90'}
            rounded-2xl p-8 backdrop-blur-xl
            border border-cyan-500/20
            shadow-lg hover:shadow-xl transition-all duration-300
            ${isDarkTheme ? 'hover:shadow-cyan-500/20' : 'hover:shadow-cyan-200/50'}
          `}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl" />
          
          <div className="relative flex items-center justify-center gap-6">
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full p-4"
            >
              {devopsQuotes[currentQuoteIndex].icon}
              </motion.div>
            
            <div className="flex-1">
              <motion.p 
                className={`text-2xl font-medium
                  ${isDarkTheme ? 'text-cyan-400' : 'text-cyan-600'}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {devopsQuotes[currentQuoteIndex].text}
              </motion.p>
            </div>
          </div>
          
          {/* Animated Border Effect */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );

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
          className={`${isDarkTheme ? 'bg-[#1e2736]' : 'bg-white'} p-8 rounded-xl shadow-2xl relative max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:max-w-5xl`}
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
              {renderQuotes()}
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

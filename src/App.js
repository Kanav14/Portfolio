import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
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
  BookOpen,
  Code2,
  GitBranch,
  Quote,
  Trophy,
  FileDown,
  Cpu,
  Box,
  Layers
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardIcons = {
    "About Me": { icon: <Lock />, bgColor: "from-pink-400/20 to-pink-600/20" },
    "Experience": { icon: <Trophy />, bgColor: "from-yellow-400/20 to-yellow-600/20" },
    "Projects": { icon: <Rocket />, bgColor: "from-blue-400/20 to-blue-600/20" },
    "Education": { icon: <GraduationCap />, bgColor: "from-green-400/20 to-green-600/20" },
    "Certifications": { icon: <Scroll />, bgColor: "from-purple-400/20 to-purple-600/20" },
    "Skills and Knowledge Base": { icon: <Code2 />, bgColor: "from-indigo-400/20 to-indigo-600/20" },
    "Extra Curricular": { icon: <Target />, bgColor: "from-orange-400/20 to-orange-600/20" },
    "Research and Patents": { icon: <BookOpen />, bgColor: "from-cyan-400/20 to-cyan-600/20" }
  };

  const devopsQuotes = [
    {
      text: "Infrastructure as code: Because clicking buttons is so 2010.",
      icon: <Cloud className="w-8 h-8 text-cyan-400" />
    },
    {
      text: "In DevOps, we don't fix problems. We prevent them from happening.",
      icon: <GitBranch className="w-8 h-8 text-green-400" />
    },
    {
      text: "Automate once, deploy anywhere.",
      icon: <Terminal className="w-8 h-8 text-purple-400" />
    },
    {
      text: "CI/CD: Making deployments as smooth as butter.",
      icon: <Server className="w-8 h-8 text-blue-400" />
    }
  ];

  const sections = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Experience" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Education" },
    { id: 5, text: "Kanav Sharma", isHighlight: true, subtitle: "DevOps Engineer" },
    { id: 6, text: "Certifications" },
    { id: 7, text: "Skills and Knowledge Base" },
    { id: 8, text: "Extra Curricular" },
    { id: 9, text: "Research and Patents" }
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
        value: isMobile ? 30 : 60,
        density: { enable: true, value_area: 1500 }
      },
      color: { 
        value: isDarkTheme ? "#4fd1c5" : "#0891b2"
      },
      opacity: {
        value: isDarkTheme ? 0.2 : 0.15,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: { 
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: isDarkTheme ? "#4fd1c5" : "#0891b2",
        opacity: isDarkTheme ? 0.2 : 0.15,
        width: 1
      },
      move: { 
        enable: true, 
        speed: isMobile ? 1.5 : 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { 
          enable: !isMobile,
          mode: ["grab", "bubble"]
        },
        onclick: { 
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: { opacity: 0.5 }
        },
        bubble: {
          distance: 200,
          size: 4,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  };

  const generateFloatingIcons = (sectionType) => {
    const iconsBySection = {
      "About Me": [<Lock size={16} />, <Briefcase size={16} />],
      "Projects": [<Code2 size={16} />, <GitBranch size={16} />, <Terminal size={16} />],
      "Experience": [<Trophy size={16} />, <Rocket size={16} />],
      "Education": [<GraduationCap size={16} />, <BookOpen size={16} />],
      "Certifications": [<Scroll size={16} />, <Trophy size={16} />],
      "Skills and Knowledge Base": [<Cloud size={16} />, <Database size={16} />, <Server size={16} />],
      "Extra Curricular": [<Target size={16} />, <Wrench size={16} />],
      "Research and Patents": [<BookOpen size={16} />, <Cpu size={16} />]
    };

    return iconsBySection[sectionType]?.map((icon, index) => (
      <motion.div
        key={index}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.5, 0.2],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          delay: index * 0.2,
          repeat: Infinity,
        }}
      >
        {icon}
      </motion.div>
    ));
  };

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
    <div className="grid grid-cols-3 gap-2 md:gap-6 h-[75vh] p-2 md:p-6 relative z-10">
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <div className={`w-full h-full bg-[url('circuit-pattern.svg')] opacity-[0.03] ${isDarkTheme ? 'invert' : ''}`} />
      </div>

      {sections.map((section) => (
        <motion.div
          key={section.id}
          onClick={() => handleClick(section)}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            rotateX: 5,
            transition: { duration: 0.2 }
          }}
          className={`
            relative rounded-xl cursor-pointer overflow-hidden group
            ${section.isHighlight 
              ? 'bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 col-span-1'
              : isDarkTheme
                ? 'bg-gradient-to-br from-[#1a1f2e]/80 to-[#252b3d]/80 hover:from-[#1e2436] hover:to-[#2a3149]'
                : 'bg-white/90 hover:bg-white'
            }
            backdrop-blur-lg
            before:absolute before:inset-0 before:rounded-xl before:p-[1px]
            before:bg-gradient-to-r before:from-transparent before:via-cyan-500/40 before:to-transparent
            before:opacity-0 hover:before:opacity-100 before:transition-opacity
            shadow-[0_0_15px_rgba(34,211,238,0.1)] 
            hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
            transition-all duration-300 ease-out
            ${isDarkTheme ? 'hover:shadow-cyan-500/20' : 'hover:shadow-cyan-200/50'}
            flex flex-col items-center justify-center
            min-h-[120px] md:min-h-[200px]
          `}
        >
          {section.isHighlight ? (
            <div className="relative h-full w-full flex flex-col items-center justify-center p-2 md:p-6 text-center">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
              >
                <motion.h1 
                  className="text-base md:text-5xl font-bold mb-1 md:mb-4 tracking-tight"
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
                  className="text-xs md:text-xl text-cyan-200 mb-2 md:mb-6 font-light"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {section.subtitle}
                </motion.div>
                <div className="flex justify-center gap-4 md:gap-6">
                  {[Github, Linkedin, Mail].map((Icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer relative group"
                    >
                      <Icon className="w-3 h-3 md:w-6 md:h-6 text-white hover:text-cyan-200 transition-colors duration-300" />
                      <motion.div
                        className="absolute inset-0 bg-white rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            <>
              <motion.div
                className={`relative flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full 
                  bg-gradient-to-br ${cardIcons[section.text].bgColor}
                  before:absolute before:inset-0 before:rounded-full before:blur-xl
                  before:bg-inherit before:opacity-40`}
                animate={{ 
                  y: [0, -5, 0],
                  scale: [1, 1.05, 1],
                  transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                <div className="w-6 h-6 md:w-10 md:h-10 text-white flex items-center justify-center
                  group-hover:scale-110 transition-transform duration-300">
                  {cardIcons[section.text].icon}
                </div>
              </motion.div>
              
              <h3 className={`text-sm md:text-xl font-semibold text-center mt-3 md:mt-4
                ${isDarkTheme ? 'text-white' : 'text-gray-800'}
                group-hover:text-cyan-400 transition-colors duration-300
                relative before:absolute before:bottom-0 before:left-0 before:w-full
                before:h-0.5 before:bg-cyan-400 before:scale-x-0 
                group-hover:before:scale-x-100 before:transition-transform
                before:origin-left`}
              >
                {section.text}
              </h3>

              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity">
                {generateFloatingIcons(section.text)}
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderQuotes = () => {
    const QuoteContainer = () => (
      <div className="fixed bottom-0 left-0 right-0 flex justify-center px-4 py-2 md:py-6 bg-gradient-to-t from-[#030306]/80 via-[#030306]/50 to-transparent">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={devopsQuotes[currentQuoteIndex].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex items-center space-x-3 max-w-full"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            >
              <div className="w-4 h-4 md:w-8 md:h-8 text-cyan-400 flex items-center justify-center">
                {devopsQuotes[currentQuoteIndex].icon}
              </div>
            </motion.div>
            
            <p className="text-xs md:text-base font-medium italic text-cyan-400 truncate">
              {devopsQuotes[currentQuoteIndex].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    );

    return <QuoteContainer />;
  };

  const renderModal = () =>
    activeSection && (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className={`
            ${isDarkTheme ? 'bg-[#1e2736]' : 'bg-white'} 
            ${isMobile ? 'p-4' : 'p-8'} 
            rounded-xl shadow-2xl relative max-h-[90vh] overflow-y-auto 
            w-full md:w-3/4 lg:max-w-5xl
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-cyan-400 transition-colors text-xl"
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
            <h2 className={`text-xl md:text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>
              Content for {activeSection.text} coming soon!
            </h2>
          )}
        </motion.div>
      </div>
    );

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % devopsQuotes.length);
    }, 5000);
    return () => clearInterval(quoteTimer);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-[#030306]' : 'bg-white'} transition-colors duration-500 ease-in-out`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={baseParticlesConfig}
        className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
      />

      {/* Theme Toggle Switch */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 z-50 transition-opacity duration-300">
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
                isMobile={isMobile}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-screen flex flex-col relative"
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

      {/* Resume Download FAB */}
      {!showHelloWorld && (
        <motion.button
          className="fixed bottom-14 md:bottom-8 left-4 md:left-8 z-50 flex items-center gap-2 
            bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
            text-white px-3 py-2 md:px-4 md:py-3 rounded-full text-xs md:text-sm font-medium 
            shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40
            border border-cyan-400/20 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.open('/resume.pdf', '_blank')}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-50 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="flex items-center gap-1 md:gap-2 relative z-10">
            <FileDown size={isMobile ? 14 : 20} />
            <span>Download Resume</span>
          </div>
        </motion.button>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Terminal, 
  Cpu,
  Code2,
  Linkedin,
  Mail,
  Rocket,
  Trophy,
  Book,
  ChevronRight
} from 'lucide-react';

const TypewriterText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [currentIndex, text]);

  return (
    <span className="text-green-400 font-mono">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        _
      </motion.span>
    </span>
  );
};

const CountdownButton = ({ seconds, onClick, show }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (show && !hasStarted) {
      setHasStarted(true);
    }
  }, [show, hasStarted]);

  useEffect(() => {
    if (hasStarted && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (hasStarted && timeLeft === 0) {
      onClick();
    }
  }, [timeLeft, onClick, hasStarted]);

  if (!show) return null;

  return (
    <motion.button
      onClick={() => onClick()}
      className="fixed md:bottom-8 md:right-8 bottom-20 right-4 z-50
        bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
        text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-base md:text-lg
        shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40
        border border-cyan-400/20 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: 0.5 }
      }}
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
      <div className="flex items-center gap-2 relative z-10">
        <span className="text-sm md:text-base">Skip Intro</span>
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        <span className="ml-1 md:ml-2 opacity-80 text-sm md:text-base">({timeLeft}s)</span>
      </div>
      <motion.div 
        className="absolute inset-0 rounded-full"
        initial={{ background: 'conic-gradient(from 0deg, transparent 100%, transparent 0%)' }}
        animate={{
          background: [
            'conic-gradient(from 0deg, transparent 100%, transparent 0%)',
            'conic-gradient(from 360deg, transparent 0%, transparent 100%)',
          ],
        }}
        transition={{ duration: seconds, ease: 'linear' }}
      />
    </motion.button>
  );
};

const DevopsLanding = ({ onAnimationComplete, isDarkTheme, isMobile }) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const commands = [
    '$ whoami',
    '> Kanav Sharma',
    '$ role',
    '> DevOps Engineer',
    '$ ./portfolio.sh'
  ];

  const quickStats = [
    { 
      icon: <Trophy size={isMobile ? 20 : 24} />, 
      title: "Years of Experience", 
      value: "5+",
      color: "text-yellow-400" 
    },
    { 
      icon: <Rocket size={isMobile ? 20 : 24} />, 
      title: "Projects Delivered", 
      value: "50+",
      color: "text-blue-400" 
    },
    { 
      icon: <Code2 size={isMobile ? 20 : 24} />, 
      title: "Infrastructure as Code", 
      value: "1000+",
      color: "text-green-400" 
    },
    { 
      icon: <Book size={isMobile ? 20 : 24} />, 
      title: "Certifications", 
      value: "8+",
      color: "text-purple-400" 
    }
  ];

  const handleCommandComplete = () => {
    if (currentCommandIndex < commands.length - 1) {
      setCurrentCommandIndex(prev => prev + 1);
    } else {
      setShowContent(true);
      setShowButton(true);
    }
  };

  const handleSkip = () => {
    setShowContent(true);
    onAnimationComplete();
  };

  return (
    <div className={`fixed inset-0 ${isDarkTheme ? 'bg-[#030306]' : 'bg-white'} transition-colors duration-500 ease-in-out overflow-hidden`}>
      {/* Grid Pattern Background */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] ${isDarkTheme ? 'opacity-[0.2]' : 'opacity-[0.1]'}`}></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-8">
        <div className="w-full max-w-4xl">
          {/* Terminal Section */}
          <motion.div 
            className="bg-gray-900/95 rounded-xl p-3 md:p-4 font-mono text-xs md:text-sm mb-4 md:mb-8 shadow-2xl border border-cyan-500/30 backdrop-blur-xl w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-2 md:mb-4 border-b border-gray-700 pb-2">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 text-xs ml-2">portfolio.sh</span>
            </div>
            {commands.slice(0, currentCommandIndex + 1).map((command, index) => (
              <div key={index} className="mb-2">
                {index === currentCommandIndex ? (
                  <TypewriterText 
                    text={command} 
                    onComplete={handleCommandComplete}
                  />
                ) : (
                  <span className="text-green-400">{command}</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Main Content */}
          <AnimatePresence>
            {showContent && (
              <>
                {/* Personal Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-4 md:mb-6"
                >
                  <motion.div
                    className="mb-3 md:mb-6 inline-block"
                    animate={{
                      scale: [1, 1.1, 1],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <Cpu className="w-10 h-10 md:w-16 md:h-16 text-cyan-400 mx-auto" />
                  </motion.div>
                  <h1 className={`text-3xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-2 md:mb-4`}>
                    Kanav Sharma
                  </h1>
                  <p className="text-lg md:text-2xl text-cyan-400 font-mono mb-2 md:mb-4">
                    DevOps Engineer & Cloud Architect
                  </p>
                  <p className={`text-sm md:text-lg max-w-2xl mx-auto mb-4 md:mb-6 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Specializing in building scalable infrastructure, automating deployments, 
                    and optimizing cloud-native solutions with a focus on security and efficiency.
                  </p>
                  <div className="flex justify-center gap-4 md:gap-6">
                    {[Github, Linkedin, Mail].map((Icon, index) => (
                      <motion.a 
                        key={index}
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className={`${isDarkTheme ? 'text-white' : 'text-gray-800'} hover:text-cyan-400 transition-colors`}
                      >
                        <Icon size={isMobile ? 20 : 28} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {quickStats.map((stat, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-800/80 backdrop-blur-xl p-3 md:p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: i * 0.1 }
                      }}
                    >
                      <motion.div
                        className={`mb-2 md:mb-4 ${stat.color}`}
                        animate={{
                          scale: [1, 1.1, 1],
                          transition: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                        }}
                      >
                        {stat.icon}
                      </motion.div>
                      <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.value}</h3>
                      <p className="text-xs md:text-sm text-gray-400">{stat.title}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Countdown Button */}
      <CountdownButton 
        seconds={10} 
        onClick={handleSkip} 
        show={showButton}
      />
    </div>
  );
};

export default DevopsLanding;

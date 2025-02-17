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
  ChevronRight,
  Download
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

const AnimatedButton = ({ onClick, children, className = "" }) => (
  <motion.button
    onClick={onClick}
    className={`relative flex items-center gap-2 
      bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
      text-white px-3 py-2 md:px-4 md:py-3 rounded-full text-xs md:text-sm font-medium 
      shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40
      border border-cyan-400/20 cursor-pointer ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <motion.div 
      className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-50"
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
      {children}
    </div>
  </motion.button>
);

const DevopsLanding = ({ onAnimationComplete, isDarkTheme, isMobile }) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const commands = [
    '$ whoami',
    '> Kanav Sharma',
    '$ role',
    '> DevOps Engineer',
    '$ ./portfolio.sh'
  ];

  const quickStats = [
    { 
      icon: <Trophy size={isMobile ? 18 : 22} />, 
      title: "Years of Experience", 
      value: "5+",
      color: "text-yellow-400" 
    },
    { 
      icon: <Rocket size={isMobile ? 18 : 22} />, 
      title: "Projects Delivered", 
      value: "10+",
      color: "text-blue-400" 
    },
    { 
      icon: <Code2 size={isMobile ? 18 : 22} />, 
      title: "DevOps Tools", 
      value: "15+",
      color: "text-green-400" 
    },
    { 
      icon: <Book size={isMobile ? 18 : 22} />, 
      title: "Certifications", 
      value: "4+",
      color: "text-purple-400" 
    }
  ];

  const socialLinks = [
    { 
      Icon: Github, 
      url: "https://github.com/Kanav14",
      ariaLabel: "GitHub Profile"
    },
    { 
      Icon: Linkedin, 
      url: "https://www.linkedin.com/in/kanav-sharma-engineer",
      ariaLabel: "LinkedIn Profile"
    },
    { 
      Icon: Mail, 
      url: "mailto:kanavsharma2000@gmail.com",
      ariaLabel: "Send Email"
    }
  ];

  useEffect(() => {
    if (showButton && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSkip();
    }
  }, [timeLeft, showButton]);

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
    <div className={`fixed inset-0 ${isDarkTheme ? 'bg-[#030306]' : 'bg-white'} transition-colors duration-500 ease-in-out overflow-y-auto`}>
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] ${isDarkTheme ? 'opacity-[0.2]' : 'opacity-[0.1]'} pointer-events-none`}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col justify-center items-center min-h-screen p-4 md:p-6">
          <div className="w-full max-w-4xl">
            <motion.div 
              className="bg-gray-900/95 rounded-xl p-3 md:p-4 font-mono text-xs md:text-sm mb-4 md:mb-6 shadow-2xl border border-cyan-500/30 backdrop-blur-xl w-full max-w-2xl mx-auto"
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

            <AnimatePresence>
              {showContent && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-4 md:mb-6"
                  >
                    <motion.div
                      className="mb-2 md:mb-4 inline-block"
                      animate={{
                        scale: [1, 1.1, 1],
                        transition: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <Cpu className="w-8 h-8 md:w-12 md:h-12 text-cyan-400 mx-auto" />
                    </motion.div>
                    <h1 className={`text-2xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-2 md:mb-3`}>
                      Kanav Sharma
                    </h1>
                    <p className="text-base md:text-xl text-cyan-400 font-mono mb-2 md:mb-3">
                      DevOps Engineer & Cloud Enthusiast
                    </p>
                    <p className={`text-sm md:text-base max-w-2xl mx-auto mb-3 md:mb-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      Specializing in building scalable infrastructure, automating deployments, 
                      and optimizing cloud-native solutions with a focus on security and efficiency.
                    </p>
                    <div className="flex justify-center gap-4">
                      {socialLinks.map(({ Icon, url, ariaLabel }, index) => (
                        <motion.a 
                          key={index}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={ariaLabel}
                          whileHover={{ scale: 1.1 }}
                          className={`${isDarkTheme ? 'text-white' : 'text-gray-800'} hover:text-cyan-400 transition-colors`}
                        >
                          <Icon size={isMobile ? 18 : 24} />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {quickStats.map((stat, i) => (
                      <motion.div
                        key={i}
                        className="bg-gray-800/80 backdrop-blur-xl p-3 md:p-4 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: i * 0.1 }
                        }}
                      >
                        <motion.div
                          className={`mb-2 md:mb-3 ${stat.color}`}
                          animate={{
                            scale: [1, 1.1, 1],
                            transition: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                          }}
                        >
                          {stat.icon}
                        </motion.div>
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-xs text-gray-400">{stat.title}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Mobile Buttons */}
                  <div className="flex flex-col md:hidden gap-4 w-full mb-8">
                    <AnimatedButton
                      onClick={() => window.open('https://raw.githubusercontent.com/Kanav14/Portfolio/refs/heads/main/images/Kanav_Sharma_Resume.pdf', '_blank')}
                      className="w-full"
                    >
                      <Download size={14} />
                      <span>Download Resume</span>
                    </AnimatedButton>

                    {showButton && (
                      <AnimatedButton
                        onClick={handleSkip}
                        className="w-full"
                      >
                        <span>Skip Intro</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="opacity-80">({timeLeft}s)</span>
                      </AnimatedButton>
                    )}
                  </div>

                  {/* Desktop Buttons */}
                  <div className="hidden md:block">
                    <div className="fixed bottom-8 left-8 z-50">
                      <AnimatedButton
                        onClick={() => window.open('https://raw.githubusercontent.com/Kanav14/Portfolio/refs/heads/main/images/Kanav_Sharma_Resume.pdf', '_blank')}
                      >
                        <Download size={20} />
                        <span>Download Resume</span>
                      </AnimatedButton>
                    </div>

                    {showButton && (
                      <div className="fixed bottom-8 right-8 z-50">
                        <AnimatedButton
                          onClick={handleSkip}
                        >
                          <span>Skip Intro</span>
                          <ChevronRight className="w-4 h-4" />
                          <span className="opacity-80">({timeLeft}s)</span>
                        </AnimatedButton>
                      </div>
                    )}
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevopsLanding;

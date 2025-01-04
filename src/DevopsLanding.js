import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Terminal as TerminalIcon, Cpu, Code2, Linkedin,
  Mail, Rocket, Trophy, Book, ArrowRight
} from 'lucide-react';

// TimerButton Component with enhanced design
const TimerButton = ({ timeLeft, onSkip, isDarkTheme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const circumference = 2 * Math.PI * 20; // Reduced radius for better appearance

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSkip}
      className="fixed top-6 right-6 z-50 flex items-center justify-center
        w-14 h-14 rounded-full bg-gray-900/90 backdrop-blur-lg
        border-2 border-cyan-500/50 group hover:border-cyan-400
        transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md opacity-0 
        group-hover:opacity-100 transition-opacity duration-300" />

      {/* Timer circle */}
      <svg className="absolute w-full h-full -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-gray-700/50"
        />
        <motion.circle
          cx="28"
          cy="28"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-cyan-400"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - timeLeft / 10)}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - timeLeft / 10) }}
          transition={{ duration: 0.5, ease: "linear" }}
        />
      </svg>

      {/* Timer text */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-full h-full"
        initial={{ scale: 1 }}
        animate={{ 
          scale: timeLeft <= 3 ? [1, 1.1, 1] : 1
        }}
        transition={{ 
          duration: 0.5,
          repeat: timeLeft <= 3 ? Infinity : 0
        }}
      >
        <span className="text-base font-medium text-cyan-400">
          {isHovered ? 'Skip' : `${timeLeft}s`}
        </span>
      </motion.div>
    </motion.button>
  );
};

// TypewriterText Component
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
  }, [currentIndex, text, onComplete]);

  return (
    <span className="text-green-400">
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

// Terminal Component
const Terminal = ({ commands, currentCommandIndex, onCommandComplete }) => {
  return (
    <motion.div 
      className="bg-gray-900/95 rounded-xl border border-cyan-500/30 overflow-hidden 
        backdrop-blur-xl w-full max-w-2xl mx-auto shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2 p-3 bg-gray-800/50 border-b border-gray-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-xs ml-2">portfolio.sh</span>
      </div>
      
      <div className="p-4 font-mono text-sm">
        {commands.slice(0, currentCommandIndex + 1).map((command, index) => (
          <div key={index} className="mb-2">
            {index === currentCommandIndex ? (
              <TypewriterText text={command} onComplete={onCommandComplete} />
            ) : (
              <span className="text-green-400">{command}</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Main DevopsLanding Component
const DevopsLanding = ({ onAnimationComplete, isDarkTheme, isMobile }) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [hasInteracted, setHasInteracted] = useState(false);

  const commands = [
    '$ whoami',
    '> Kanav Sharma',
    '$ role',
    '> DevOps Engineer',
    '$ ./portfolio.sh'
  ];

  const quickStats = [
    { icon: <Trophy size={20} />, title: "Years of Experience", value: "5+", color: "text-yellow-400" },
    { icon: <Rocket size={20} />, title: "Projects Delivered", value: "50+", color: "text-blue-400" },
    { icon: <Code2 size={20} />, title: "Infrastructure as Code", value: "1000+", color: "text-green-400" },
    { icon: <Book size={20} />, title: "Certifications", value: "8+", color: "text-purple-400" }
  ];

  // Fixed timer effect
  useEffect(() => {
    let timer;
    if (!hasInteracted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            onAnimationComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft, hasInteracted, onAnimationComplete]);

  const handleCommandComplete = () => {
    if (currentCommandIndex < commands.length - 1) {
      setCurrentCommandIndex(prev => prev + 1);
    } else {
      setShowContent(true);
      setHasInteracted(true);
    }
  };

  const handleSkip = () => {
    setHasInteracted(true);
    onAnimationComplete();
  };

  return (
    <div className={`min-h-screen w-full ${isDarkTheme ? 'bg-[#030306]' : 'bg-white'} 
      transition-colors duration-500 ease-in-out overflow-y-auto px-4 py-6 md:px-8 md:py-12`}
    >
      {/* Grid Pattern Background */}
      <div className={`fixed inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] 
        bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] 
        ${isDarkTheme ? 'opacity-[0.2]' : 'opacity-[0.1]'}`}
      />

      {/* Skip Button */}
      <TimerButton 
        timeLeft={timeLeft} 
        onSkip={handleSkip}
        isDarkTheme={isDarkTheme}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-4xl space-y-8">
          {/* Terminal Section */}
          <Terminal 
            commands={commands} 
            currentCommandIndex={currentCommandIndex}
            onCommandComplete={handleCommandComplete}
          />

          {/* Main Content */}
          <AnimatePresence>
            {showContent && (
              <div className="space-y-8">
                {/* Personal Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <motion.div
                    className="mb-6 inline-block"
                    animate={{
                      scale: [1, 1.1, 1],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <Cpu className="w-12 h-12 md:w-16 md:h-16 text-cyan-400" />
                  </motion.div>
                  <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 
                    via-blue-500 to-purple-600 text-transparent bg-clip-text mb-4"
                  >
                    Kanav Sharma
                  </h1>
                  <p className="text-lg md:text-2xl text-cyan-400 font-mono mb-4">
                    DevOps Engineer & Cloud Architect
                  </p>
                  <p className={`text-sm md:text-base max-w-2xl mx-auto mb-6 
                    ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    Specializing in building scalable infrastructure, automating deployments, 
                    and optimizing cloud-native solutions with a focus on security and efficiency.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-6">
                    {[
                      { Icon: Github, link: "https://github.com/yourusername" },
                      { Icon: Linkedin, link: "https://linkedin.com/in/yourusername" },
                      { Icon: Mail, link: "mailto:your.email@example.com" }
                    ].map(({ Icon, link }, index) => (
                      <motion.a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`${isDarkTheme ? 'text-white' : 'text-gray-800'} 
                          hover:text-cyan-400 transition-colors`}
                      >
                        <Icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {quickStats.map((stat, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-800/80 backdrop-blur-xl p-4 rounded-xl 
                        border border-gray-700/50 hover:border-cyan-500/50 
                        transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: i * 0.1 }
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className={`mb-3 ${stat.color}`}
                        animate={{
                          scale: [1, 1.1, 1],
                          transition: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                        }}
                      >
                        {stat.icon}
                      </motion.div>
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </h3>
                      <p className="text-xs text-gray-400">{stat.title}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Explore Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  onClick={handleSkip}
                  className="mx-auto flex items-center gap-2 px-6 py-3 
                    bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full
                    text-white font-semibold hover:from-cyan-600 hover:to-blue-600 
                    transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DevopsLanding;

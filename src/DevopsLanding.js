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
  ArrowRight
} from 'lucide-react';

const CircularProgress = ({ progress }) => (
  <div className="relative w-full h-full">
    <svg className="absolute inset-0" viewBox="0 0 100 100">
      <circle
        className="stroke-cyan-400/20"
        cx="50"
        cy="50"
        r="45"
        strokeWidth="4"
        fill="none"
      />
      <motion.circle
        className="stroke-cyan-400"
        cx="50"
        cy="50"
        r="45"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          rotate: "-90deg",
          transformOrigin: "center",
        }}
      />
    </svg>
  </div>
);

// Rest of your imports and TypewriterText component remain the same...

const DevopsLanding = ({ onAnimationComplete, isDarkTheme, isMobile }) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (showContent) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onAnimationComplete();
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showContent, onAnimationComplete]);

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
    }
  };

  const EnterButton = () => (
    <motion.button
      onClick={onAnimationComplete}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-1/2 transform translate-x-1/2 
        bg-gradient-to-r from-cyan-500 to-blue-500 text-white
        rounded-full shadow-lg group overflow-hidden
        hover:shadow-cyan-500/25 transition-all duration-300"
    >
      <div className="relative p-3 md:p-4">
        <div className="absolute inset-0">
          <CircularProgress progress={1 - timeLeft / 10} />
        </div>
        <div className="relative flex items-center gap-2 px-3 md:px-4">
          <span className="text-sm md:text-base font-semibold">
            Enter Portfolio
          </span>
          <span className="w-6 h-6 flex items-center justify-center rounded-full 
            bg-white/10 backdrop-blur-sm">
            {timeLeft}
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      />
    </motion.button>
  );

  return (
    <div className={`fixed inset-0 ${isDarkTheme ? 'bg-[#030306]' : 'bg-white'} 
      transition-colors duration-500 ease-in-out overflow-hidden`}>
      {/* Grid Pattern Background */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),
        linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:4rem_4rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] 
        ${isDarkTheme ? 'opacity-[0.2]' : 'opacity-[0.1]'}`} />
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-8">
        {/* Rest of your existing content... */}
        {showContent && <EnterButton />}
      </div>
    </div>
  );
};

export default DevopsLanding;

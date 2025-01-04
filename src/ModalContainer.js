import React from 'react';
import { motion } from 'framer-motion';

export const scrollToTop = () => {
  const modalContent = document.querySelector('.modal-content');
  if (modalContent) {
    modalContent.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

export const ModalContainer = ({ children, className = "" }) => (
  <motion.div 
    className={`bg-[#1a1f2e]/95 backdrop-blur-lg border border-cyan-500/20 
      rounded-xl shadow-2xl relative overflow-hidden h-[80vh] ${className}`}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative z-10 h-full overflow-y-auto modal-content 
      scrollbar-thin scrollbar-thumb-cyan-400/20 scrollbar-track-transparent">
      {children}
    </div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] 
      bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.2]" />
  </motion.div>
);

export const StyledButton = ({ onClick, children, className = "" }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 
      rounded-md font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 
      disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export const SectionTitle = ({ children }) => (
  <motion.h1 
    className="text-2xl md:text-4xl font-extrabold"
    style={{
      background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }}
  >
    {children}
  </motion.h1>
);

// For section headers with dividers
export const SectionDivider = ({ children }) => (
  <div className="flex items-center gap-4 my-6">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    <h2 className="text-xl font-bold text-cyan-400">{children}</h2>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
  </div>
);

// Card container with consistent styling
export const CardContainer = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-[#1e2436] p-4 md:p-6 rounded-xl border border-cyan-500/20 
      shadow-lg hover:shadow-cyan-400/20 transition-all duration-300
      hover:border-cyan-500/40 relative overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

// Gradient text
export const GradientText = ({ children, className = "" }) => (
  <span
    className={`text-transparent bg-clip-text bg-gradient-to-r 
      from-cyan-400 to-blue-500 ${className}`}
  >
    {children}
  </span>
);

// Badge component
export const Badge = ({ children, color = "cyan" }) => (
  <span
    className={`px-2 py-1 text-xs rounded-full bg-${color}-400/10 
      text-${color}-400 border border-${color}-400/20`}
  >
    {children}
  </span>
);

// Icon container with consistent styling
export const IconContainer = ({ children, className = "" }) => (
  <div className={`p-2 rounded-lg bg-cyan-400/10 text-cyan-400 ${className}`}>
    {children}
  </div>
);

// List container with consistent styling
export const StyledList = ({ items }) => (
  <ul className="space-y-2 mt-2">
    {items.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-start gap-2 text-gray-300"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
        <span>{item}</span>
      </motion.li>
    ))}
  </ul>
);

// Grid container with consistent styling
export const GridContainer = ({ children, cols = "md:grid-cols-2" }) => (
  <div className={`grid grid-cols-1 ${cols} gap-4 md:gap-6`}>
    {children}
  </div>
);

// For custom scrollbar styling, add this CSS to your global styles:
/*
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgba(34, 211, 238, 0.2);
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: rgba(34, 211, 238, 0.4);
}
*/

export default ModalContainer;

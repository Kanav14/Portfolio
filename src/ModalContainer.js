import React from 'react';
import { motion } from 'framer-motion';

export const ModalContainer = ({ children, className = "" }) => (
  <motion.div 
    className={`bg-[#1a1f2e]/95 backdrop-blur-lg border border-cyan-500/20 
      rounded-xl shadow-2xl relative overflow-hidden ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative z-10">
      {children}
    </div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.2]"></div>
  </motion.div>
);

export const StyledButton = ({ onClick, children, className = "" }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 
      rounded-md font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 ${className}`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export const SectionTitle = ({ children }) => (
  <motion.h1 
    className="text-2xl md:text-4xl font-extrabold inline-flex items-center"
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

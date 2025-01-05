import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const DownloadButton = ({ isMobile, className = "" }) => (
  <motion.button
    className={`flex items-center gap-2 
      bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
      text-white px-4 py-3 rounded-full font-medium 
      shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40
      border border-cyan-400/20 cursor-pointer ${className}`}
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
    <div className="flex items-center gap-2 relative z-10">
      <FileDown size={isMobile ? 16 : 20} />
      <span className={`${isMobile ? 'text-sm' : 'text-base'}`}>Download Resume</span>
    </div>
  </motion.button>
);

export default DownloadButton;

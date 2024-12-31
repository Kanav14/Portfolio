import React from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, Mail } from "lucide-react";

const ModalButton = ({ onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 px-4 py-2 rounded-md 
    text-sm md:text-base font-bold transition-all shadow-lg hover:shadow-cyan-400/20"
    onClick={onClick}
  >
    {children}
  </motion.button>
);

const AboutMe = ({ closeModal, goToNext, goToPrevious }) => {
  const stats = [
    { label: "DevOps Tools", value: "10+" },
    { label: "Cloud Platforms", value: "3+" },
    { label: "Certifications", value: "5+" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container bg-gray-900 text-white p-6 rounded-lg shadow-lg"
    >
      <motion.h1 
        className="text-2xl md:text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        animate={{ 
          backgroundPosition: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center mb-6">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          src="https://avatars.githubusercontent.com/u/your-avatar-url"
          alt="Kanav Sharma"
          className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6 border-4 border-cyan-400 shadow-lg shadow-cyan-400/20"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Kanav Sharma
          </h1>
          <p className="text-xl text-gray-300">DevOps Engineer</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/kanav-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5 mr-2" /> LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:kanav.sharma@example.com"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" /> Email
            </motion.a>
          </div>
        </div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 text-lg leading-relaxed text-gray-300"
      >
        I am a passionate DevOps Engineer with 5+ years of experience automating
        and managing cloud-native solutions using cutting-edge technologies
        like Kubernetes, Docker, and AWS. I specialize in scalable CI/CD
        pipelines, Azure and AWS DevOps, and innovative AI-driven projects.
      </motion.p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-4 rounded-lg text-center shadow-lg border border-gray-700"
          >
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {stat.value}
            </div>
            <div className="text-sm text-gray-300">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="flex justify-between mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <ModalButton onClick={goToPrevious}>Back</ModalButton>
        <ModalButton onClick={closeModal}>Main Menu</ModalButton>
        <ModalButton onClick={goToNext}>Next</ModalButton>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;

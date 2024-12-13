import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="relative w-full min-h-screen bg-overall-gradient flex items-center justify-center p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-highlight border-4 border-cyan-400">
            <img
              src="https://github.com/kanavsharma/kanav-profile.jpg"
              alt="Kanav Sharma"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          className="text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Hi, I'm Kanav Sharma, a passionate DevOps Engineer with expertise in cloud
              infrastructure, containerization, and CI/CD strategies.
            </p>
          </div>
          <motion.button
            className="mt-8 px-6 py-3 bg-cyan-400 text-black font-bold rounded-full hover:bg-cyan-300 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/kanavsharma", "_blank")
            }
          >
            Connect on LinkedIn
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;

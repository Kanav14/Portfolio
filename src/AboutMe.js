import React from "react";
import { motion } from "framer-motion";

const AboutMe = ({ closeModal, goToNext, goToPrevious }) => {
  return (
    <div className="modal-overlay">
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">About Me</h2>
        <div className="space-y-4 text-white text-lg leading-relaxed">
          <p>
            Hi, I'm Kanav Sharma, a passionate DevOps Engineer with expertise in 
            cloud infrastructure, CI/CD, and automation tools like Docker, Kubernetes, AWS, and Jenkins.
          </p>
          <p>
            I strive to innovate solutions to complex infrastructure challenges while 
            ensuring collaboration and technical excellence.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl text-cyan-400 font-semibold">Quick Stats</h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {[
              { label: "DevOps Tools", value: "10+" },
              { label: "Cloud Platforms", value: "3+" },
              { label: "Certifications", value: "5+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-black bg-opacity-70 text-white p-4 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-cyan-400">{stat.value}</h3>
                <p className="text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="modal-buttons">
          <button className="modal-button" onClick={goToPrevious}>
            Back
          </button>
          <button className="modal-button" onClick={closeModal}>
            Main Menu
          </button>
          <button className="modal-button" onClick={goToNext}>
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;

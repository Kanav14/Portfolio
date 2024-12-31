import React from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, Mail } from "lucide-react";

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-2 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base font-bold hover:bg-cyan-500 transition-all"
    onClick={onClick}
  >
    {children}
  </button>
);

const AboutMe = ({ closeModal, goToNext, goToPrevious }) => {
  const stats = [
    { label: "DevOps Tools", value: "10+" },
    { label: "Cloud Platforms", value: "3+" },
    { label: "Certifications", value: "5+" },
  ];

  return (
    <div className="container bg-gray-900 text-white p-3 md:p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 text-center text-cyan-400 animate-pulse">
        About Me
      </h1>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center mb-4 md:mb-6">
        <img
          src="https://avatars.githubusercontent.com/u/your-avatar-url"
          alt="Kanav Sharma"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 md:mb-0 md:mr-6 border-4 border-cyan-400"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">Kanav Sharma</h1>
          <p className="text-lg md:text-xl">DevOps Engineer</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/kanav-sharma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="hover:text-cyan-400 flex items-center text-sm md:text-base"
            >
              <LinkedinIcon className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" /> LinkedIn
            </a>
            <a
              href="mailto:kanav.sharma@example.com"
              aria-label="Send me an email"
              className="hover:text-cyan-400 flex items-center text-sm md:text-base"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" /> Email
            </a>
          </div>
        </div>
      </div>

      {/* About Text */}
      <p className="mb-4 md:mb-6 text-sm md:text-lg leading-relaxed">
        I am a passionate DevOps Engineer with 5+ years of experience automating
        and managing cloud-native solutions using cutting-edge technologies
        like Kubernetes, Docker, and AWS. I specialize in scalable CI/CD
        pipelines, Azure and AWS DevOps, and innovative AI-driven projects.
      </p>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 p-2 md:p-4 rounded-md text-center shadow-md"
          >
            <div className="text-xl md:text-3xl font-bold text-cyan-400">{stat.value}</div>
            <div className="text-xs md:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Modal Buttons */}
      <div className="flex justify-between mt-4 md:mt-8">
        <ModalButton onClick={goToPrevious}>Back</ModalButton>
        <ModalButton onClick={closeModal}>Main Menu</ModalButton>
        <ModalButton onClick={goToNext}>Next</ModalButton>
      </div>
    </div>
  );
};

export default AboutMe;

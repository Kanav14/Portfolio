import React from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, Mail } from "lucide-react";

const AboutMe = ({ closeModal, goToNext }) => {
  return (
    <div className="container bg-gray-900 text-white">
      <div className="flex items-center mb-6">
        <img 
          src="/path/to/your/picture.jpg" 
          alt="Kanav Sharma" 
          className="w-32 h-32 rounded-full mr-6 border-4 border-cyan-400"
        />
        <div>
          <h1 className="text-3xl font-bold text-cyan-400">Kanav Sharma</h1>
          <p className="text-xl">DevOps Engineer</p>
          <div className="flex space-x-4 mt-2">
            <a 
              href="https://www.linkedin.com/in/kanav-sharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center"
            >
              <LinkedinIcon className="mr-2" /> LinkedIn
            </a>
            <a 
              href="mailto:kanav.sharma@example.com"
              className="hover:text-cyan-400 flex items-center"
            >
              <Mail className="mr-2" /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Existing content */}
      <p className="mb-4">
        Hi, I'm Kanav Sharma, a passionate DevOps Engineer with expertise in cloud infrastructure, CI/CD, and automation tools like Docker, Kubernetes, AWS, and Jenkins.
      </p>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[
          { label: "DevOps Tools", value: "10+" },
          { label: "Cloud Platforms", value: "3+" },
          { label: "Certifications", value: "5+" },
        ].map((stat, index) => (
          <div 
            key={index} 
            className="bg-gray-800 p-4 rounded-md text-center"
          >
            <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Modal Buttons */}
      <div className="modal-buttons mt-6">
        <button className="modal-button" onClick={closeModal}>
          Main Menu
        </button>
        <button className="modal-button" onClick={goToNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AboutMe;

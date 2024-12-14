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
        I am a passionate DevOps Engineer with 5+ years of experience automating and managing cloud-native solutions using cutting-edge technologies like Kubernetes, Docker, and AWS. A dual-certified expert in Azure DevOps and AWS DevOps, I thrive on designing scalable and efficient CI/CD pipelines while optimizing application performance with tools like Helm, Jenkins, and Prometheus.

Currently pursuing my Master’s in Information Science at DePaul University, I have a strong foundation in software engineering, backed by innovative AI-driven projects and patents in cricket monitoring systems and consumer behavior analysis. My work spans infrastructure automation, disaster recovery, and helm-based deployments, all aimed at reducing complexity and enhancing system reliability.

With a knack for innovation, I recently developed a Generative AI tool to streamline error resolution using large language models. I am skilled in collaborating with cross-functional teams to deliver secure, scalable, and automated solutions that meet modern business demands.

Beyond my professional achievements, I enjoy experimenting with emerging tech trends and solving real-world challenges through AI-driven solutions. Let’s connect and explore the possibilities of transforming ideas into impactful results!

Skills Highlight: Python, Shell, Kubernetes, CI/CD, Ansible, AWS, Azure, Terraform, Kafka, GitHub Actions, Monitoring Tools.
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

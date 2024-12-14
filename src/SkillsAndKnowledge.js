import React from "react";

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all"
    onClick={onClick}
  >
    {children}
  </button>
);

function SkillsAndKnowledge({ closeModal, goToNext, goToPrevious }) {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "PowerShell", "Groovy", "YAML", "Java"],
    },
    {
      category: "DevOps Tools",
      skills: [
        "Ansible",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Helm",
        "Vault",
        "ArgoCD",
        "HashiCorp Vault",
      ],
    },
    {
      category: "Cloud & Monitoring",
      skills: [
        "AWS",
        "Azure",
        "Prometheus",
        "Grafana",
        "ELK Stack",
        "PowerBI",
        "ServiceNow",
      ],
    },
    {
      category: "Databases",
      skills: ["Kafka", "PostgreSQL", "SQL", "Cloudera"],
    },
    {
      category: "CI/CD & Automation",
      skills: ["Nexus", "GitHub Actions"],
    },
    {
      category: "Emerging Technologies",
      skills: [
        "Generative AI",
        "Machine Learning",
        "LLM Integration",
        "AI-Driven DevOps",
      ],
    },
  ];

  return (
    <div className="container bg-gray-900 text-white p-6 h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Skills and Knowledge Base
      </h1>
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">{category.category}</h2>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <ModalButton onClick={goToPrevious}>Back</ModalButton>
        <ModalButton onClick={closeModal}>Main Menu</ModalButton>
        <ModalButton onClick={goToNext}>Next</ModalButton>
      </div>
    </div>
  );
}

export default SkillsAndKnowledge;

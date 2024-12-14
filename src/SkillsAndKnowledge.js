import React from 'react';

function SkillsAndKnowledge({ closeModal, goToNext, goToPrevious }) {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'PowerShell', 'Groovy', 'YAML', 'Java']
    },
    {
      category: 'DevOps Tools',
      skills: ['Ansible', 'Docker', 'Kubernetes', 'Jenkins', 'Helm', 'Vault', 'ArgoCD', 'HashiCorp Vault']
    },
    {
      category: 'Cloud & Monitoring',
      skills: ['AWS', 'Azure', 'Prometheus', 'Grafana', 'ELK Stack', 'PowerBI', 'ServiceNow']
    },
    {
      category: 'Databases',
      skills: ['Kafka', 'PostgreSQL', 'SQL', 'Cloudera']
    },
    {
      category: 'CI/CD & Automation',
      skills: ['Nexus', 'GitHub Actions']
    },
    {
      category: 'Emerging Technologies',
      skills: ['Generative AI', 'Machine Learning', 'LLM Integration', 'AI-Driven DevOps']
    }
  ];

  return (
    <div className="container bg-gray-900 text-white h-full overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Skills and Knowledge Base</h1>
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
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

        {/* Additional Knowledge Section */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Professional Expertise</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Microservices Architecture</li>
            <li>Cloud Infrastructure Optimization</li>
            <li>AI and Machine Learning Integration in DevOps</li>
            <li>Automated Testing and Deployment Strategies</li>
          </ul>
        </div>
      </div>

      {/* Modal Buttons */}
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
    </div>
  );
}

export default SkillsAndKnowledge;

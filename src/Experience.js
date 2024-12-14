import React from 'react';

function Experience({ closeModal, goToNext, goToPrevious }) {
  return (
    <div className="container bg-gray-900 text-white h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Professional Experience
      </h1>
      <div className="space-y-8">
        {/* Amdocs: DevOps Engineer - Experienced */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
          <img 
            src="/images/amdocs-logo.png" 
            alt="Amdocs Logo" 
            className="w-32 h-32 mr-6 rounded-full object-cover border-4 border-cyan-400"
          />
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">DevOps Engineer - Experienced</h2>
            <p className="mt-2 text-lg">
              <strong>Amdocs</strong> | Aug 2021 - Aug 2022 | Pune
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Led Digital Experience R&D Team to automate artifact management in Nexus, reducing manual effort by 40%.</li>
              <li>Developed automation scripts using Shell, Groovy, and Python, achieving a 30% faster release cycle.</li>
              <li>Built AWS infrastructure for deploying Helm charts on EKS, cutting deployment times by 25%.</li>
              <li>Automated OpenShift cluster installations, reducing setup time by 40% and completing 15+ installations monthly.</li>
              <li>Designed and implemented a Vault automation tool for secret management, handling 500+ secrets monthly.</li>
            </ul>
          </div>
        </div>

        {/* Amdocs: DevOps Engineer - Advanced */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
          <img 
            src="/images/amdocs-logo.png" 
            alt="Amdocs Logo" 
            className="w-32 h-32 mr-6 rounded-full object-cover border-4 border-cyan-400"
          />
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">DevOps Engineer - Advanced</h2>
            <p className="mt-2 text-lg">
              <strong>Amdocs</strong> | Aug 2022 - Aug 2024 | Pune
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Conducted disaster recovery drills across 320+ applications, ensuring a 100% success rate.</li>
              <li>Managed helm deployments with CI/CD pipeline, ensuring 99.9% uptime.</li>
              <li>Designed and developed a Generative AI tool for internal usage to find solutions for repeated errors using LLM.</li>
            </ul>
          </div>
        </div>

        {/* Nihilent Ltd */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
          <img 
            src="/images/nihilent-logo.png" 
            alt="Nihilent Logo" 
            className="w-32 h-32 mr-6 rounded-full object-cover border-4 border-cyan-400"
          />
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">Software Engineer</h2>
            <p className="mt-2 text-lg">
              <strong>Nihilent Ltd</strong> | Aug 2019 - Jul 2021 | Pune
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Deployed Java applications on VMware using Ansible, ensuring 99.9% environment consistency for HSBC.</li>
              <li>Automated Selenium tests with Ansible Tower, increasing test execution speed by 25%.</li>
              <li>Implemented centralized logging and monitoring for troubleshooting, reducing incident response time by 40%.</li>
            </ul>
          </div>
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

export default Experience;

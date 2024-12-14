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
            src="https://via.placeholder.com/150/36cfc1/000000?text=Amdocs" 
            alt="Amdocs Logo" 
            className="w-32 h-32 mr-6 rounded-full object-cover border-4 border-cyan-400"
          />
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">DevOps Engineer (Experienced)</h2>
            <p className="mt-2 text-lg">
              <strong>Amdocs</strong> | Full-time
            </p>
            <p className="mt-2 text-md">
              July 2022 - Present
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Lead DevOps initiatives for complex cloud infrastructure projects</li>
              <li>Architect and implement scalable CI/CD pipelines using Jenkins, GitHub Actions</li>
              <li>Optimize cloud resources and implement infrastructure as code with Terraform</li>
            </ul>
          </div>
        </div>
        
        {/* Amdocs: DevOps Engineer - Advanced */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
          <img 
            src="https://via.placeholder.com/150/36cfc1/000000?text=Amdocs" 
            alt="Amdocs Logo" 
            className="w-32 h-32 mr-6 rounded-full object-cover border-4 border-cyan-400"
          />
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">DevOps Engineer (Advanced)</h2>
            <p className="mt-2 text-lg">
              <strong>Amdocs</strong> | Full-time
            </p>
            <p className="mt-2 text-md">
              January 2021 - June 2022
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Developed and maintained robust CI/CD workflows</li>
              <li>Implemented containerization strategies using Docker and Kubernetes</li>
              <li>Automated infrastructure provisioning and configuration management</li>
            </ul>
          </div>
        </div>
        
        {/* Nihilent Ltd */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
          <img 
            src="https://via.placeholder.com/150/36cfc1/000000?text=Nihilent" 
            alt="Nihilent Logo" 
            className="w-32 h-32 mr-6 rounded-full object-cover border-4 border-cyan-400"
          />
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">DevOps Engineer</h2>
            <p className="mt-2 text-lg">
              <strong>Nihilent Ltd</strong> | Full-time
            </p>
            <p className="mt-2 text-md">
              July 2019 - December 2020
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Supported cloud migration and DevOps transformation initiatives</li>
              <li>Implemented monitoring and logging solutions using ELK stack</li>
              <li>Collaborated with cross-functional teams to improve deployment processes</li>
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

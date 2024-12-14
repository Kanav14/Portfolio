import React from 'react';

function Certifications({ closeModal, goToNext, goToPrevious }) {
  return (
    <div className="container bg-gray-900 text-white h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Professional Certifications
      </h1>
      <div className="space-y-8">
        {/* Azure DevOps Certification */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
          <img 
            src="https://via.placeholder.com/150/36cfc1/000000?text=Azure+Cert" 
            alt="Azure DevOps Certification" 
            className="w-48 h-32 mr-6 rounded-lg object-cover border-2 border-cyan-400"
          />
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">Azure DevOps Engineer Expert</h2>
            <p className="mt-2 text-lg">
              <strong>Microsoft Certification</strong>
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Advanced certification demonstrating expertise in DevOps practices</li>
              <li>Validated skills in implementing DevOps processes using Azure technologies</li>
              <li>Comprehensive understanding of continuous integration and deployment strategies</li>
            </ul>
          </div>
        </div>
        
        {/* AWS DevOps Certification */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
          <img 
            src="https://via.placeholder.com/150/36cfc1/000000?text=AWS+Cert" 
            alt="AWS DevOps Certification" 
            className="w-48 h-32 mr-6 rounded-lg object-cover border-2 border-cyan-400"
          />
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">AWS DevOps Engineer Professional</h2>
            <p className="mt-2 text-lg">
              <strong>Amazon Web Services Certification</strong>
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Professional-level certification in AWS cloud infrastructure and DevOps</li>
              <li>Proven expertise in provisioning, operating, and managing distributed applications</li>
              <li>In-depth knowledge of AWS services and best practices</li>
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

export default Certifications;

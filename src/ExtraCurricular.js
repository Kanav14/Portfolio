import React from 'react';

function ExtraCurricular({ closeModal, goToNext, goToPrevious }) {
  return (
    <div className="container bg-gray-900 text-white h-full overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Extra Curricular Activities</h1>
      <div className="space-y-8">
        {/* Technical Workshops and Conferences */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold">Technical Engagement</h2>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Regular participant in DevOps and Cloud Computing conferences</li>
            <li>Speaker at local tech meetups on AI and DevOps innovations</li>
            <li>Active contributor to open-source projects on GitHub</li>
          </ul>
        </div>

        {/* Volunteer Work */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold">Community Involvement</h2>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Technical mentor for coding bootcamps and student workshops</li>
            <li>Volunteer at STEM education initiatives</li>
            <li>Participated in hackathons and innovation challenges</li>
          </ul>
        </div>

        {/* Personal Projects and Hobbies */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold">Personal Development</h2>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Continuous learning in emerging technologies</li>
            <li>Building personal AI and DevOps projects</li>
            <li>Reading tech blogs and research papers</li>
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

export default ExtraCurricular;

import React from 'react';

function Education({ closeModal, goToNext, goToPrevious }) {
  return (
    <div className="container bg-gray-900 text-white h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Educational Journey
      </h1>
      <div className="space-y-8">
        {/* Master's Degree */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
          <img 
            src="https://via.placeholder.com/150/36cfc1/000000?text=DePaul" 
            alt="DePaul University Logo" 
            className="w-32 h-32 mr-6 rounded-full object-cover border-4 border-cyan-400"
          />
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">Master of Science in Information Systems</h2>
            <p className="mt-2 text-lg">
              <strong>DePaul University</strong> | Chicago, IL
            </p>
            <p className="mt-2 text-md">
              Expected Graduation: June 2026
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Pursuing advanced studies in Information Systems</li>
              <li>Focusing on cutting-edge technologies and digital transformation</li>
              <li>Actively engaged in research and innovative technology projects</li>
            </ul>
          </div>
        </div>
        
        {/* Bachelor's Degree */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
          <img 
            src="https://via.placeholder.com/150/36cfc1/000000?text=CGC" 
            alt="Chandigarh Group of Colleges Logo" 
            className="w-32 h-32 mr-6 rounded-full object-cover border-4 border-cyan-400"
          />
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">Bachelor of Technology in Computer Science</h2>
            <p className="mt-2 text-lg">
              <strong>Chandigarh Group of Colleges</strong> | India
            </p>
            <p className="mt-2 text-md">
              Graduated: June 2019
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Comprehensive education in Computer Science and Software Engineering</li>
              <li>Strong foundation in programming, algorithms, and software development</li>
              <li>Participated in multiple technical projects and innovations</li>
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

export default Education;

import React from "react";

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all"
    onClick={onClick}
  >
    {children}
  </button>
);

function ExtraCurricular({ closeModal, goToNext, goToPrevious }) {
  const activities = [
    {
      title: "Technical Engagement",
      points: [
        "Regular participant in DevOps and Cloud Computing conferences",
        "Speaker at local tech meetups on AI and DevOps innovations",
        "Active contributor to open-source projects on GitHub",
      ],
    },
    {
      title: "Community Involvement",
      points: [
        "Technical mentor for coding bootcamps and student workshops",
        "Volunteer at STEM education initiatives",
        "Participated in hackathons and innovation challenges",
      ],
    },
    {
      title: "Personal Development",
      points: [
        "Continuous learning in emerging technologies",
        "Building personal AI and DevOps projects",
        "Reading tech blogs and research papers",
      ],
    },
  ];

  return (
    <div className="container bg-gray-900 text-white p-6 h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Extra Curricular Activities
      </h1>
      <div className="space-y-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-cyan-300">{activity.title}</h2>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              {activity.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
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

export default ExtraCurricular;

import React from "react";

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all"
    onClick={onClick}
  >
    {children}
  </button>
);

function Projects({ closeModal, goToNext, goToPrevious }) {
  const projects = [
    {
      title: "AI-Driven Infrastructure Optimization with AWS",
      imageUrl: "https://via.placeholder.com/150/36cfc1/000000?text=AI+Project",
      overview:
        "Developed an AI-powered tool using PyTorch to optimize AWS resources, improving infrastructure efficiency and reducing costs.",
      problem:
        "Many organizations struggle with optimizing AWS resources, leading to unnecessary costs and underutilization of resources.",
      solution:
        "Built an AI model to analyze AWS resource usage, automatically scaling EC2 instances with Lambda and monitoring using CloudWatch.",
      impact: "Reduced AWS costs by 25% and improved resource allocation by 40%.",
      technologies: "PyTorch, AWS Lambda, CloudWatch, SageMaker, Python.",
      githubLink: "#",
    },
    {
      title: "Kubernetes-based CI/CD Pipeline for Scalable Web Applications",
      imageUrl: "https://via.placeholder.com/150/36cfc1/000000?text=K8s+Project",
      overview:
        "Created a CI/CD pipeline for web applications using Kubernetes and AWS EKS, automating build, test, and deployment processes.",
      problem:
        "Traditional deployment methods were slow and error-prone, affecting development cycles and time-to-market.",
      solution:
        "Leveraged Kubernetes, Helm, and Jenkins to build a fully automated pipeline, ensuring seamless scaling and faster delivery.",
      impact: "Reduced deployment times by 40% and improved scalability.",
      technologies: "Kubernetes, Helm, Jenkins, AWS EKS, Terraform, GitHub Actions.",
      githubLink: "#",
    },
  ];

  return (
    <div className="container bg-gray-900 text-white p-6 h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Projects
      </h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-24 w-auto rounded-lg border-2 border-cyan-400"
              />
              <h2 className="text-2xl font-bold text-cyan-300">{project.title}</h2>
            </div>
            <p className="text-lg mt-2">
              <strong>Overview:</strong> {project.overview}
            </p>
            <p className="mt-4">
              <strong>Problem:</strong> {project.problem}
            </p>
            <p className="mt-4">
              <strong>Solution:</strong> {project.solution}
            </p>
            <p className="mt-4">
              <strong>Impact:</strong> {project.impact}
            </p>
            <p className="mt-4">
              <strong>Technologies Used:</strong> {project.technologies}
            </p>
            <div className="flex justify-between items-center mt-4">
              <a href={project.githubLink} className="text-blue-400 underline">
                View on GitHub
              </a>
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

export default Projects;

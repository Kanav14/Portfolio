import React from 'react';

function Projects() {
  return (
    <div className="container bg-gray-900 text-white h-full overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      <div className="space-y-8">
        {/* Project 1: AI-Driven Infrastructure Optimization */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <div className="flex items-center space-x-4">
            <img
              src="/images/ai-infrastructure.png" // Local image for the project (AI/Cloud-related)
              alt="AI-Driven Infrastructure Optimization"
              className="h-24 w-auto"
            />
            <h2 className="text-2xl font-bold">AI-Driven Infrastructure Optimization with AWS</h2>
          </div>
          <p className="text-lg mt-2">
            <strong>Overview:</strong> This project involved developing an AI-powered tool using PyTorch to optimize AWS resources, improving infrastructure efficiency and reducing costs. The solution leveraged AWS Lambda, CloudWatch, and SageMaker to automatically scale resources based on real-time usage patterns.
          </p>
          <p className="mt-4">
            <strong>Problem:</strong> Many organizations struggle with optimizing AWS resources, leading to unnecessary costs and underutilization of resources.
          </p>
          <p className="mt-4">
            <strong>Solution:</strong> We built an AI model that analyzed AWS resource usage, identifying opportunities for cost savings. The tool utilized Lambda to automatically scale EC2 instances, and CloudWatch was used for monitoring and alerting.
          </p>
          <p className="mt-4">
            <strong>Impact:</strong> This optimization led to a 25% reduction in AWS costs and improved resource allocation by 40%.
          </p>
          <p className="mt-4">
            <strong>Technologies Used:</strong> PyTorch, AWS Lambda, CloudWatch, SageMaker, Python.
          </p>
          <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-blue-400 underline">View on GitHub</a> {/* Placeholder for GitHub link */}
          </div>
        </div>

        {/* Project 2: Kubernetes-based CI/CD Pipeline */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <div className="flex items-center space-x-4">
            <img
              src="/images/k8s-cicd-pipeline.png" // Local image for the project (Kubernetes/CI-CD)
              alt="Kubernetes CI/CD Pipeline"
              className="h-24 w-auto"
            />
            <h2 className="text-2xl font-bold">Kubernetes-based CI/CD Pipeline for Scalable Web Applications</h2>
          </div>
          <p className="text-lg mt-2">
            <strong>Overview:</strong> This project focused on creating a CI/CD pipeline for scalable web applications using Kubernetes and AWS EKS. The pipeline automated the build, test, and deployment processes, ensuring quick and reliable updates for the applications.
          </p>
          <p className="mt-4">
            <strong>Problem:</strong> Traditional deployment methods were slow and error-prone, affecting development cycles and time-to-market.
          </p>
          <p className="mt-4">
            <strong>Solution:</strong> By leveraging Kubernetes, Helm, and Jenkins, we built a fully automated pipeline on AWS EKS. The solution ensured seamless scaling and faster application delivery.
          </p>
          <p className="mt-4">
            <strong>Impact:</strong> The new CI/CD pipeline reduced deployment times by 40% and improved application scalability, enabling faster rollouts and consistent updates.
          </p>
          <p className="mt-4">
            <strong>Technologies Used:</strong> Kubernetes, Helm, Jenkins, AWS EKS, Terraform, GitHub Actions.
          </p>
          <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-blue-400 underline">View on GitHub</a> {/* Placeholder for GitHub link */}
          </div>
        </div>
      </div>

      {/* Back and Next Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Back</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Next</button>
      </div>
    </div>
  );
}

export default Projects;

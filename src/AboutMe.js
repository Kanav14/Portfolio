import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/250"
            alt="Kanav Sharma"
            className="rounded-full border-4 border-cyan-400 shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-black mb-4">About Me</h2>
          <p className="text-gray-600 mb-6">
            Hi, I am Kanav Sharma, a DevOps Engineer passionate about building scalable solutions, automation, and improving deployment pipelines.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-cyan-400 text-white font-bold rounded-lg shadow-md hover:bg-cyan-500 transition"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Hello World Section */}
      <section className="flex h-screen">
        {/* Left Half */}
        <div className="flex-1 bg-black text-white flex items-center justify-center">
          <h1 className="text-6xl font-bold">Hello World</h1>
        </div>
        {/* Right Half */}
        <div className="flex-1 bg-efefef flex items-center justify-center">
          <img
            src="your-animation.gif"
            alt="Animation"
            className="w-3/4 max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-3 gap-6">
          <div className="portfolio-card">About Me</div>
          <div className="portfolio-card">Projects</div>
          <div className="portfolio-card">Experience</div>
          <div className="portfolio-card">Education</div>
          <div className="portfolio-card bg-black text-white flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold">Kanav Sharma</h2>
            <p className="text-lg text-cyan-400">DevOps Engineer</p>
          </div>
          <div className="portfolio-card">Certifications</div>
          <div className="portfolio-card">Skills and Knowledge Base</div>
          <div className="portfolio-card">Extra Curricular</div>
          <div className="portfolio-card">Research and Patents</div>
        </div>
      </section>
    </div>
  );
}

export default App;

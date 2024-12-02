import React from 'react';
import './index.css'; // Import Tailwind CSS

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="relative w-[80vw] h-[80vh] border border-white grid grid-cols-3 grid-rows-3">
        {/* Horizontal Lines */}
        <div className="absolute top-1/3 left-0 w-full border-t border-dashed border-white"></div>
        <div className="absolute top-2/3 left-0 w-full border-t border-dashed border-white"></div>

        {/* Vertical Lines */}
        <div className="absolute top-0 left-1/3 h-full border-l border-dashed border-white"></div>
        <div className="absolute top-0 left-2/3 h-full border-l border-dashed border-white"></div>
      </div>
    </div>
  );
}

export default App;

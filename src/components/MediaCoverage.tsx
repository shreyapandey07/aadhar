import React from "react";

const MediaCoverage: React.FC = () => {
  return (
    <div className="bg-white container mx-auto p-4 text-left">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-900 flex items-center">
          <span className="mr-2">📄</span> Media Coverage of Aadhaar
        </h2>
        <a
          href="#"
          className="text-blue-600 font-bold hover:underline hover:text-blue-800"
        >
          View All
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="border rounded-lg shadow-md p-4">
          <h3 className="font-bold text-gray-900 text-left">Aadhaar Brochure 2024</h3>
          <p className="text-sm text-gray-500 mb-2 text-left">23 Aug 2024</p>
          <div className="text-sm text-gray-700 space-x-2 text-left">
            <a
              href="#"
              className="text-blue-600 font-bold hover:underline"
            >
              <span className="mr-1">🔽</span> Download
            </a>
            <span>|</span>
            <span>Type: pdf</span>
            <span>|</span>
            <span>Size: 0.8 MB</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg shadow-md p-4">
          <h3 className="font-bold text-gray-900 text-left">Aadhaar Brochure September 2023</h3>
          <p className="text-sm text-gray-500 mb-2 text-left">1 Sep 2023</p>
          <div className="text-sm text-gray-700 space-x-2 text-left">
            <a
              href="#"
              className="text-blue-600 font-bold hover:underline"
            >
              <span className="mr-1">🔽</span> Download
            </a>
            <span>|</span>
            <span>Type: pdf</span>
            <span>|</span>
            <span>Size: 1.5 MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;

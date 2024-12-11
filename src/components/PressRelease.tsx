import React from "react";

const PressRelease: React.FC = () => {
  return (
    <div className="bg-white container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-900 flex items-center">
          <span className="mr-2">📰</span> Press Release
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
        <div className="border rounded-lg shadow-md p-4 text-left">
          <div className="mb-2">
            <img
              src="aadhaar-logo.png"
              alt="Press Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm mb-2">
            UIDAI sensitizes enrolment agencies to assist divyangjan persons
            in enrolling for Aadhaar
          </h3>
          <p className="text-gray-500 text-sm mb-2">14 Dec 2023</p>
          <div className="text-sm text-gray-700 space-x-2">
            <a
              href="#"
              className="text-blue-600 font-bold hover:underline"
            >
              <span className="mr-1">🔽</span> Download
            </a>
            <span>|</span>
            <span>Type: pdf</span>
            <span>|</span>
            <span>Size: 0.2 MB</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg shadow-md p-4 text-left">
          <div className="mb-2">
            <img
              src="aadhaar-logo.png"
              alt="Press Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm mb-2">
            Aadhaar, the most trusted digital ID in the world — Moody’s
            Investors Service opinions baseless
          </h3>
          <p className="text-gray-500 text-sm mb-2">29 Sep 2023</p>
          <div className="text-sm text-gray-700 space-x-2">
            <a
              href="#"
              className="text-blue-600 font-bold hover:underline"
            >
              <span className="mr-1">🔽</span> Download
            </a>
            <span>|</span>
            <span>Type: pdf</span>
            <span>|</span>
            <span>Size: 0.4 MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressRelease;

import React from "react";

const AadhaarTelecast: React.FC = () => {
  return (
    <div className="bg-white container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-900 flex items-center">
          <span className="mr-2">📺</span> Aadhaar Telecast
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
        <div className="border rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <a
              href="https://www.youtube.com/watch?v=oZxzV9tMTmc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.youtube.com/vi/oZxzV9tMTmc/maxresdefault.jpg"
                alt="Telecast Thumbnail"
                className="w-full h-auto"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 h-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.596 8.697l-5 3A.5.5 0 0 1 6 11.302v-6a.5.5 0 0 1 .796-.396l5 3a.5.5 0 0 1 0 .791z" />
                </svg>
              </button>
            </a>
          </div>
          <div className="p-4 text-left">
            <p className="text-gray-900 font-semibold text-sm mb-2">
              CEO, UIDAI was part of a panel discussion telecasted on Sansad TV
              on Digital Life Certificate 3.0 and how Aadhaar Face
              Authentication is helping pensioners
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <a
              href="https://www.youtube.com/watch?v=QEthG6Ww1N0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.youtube.com/vi/QEthG6Ww1N0/maxresdefault.jpg"
                alt="Telecast Thumbnail"
                className="w-full h-auto"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 h-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.596 8.697l-5 3A.5.5 0 0 1 6 11.302v-6a.5.5 0 0 1 .796-.396l5 3a.5.5 0 0 1 0 .791z" />
                </svg>
              </button>
            </a>
          </div>
          <div className="p-4 text-left">
            <p className="text-gray-900 font-semibold text-sm mb-2">
              Abhinav Pahal 2.0: Aadhaar-based Face Authentication and how it
              is touching lives and improving ease of living for residents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadhaarTelecast;

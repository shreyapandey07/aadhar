import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-400">
      <div className="container mx-auto flex items-center justify-between py-4 ">
        {/* Left Section - Emblem */}
        <div className="flex-shrink-2">
          <img
            src="/india-emblem.png" // Replace with actual URL or path
            alt="India Emblem"
            className="h-14"
          />
        </div>

        {/* Spacer for pushing content to edges */}
        <div className="flex-grow"></div>

        {/* Right Section - Aadhaar Logo */}
        <div className="flex-shrink-0">
          <img
            src="/aadhaar-logo.png" // Replace with actual URL or path
            alt="Aadhaar Logo"
            className="h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

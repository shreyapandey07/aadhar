import React from "react";
import { FaChartLine } from "react-icons/fa"; // Import an icon for the "Aadhaar in Numbers" section

const AadhaarInNumbers: React.FC = () => {
  return (
    <div className="container mx-auto bg-white p-6">
      <div className="flex items-center mb-4">
        {/* Icon */}
        <FaChartLine className="text-blue-800 text-lg mr-2" />
        {/* Title */}
        <h2 className="text-gray-800 text-xl font-bold">Aadhaar in Numbers</h2>
      </div>

      {/* Tabs or Links */}
      
      <span className="text-blue-800 font-semibold hover:underline cursor-pointer">
          Aadhaar Generated 
        </span> <span>|</span>
            <span className="text-blue-800 font-semibold hover:underline cursor-pointer">
          Authentication Done
        </span> 
            
    

      {/* Additional Links */}
      <div className="text-sm text-left">
        <span className="text-blue-800 font-semibold hover:underline cursor-pointer">
          Aadhaar Saturation Report
        </span> <span>|</span>
        <span className="text-gray-600 ml-2">
          Type: pdf Size: 0.5MB
        </span> <span>|</span>
        <a
          href="#"
          className="text-blue-800 font-semibold ml-4 hover:underline"
        >
          View On Dashboard
        </a>
      </div>
    </div>
  );
};

export default AadhaarInNumbers;

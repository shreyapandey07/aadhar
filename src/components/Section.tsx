import React from "react";
import { FaTv, FaBookOpen } from "react-icons/fa"; // Import icons
import { MdTranslate } from "react-icons/md";

const UtilityBar: React.FC = () => {
  return (
    <div className="bg-white text-blue-800 text-sm py-2 mt-10 border-b border-black">
      <div className="container mx-auto flex justify-end items-center space-x-4 px-4">
        {/* Main Content */}
        <div className="flex items-center space-x-1">
          <FaTv />
          <a href="#" className="hover:underline">
            Main Content |
          </a>
        </div>
        

        {/* Font Size Adjustments */}
        <div className="flex items-center space-x-2">
          <span> A  A+  A- |</span>
        </div>

        
        {/* Screen Reader */}
        <div className="flex items-center space-x-1">
          <FaBookOpen />
          <a href="#" className="hover:underline">
            Screen Reader |
          </a> 
        </div>
       

        {/* Language Dropdown */}
        <div className="flex items-center space-x-1">
          <MdTranslate />
          <select className="bg-transparent focus:outline-none">
            <option>English</option>
            <option>हिंदी</option>
            <option>অসমীয়া</option>
            <option>বাংলা</option>
            <option>ಕನ್ನಡ</option>
            <option>ગુજરાતી</option>
            <option>മലയാളം</option>
            <option>मराठी</option>
            <option>ଓଡ଼ିଆ</option>
            <option>ਪੰਜਾਬੀ</option>
            <option>தமிழ்</option>
            <option>తెలుగు</option>
            <option>اردو</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;

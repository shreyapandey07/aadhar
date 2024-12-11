import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation for route management
import { FaChevronDown } from "react-icons/fa";
import AadhaarSection from "./AadhaarSection"; // Import AadhaarSection
import AboutUIDAISection from "./AboutUIDAISection";
import MediaAndResourcesSection from "./MediaAndResourcesSection";
import HelpAndSupportSection from "./HelpAndSupportSection";
import EcosystemSection from "./EcosystemSection";

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation(); // Detect current route

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {[
            {
              label: "My Aadhaar",
              component: <AadhaarSection />, // AadhaarSection as the dropdown content
              key: "my-aadhaar",
              path: "/my-aadhaar", // Route for My Aadhaar Page
            },
            { label: "About UIDAI", component: <AboutUIDAISection />, key: "uidai" },
            { label: "Ecosystem", component: <EcosystemSection />, key: "ecosystem" },
            { label: "Media & Resources", component: <MediaAndResourcesSection />, key: "media" },
            { label: "Contact & Support", component: <HelpAndSupportSection />, key: "support" },
          ].map((item) => (
            <li
              key={item.key}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
            >
              {/* If the item has a path, make it clickable */}
              <Link
                to={item.path || "#"}
                className="flex items-center space-x-1 hover:underline focus:outline-none"
              >
                <span className="font-semibold text-sm">{item.label}</span>
                <FaChevronDown className="text-xs" />
              </Link>

              {/* Dropdown Menu */}
              {activeDropdown === item.key && (
                <div
                  className="absolute top-full bg-white text-black shadow-lg z-50 border-t border-gray-200"
                  style={{
                    minWidth: "800px", // Adjust dropdown width
                    maxWidth: "90vw", // Ensure it doesn't overflow horizontally
                  }}
                >
                  {item.component}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="flex items-center bg-blue-700 py-1 px-2 rounded">
          <span className="text-white text-xs mr-2">Search</span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-white placeholder-gray-300 focus:outline-none border-b border-gray-300 focus:border-white"
          />
          <button className="ml-2 text-xs bg-white text-blue-700 px-2 py-1 rounded hover:bg-gray-100">
            Go
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

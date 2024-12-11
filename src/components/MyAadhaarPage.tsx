import React from "react";

// Import all your components here
// Header Component with Logos
import InfoSection from "./InfoSection";
import InfoCardsSection from "./InfoCardsSection";
import MediaCoverage from "./MediaCoverage";
import AadhaarTelecast from "./AadhaarTelecast";
import PressRelease from "./PressRelease";
import AadhaarNumbers from "./AadhaarNumbers";
import FAQWithPost from "./FAQWithPost";
// Example for another component
// Import the rest of your 8 components here...

const MyAadhaarPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      

      {/* Combine all components */}
      <div className="space-y-8">
      

      <>
                
                <div className="flex flex-col sm:flex-row sm:space-x-6 px-4">
                  {/* Left Side: InfoCardsSection */}
                  <div className="sm:w-2/3">
                    <InfoCardsSection />
                    <MediaCoverage />
                    <AadhaarTelecast />
                    <PressRelease />
                    <AadhaarNumbers />
                  </div>
                  {/* Right Side: FAQ */}
                  <FAQWithPost />
                </div>
              </>
     
      </div>
    </div>
  );
};

export default MyAadhaarPage;

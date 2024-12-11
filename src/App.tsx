import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Header from "./components/Header"; // Header Component with Logos
import InfoSection from "./components/InfoSection"; // Information Section
import InfoCardsSection from "./components/InfoCardsSection"; // Cards Section
import MediaCoverage from "./components/MediaCoverage"; // Media Coverage Section
import AadhaarTelecast from "./components/AadhaarTelecast"; // Aadhaar Telecast Section
import PressRelease from "./components/PressRelease"; // Press Release Section
import AadhaarNumbers from "./components/AadhaarNumbers"; // Aadhaar Numbers Statistics
import FAQWithPost from "./components/FAQWithPost"; // FAQ Section
import CheckAadhaarStatus from "./components/CheckAadhaarStatus"; // Check Aadhaar Status Component
import Footer from "./components/footer"; // Footer Component
import UpdateDemographicsStatus from "./components/UpdateDemographicsStatus"; // Update Demographics Status Page
import Navbar from "./components/Navbar"; // Navigation Bar
import Section from "./components/Section"; // Top Section
import Login from "./components/Login"; // Login Component
import MyAadhaarPage from "./components/MyAadhaarPage"; // Combined Page for "My Aadhaar"
import "./App.css"; // Stylesheet
import Carousel from "./components/Carousel";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Static Components */}
        <Section /> {/* Top Section */}
        <Header /> {/* Header with logo */}
        <Navbar /> {/* Navigation Bar */}
      
        <Carousel /> 
        <InfoSection />
        {/* Dynamic Content with Routing */}
        <Routes>
          {/* Main Page Route */}
          <Route
            path="/"
            element={
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
            }
          />

          {/* Route: Check Aadhaar Status */}
          <Route path="/check-aadhaar-update-status" element={<CheckAadhaarStatus />} />

          {/* Route: Update Demographics Status */}
          <Route path="/update-demographics-status" element={<UpdateDemographicsStatus />} />

          {/* Route: Login */}
          <Route path="/update-demographics-status/login" element={<Login />} />

          {/* Route: My Aadhaar Page */}
          <Route path="/my-aadhaar" element={<MyAadhaarPage />} />
        </Routes>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

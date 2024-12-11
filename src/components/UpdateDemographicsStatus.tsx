import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const UpdateDemographicsStatus: React.FC = () => {
  return (
    <div className="bg-white container mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-900">Welcome to myAadhaar</h1>
        <p className="text-gray-700 mt-4">
          Click on Login button to explore online demographics update service,
          Aadhaar PVC card ordering & tracking, and more value-added services
          offered by UIDAI. Your mobile number is required to be registered
          with the Aadhaar to login.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-lg p-6 shadow-lg">
        {/* Left Section */}
        <div className="text-left">
          <h2 className="text-3xl font-bold">Welcome to myAadhaar</h2>
          <p className="mt-4">
            Click on Login button to explore online demographics update service,
            Aadhaar PVC card ordering & tracking, and more value-added services
            offered by UIDAI. Your mobile number is required to be registered
            with the Aadhaar to login.
          </p>
        </div>

        {/* Right Section: Login */}
        <div className="bg-white text-black p-6 w-300 h-300 rounded-lg shadow-lg mt-6 md:mt-0">
          <div className="flex flex-col items-center w-300 h-300 ">
            <img
              src="Fingerprint.png" // Add your fingerprint image path
              alt="Fingerprint"
              className="w-250 h-200"
            />
            {/* Login Button as Link */}
            <Link
              to="/update-demographics-status/login"
              className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-2 px-6 rounded-md mt-4 font-bold text-center"
            >
              Login
            </Link>
            <p className="text-sm mt-2">Login with Aadhaar and OTP</p>
          </div>
        </div>
      </div>

      {/* Language Options */}
      <div className="text-center mt-6">
        <div className="flex flex-wrap justify-center space-x-4">
          {["English", "हिंदी", "বাংলা", "ಕನ್ನಡ", "ગુજરાતી", "മലയാളം", "मराठी", "ଓଡ଼ିଆ", "ਪੰਜਾਬੀ", "தமிழ்", "తెలుగు", "اردو"].map(
            (language, index) => (
              <span
                key={index}
                className="text-blue-900 font-semibold cursor-pointer hover:underline"
              >
                {language}
              </span>
            )
          )}
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-around mt-6 border-t pt-4 text-center">
        <a href="#" className="text-blue-900 hover:underline">
          Aadhaar Enrolment & Update Charges
        </a>
        <a href="#" className="text-blue-900 hover:underline">
          Enrolment & Update Forms
        </a>
        <a href="#" className="text-blue-900 hover:underline">
          List of Supporting Documents for Aadhaar Enrolment & Update
        </a>
      </div>
    </div>
  );
};

export default UpdateDemographicsStatus;

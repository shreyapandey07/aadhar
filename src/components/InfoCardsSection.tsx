import React from "react";

const InfoCardsSection: React.FC = () => {
  return (
    <div className="bg-white container mx-auto p-4 text-left">
      {/* Top Banner */}
      <div className="relative bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-4 rounded-md">
        {/* Orange Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 rounded-t-md"></div>
        <p>
          <strong>Observance of Vigilance Awareness Week 2024</strong> From
          28.10.2024 to 03.11.2024 on theme "Culture of Integrity for Nation's
          Prosperity"
        </p>
        <a
          href="#"
          className="text-blue-600 underline font-bold hover:text-blue-800"
        >
          Integrity Pledge
        </a>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        {/* Card 1 */}
        <div className="relative border rounded-lg shadow-md p-4 flex items-start">
          {/* Blue Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-800 rounded-t-md"></div>
          <div className="text-blue-800 text-4xl font-bold flex-shrink-0 mr-4">
            🛠️
          </div>
          <div>
            <h3 className="text-blue-800 text-xl font-bold mb-2">
              Update Aadhaar ›
            </h3>
            <p className="text-green-600 font-semibold">
              Keep your Aadhaar details up-to-date.
            </p>
            <p className="text-gray-700 text-sm mt-2">
              It is essential that your Aadhaar Data is correct and remains
              updated always.
            </p>
            <div className="mt-3 text-sm text-blue-600">
              <a href="#" className="hover:underline">
                Check Aadhaar Update Status
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Update Demographics Data & Check Status
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Enrolment & Update Forms
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Aadhaar Enrolment & Update Charges
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Aadhaar Update History
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative border rounded-lg shadow-md p-4 flex items-start">
          {/* Blue Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-800 rounded-t-md"></div>
          <div className="text-blue-800 text-4xl font-bold flex-shrink-0 mr-4">
            📄
          </div>
          <div>
            <h3 className="text-blue-800 text-xl font-bold mb-2">
              Get Aadhaar ›
            </h3>
            <p className="text-green-600 font-semibold">
              Aadhaar is for every Resident of India.
            </p>
            <p className="text-gray-700 text-sm mt-2">
              From a newborn to a senior citizen, everyone can enrol for
              Aadhaar.
            </p>
            <div className="mt-3 text-sm text-blue-600">
              <a href="#" className="hover:underline">
                Book an Appointment
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Check Aadhaar Status
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Download Aadhaar
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Order Aadhaar PVC Card
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Check Aadhaar PVC Card Status
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Aadhaar Enrolment & Update Charges
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Enrolment & Update Forms
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative border rounded-lg shadow-md p-4 flex items-start">
          {/* Blue Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-800 rounded-t-md"></div>
          <div className="text-blue-800 text-4xl font-bold flex-shrink-0 mr-4">
            📋
          </div>
          <div>
            <h3 className="text-blue-800 text-xl font-bold mb-2">
              Aadhaar Services ›
            </h3>
            <p className="text-green-600 font-semibold">
              An array of services for Aadhaar holders
            </p>
            <p className="text-gray-700 text-sm mt-2">
              Aadhaar Registered Mobile number is essential to access the
              following services.
            </p>
            <div className="mt-3 text-sm text-blue-600">
              <a href="#" className="hover:underline">
                Verify an Aadhaar Number
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Verify Email/Mobile Number
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Virtual ID (VID) Generator
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Aadhaar Paperless Offline e-kyc (Beta)
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Lock/Unlock Biometrics
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCardsSection;

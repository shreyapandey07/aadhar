import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// Define the Aadhaar categories data
const categories = [
  {
    title: "Update Your Aadhaar",
    items: [
      { label: "Document Update", path: "/document-update" },
      { label: "Check Aadhaar Update Status", path: "/check-aadhaar-update-status" },
      { label: "Update Demographics Data & Check Status", path: "/update-demographics-status" },
      { label: "Enrolment & Update Forms", path: "/enrolment-update-forms" },
      { label: "Aadhaar Enrolment & Update Charges", path: "/update-charges" },
      { label: "Aadhaar Update History", path: "/update-history" },
      { label: "Update Aadhaar at Enrolment/Update Center", path: "/enrolment-center" },
    ],
  },
  {
    title: "Get Aadhaar",
    items: [
      { label: "Book an Appointment", path: "/book-appointment" },
      { label: "Check Aadhaar Status", path: "/check-aadhaar-status" },
      { label: "Download Aadhaar", path: "/download-aadhaar" },
      { label: "Order Aadhaar PVC Card", path: "/order-aadhaar" },
      { label: "Check Aadhaar PVC Card Status", path: "/check-pvc-card-status" },
      { label: "Locate an Enrolment Center in Bhuvan Aadhaar", path: "/locate-enrolment-center" },
      { label: "Aadhaar Enrolment & Update Charges", path: "/enrolment-update-charges" },
      { label: "Enrolment & Update Forms", path: "/update-forms" },
    ],
  },
  {
    title: "Aadhaar Services",
    items: [
      { label: "Verify an Aadhaar Number", path: "/verify-aadhaar" },
      { label: "Verify Email/Mobile Number", path: "/verify-email-mobile" },
      { label: "Retrieve Lost or Forgotten EID/UID", path: "/retrieve-eid-uid" },
      { label: "Virtual ID (VID) Generator", path: "/virtual-id-generator" },
      { label: "Aadhaar Paperless Offline e-KYC (Beta)", path: "/aadhaar-paperless-kyc" },
      { label: "Bank Seeding Status", path: "/bank-seeding-status" },
      { label: "Check Aadhaar Validity", path: "/check-validity" },
      { label: "Lock/Unlock Biometrics", path: "/lock-unlock-biometrics" },
    ],
  },
  {
    title: "About Your Aadhaar",
    items: [
      { label: "Features of Aadhaar", path: "/features" },
      { label: "Usage of Aadhaar", path: "/usage" },
      { label: "Aadhaar Enrolment", path: "/enrolment" },
      { label: "Aadhaar Generation", path: "/generation" },
      { label: "Updating Data on Aadhaar", path: "/updating-data" },
      { label: "Security in UIDAI System", path: "/security" },
      { label: "Aadhaar Myth Busters", path: "/myth-busters" },
    ],
  },
  {
    title: "Aadhaar on Your Mobile",
    items: [
      { label: "mAadhaar for Android", path: "/maadhaar-android" },
      { label: "mAadhaar App Links for iOS", path: "/maadhaar-ios" },
      { label: "Enrolment and Update Forms", path: "/mobile-update-forms" },
      { label: "Aadhaar Enrolment and Update Charges", path: "/mobile-update-charges" },
      { label: "Validity of Downloaded Aadhaar as Proof of Identity", path: "/aadhaar-proof-validity" },
      { label: "New eAadhaar Doc Type", path: "/new-eaadhaar-doc" },
      { label: "Handbooks", path: "/handbooks" },
      { label: "List of Supporting Documents", path: "/supporting-documents" },
    ],
  },
];

const AadhaarSection: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm px-6 py-6 bg-white">
      {categories.map((category, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-bold text-black">{category.title}</h3>
          <ul className="space-y-1">
            {category.items.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-600 hover:underline py-1/2 cursor-pointer"
                onClick={() => navigate(item.path)} // Navigate to the corresponding path
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AadhaarSection;

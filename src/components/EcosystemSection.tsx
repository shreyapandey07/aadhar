import React from "react";

// Define a type for dropdown categories
type EcosystemCategory = {
  title: string;
  items: string[];
};

// Data for the Ecosystem dropdown
const ecosystemCategories: EcosystemCategory[] = [
  {
    title: "UIDAI Ecosystem",
    items: [],
  },
  {
    title: "Enrolment Ecosystem",
    items: ["Registrars", "Enrolment Agencies", "Aadhaar Seva Kendra"],
  },
  {
    title: "Enrolment Documents",
    items: [
      "Sanction Orders",
      "Aadhaar Saturation Report, PDF 0.448 MB",
      "Terms of Engagement (TOE)",
    ],
  },
  {
    title: "Authentication Ecosystem",
    items: [
      "Operation Model",
      "Authentication Requesting Agency",
      "Authentication Service Agencies",
    ],
  },
  {
    title: "Authentication Devices & Documents",
    items: [
      "Biometric Devices",
      "QR Code Reader",
      "About Aadhaar Paperless Offline e-KYC",
      "Developer Section",
      "Authentication Documents",
    ],
  },
  {
    title: "Training, Testing & Certification Ecosystem",
    items: [
      "Training, Testing, and Certification Policy 2023 Doc Type: 1.1 MB",
      "SOP for Training, Testing and Certification of E&U Operators",
      "Annual Training Calendar 2023-24 Doc Type: PDF Size: 1.6 MB",
      "Corrigendum to Standard Operating Procedure (SOP)",
    ],
  },
];

const EcosystemSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-sm px-6 py-4 bg-white">
      {ecosystemCategories.map((category, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-bold text-black">{category.title}</h3>
          <ul className="space-y-1">
            {category.items.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-600 hover:underline py-1/2 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EcosystemSection;

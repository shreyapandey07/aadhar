import React from "react";

// Define a type for dropdown categories
type UIDAICategory = {
  title: string;
  items: string[];
};

// Data for the About UIDAI dropdown
const aboutUIDAICategories: UIDAICategory[] = [
  {
    title: "Unique Identification Authority Of India",
    items: [
      "Vision & Mission",
      "Composition of UIDAI Authority",
      "Organizational Structure",
      "Finance & Accounts",
    ],
  },
  {
    title: "Legal Framework",
    items: [
      "Rules",
      "Notifications",
      "Regulations",
      "Circulars",
      "Judgements",
      "Updated Regulations",
      "Updated Rules",
    ],
  },
  {
    title: "Work With UIDAI",
    items: [
      "Deputation/Contract",
      "Professional/Technical (NISG)",
      "Volunteers/Sabbatical",
      "Officers Served in the Past",
      "Tenders",
      "Internship in UIDAI",
      "Young Professional Hiring Policy",
      "Advertisement for Hiring of Technical Consultants",
    ],
  },
  {
    title: "Right To Information",
    items: [
      "UIDAI Citizens Charter",
      "Archives",
      "Aadhaar Dashboard",
      "POSH Policy And ICC At UIDAI",
    ],
  },
];

const AboutUIDAISection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm px-6 py-4 bg-white">
      {aboutUIDAICategories.map((category, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-bold text-black">{category.title}</h3>
          <ul className="space-y-1">
            {category.items.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-600 hover:underline py-1 cursor-pointer"
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

export default AboutUIDAISection;

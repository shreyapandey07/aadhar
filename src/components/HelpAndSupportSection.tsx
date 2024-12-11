import React from "react";

// Define a type for dropdown categories
type HelpSupportCategory = {
  title: string;
  items: string[];
};

// Data for the Help & Support dropdown
const helpSupportCategories: HelpSupportCategory[] = [
  {
    title: "Have Any Question?",
    items: [
      "FAQs",
      "Glossary",
      "Aadhaar Usage-Dos and Don'ts Doc Type: PDF Size: 0.1 MB",
    ],
  },
  {
    title: "Grievance Redressal Mechanism",
    items: ["Grievance and Feedback", "Check Grievance / Feedback Status"],
  },
  {
    title: "Right To Information",
    items: ["Head Office (HO)"],
  },
  {
    title: "Feedback",
    items: ["Feedback", "Regional Offices"],
  },
];

const HelpAndSupportSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm px-6 py-4 bg-white">
      {helpSupportCategories.map((category, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-bold text-black">{category.title}</h3>
          <ul className="space-y-1">
            {category.items.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-600 py-1 hover:underline cursor-pointer"
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

export default HelpAndSupportSection;

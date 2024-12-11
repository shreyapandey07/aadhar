import React from "react";

// Define a type for dropdown categories
type MediaResourcesCategory = {
  title: string;
  items: string[];
};

// Data for the Media & Resources dropdown
const mediaResourcesCategories: MediaResourcesCategory[] = [
  {
    title: "Media",
    items: [
      "Aadhaar Broadcast",
      "Quote/Unquote",
      "Archive Press Releases",
      "Press Releases",
    ],
  },
  {
    title: "Resources",
    items: ["Advertisements", "Photos", "Videos"],
  },
  {
    title: "UIDAI Documents",
    items: ["Annual Reports", "Handbooks", "Compendium", "Parliament Questions"],
  },
  {
    title: "Brand Aadhaar",
    items: ["Logo"],
  },
];

const MediaAndResourcesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm px-6 py-4 bg-white">
      {mediaResourcesCategories.map((category, index) => (
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

export default MediaAndResourcesSection;

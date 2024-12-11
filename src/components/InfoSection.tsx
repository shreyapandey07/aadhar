import React from "react";

const InfoSection: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white py-2">
      <div className="container mx-auto flex flex-wrap justify-start text-sm space-x-3 ml-20 group">
        <a href="#" className="hover:underline group-hover:text-red-500">
          Aadhaar Seva Kendra
        </a>
        <span>|</span>
        <a href="#" className="hover:underline group-hover:text-red-500">
          Aadhaar Enrolment & Update Charges
        </a>
        <span>|</span>
        <a href="#" className="hover:underline group-hover:text-red-500">
          Enrolment & Update Forms
        </a>
        <span>|</span>
        <a href="#" className="hover:underline group-hover:text-red-500">
          List of Supporting Documents for Aadhaar Enrolment & Update
        </a>
        <span>|</span>
        <a href="#" className="hover:underline group-hover:text-red-500">
          Download mAadhaar: <span className="font-bold">Android</span> |{" "}
          <span className="font-bold">iOS</span>
        </a>
        <span>|</span>
        <a href="#" className="hover:underline group-hover:text-red-500">
          Circulars, Notifications & OMs
        </a>
        <span>|</span>
        <a href="#" className="hover:underline group-hover:text-red-500">
          Grievance / Feedback
        </a>
        <span>|</span>
        <a href="#" className="hover:underline group-hover:text-red-500">
          RTI
        </a>
      </div>
    </div>
  );
};

export default InfoSection;

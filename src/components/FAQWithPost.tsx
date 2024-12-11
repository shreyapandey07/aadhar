import React, { useState } from "react";
import { FaHeart, FaRetweet } from "react-icons/fa"; // Import icons for likes and retweets

const FAQWithPost: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      title: "Use Aadhaar Freely",
      content: [
        "Recently, UIDAI has issued an advisory...",
        "If Aadhaar has to be freely used for authentication...",
        "Why am I asked to verify Bank Account...",
        "Does linking my bank account, PAN...",
      ],
    },
    {
      title: "E-Aadhaar",
      content: [
        "How to validate digital signatures in e-Aadhaar?",
        "What supporting software is needed for e-Aadhaar?",
        "What is the Password of e-Aadhaar?",
        "What is Masked Aadhaar?",
      ],
    },
    {
      title: "mAadhaar FAQs",
      content: [
        "Is there any process to update the app?",
        "Is it compulsory to have a registered mobile number?",
        "How Aadhaar number holder can lock biometrics?",
        "Where can mAadhaar be used?",
      ],
    },
    {
      title: "Aadhaar Paperless Offline e-kyc",
      content: [
        "Where can I find the Public",
        "How this Aadhaar Offline Paperless",
        "Can this Offline Paperless eKYC",
        "How will service providers use",
        "How to share this Paperless Offline",
        "Who are the users of this Aadhaar",
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full sm:w-1/3 bg-white p-4">
      {/* FAQ Section */}
      <h2 className="text-blue-900 text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">❓</span> Frequently Asked Questions
      </h2>
      <ul>
        {faqs.map((faq, index) => (
          <li
            key={index}
            className={`m border rounded-lg shadow-md ${
              openIndex === index ? "bg-white " : "bg-white"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-4 py-2 font-bold text-black hover:text-blue-600 focus:outline-none"
            >
              {faq.title}
              <span className="text-lg font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <ul className="pl-6 pr-4 pb-4 pt-2 text-black text-sm">
                {faq.content.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* UIDAIPost Section */}
      <div className="mt-6 max-w-sm border rounded-lg shadow-md bg-white">
        {/* Header */}
        <div className="border-b p-3 flex justify-between items-center">
          <h2 className="text-blue-900 font-bold text-sm">Posts from @UIDAI</h2>
          <button className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        {/* Post Content */}
        <div className="p-3  max-w-sm border rounded-lg shadow-md bg-white">
          {/* Post Header */}
          <div className="flex items-center space-x-2 mb-2">
            <img
              src="aadhaar-logo.png"
              alt="Aadhaar Logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold text-sm">Aadhaar</p>
              <p className="text-gray-400 text-xs">@UIDAI · Apr 11</p>
            </div>
          </div>

          {/* Post Text */}
          <p className="text-sm mb-2">
            <span className="text-blue-600 font-bold">#आधार</span> की ओर से ईद
            की हार्दिक शुभकामनाएं!
          </p>

          {/* Post Image */}
          <img
            src="postimg1.png"
            alt="Post Image"
            className="w-full rounded-md mb-2"
          />

          {/* Post Footer */}
          <div className="text-gray-400 text-xs mb-2">
            Ministry of Electronics & IT and 3 others
          </div>

          {/* Reactions */}
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-1">
              <FaRetweet className="text-blue-600" />
              <span>168</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaHeart className="text-red-600" />
              <span>10K</span>
            </div>
          </div>
        </div>
        {/* Post Content */}
        <div className="p-3 max-w-sm border rounded-lg shadow-md bg-white">
          {/* Post Header */}
          <div className="flex items-center space-x-2 mb-2">
            <img
              src="aadhaar-logo.png"
              alt="Aadhaar Logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold text-sm">Aadhaar</p>
              <p className="text-gray-400 text-xs">@UIDAI · Sep 30 ,2017</p>
            </div>
          </div>

          {/* Post Text */}
          <p className="text-sm mb-2">
            <span className="text-blue-600 font-bold"></span> जानें आधार में POI/POA 
            दस्तावेज कैसे अपलोड करें?
          </p>

          {/* Reactions */}
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-1">
              <FaRetweet className="text-blue-600" />
              <span>161</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaHeart className="text-red-600" />
              <span>11K</span>
            </div>
          </div>
          </div>
          <div className="p-3 max-w-sm border rounded-lg shadow-md bg-white">
          {/* Post Header */}
          <div className="flex items-center space-x-2 mb-2">
            <img
              src="aadhaar-logo.png"
              alt="Aadhaar Logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold text-sm">Aadhaar</p>
              <p className="text-gray-400 text-xs">@UIDAI · Aug1 ,2023</p>
             
            </div>
          </div>

          {/* Post Text */}
          <p className="text-sm mb-2">
            <span className="text-blue-600 font-bold"></span> 
           
          </p> <p> यह सेवा 14 दिसंबर, 2023 तक 
            http://myaadhaar.uidai.gov.in पर निःशुल्क उपलब्ध है।</p>

          {/* Reactions */}
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-1">
              <FaRetweet className="text-blue-600" />
              <span>115</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaHeart className="text-red-600" />
              <span>3K</span>
            </div>
          </div>
          </div>
          </div>
          <div className="mt-4">
          <img
            src="ad1.png"
            alt="Advertisement"
            className="w-full mt-6 rounded-md"
          />
        </div> 
      
    </div>
  );
};

export default FAQWithPost;

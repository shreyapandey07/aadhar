import React, { useState } from "react";

const CheckAadhaarStatus: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Enrolment ID");
  const [captcha, setCaptcha] = useState<string>("b3n6f6"); // Initial captcha

  const regenerateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substr(2, 6); // Generate random captcha
    setCaptcha(randomCaptcha);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Flex container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Form */}
        <div className="flex-1 bg-transparent p-6 shadow-md rounded-lg">
          <h1 className="text-xl font-bold text-black mb-4">Check Aadhaar Status</h1>

          {/* Option Selector */}
          <div className="mb-4">
            <label className="block font-semibold text-black mb-2">Choose an option:</label>
            <div className="flex items-center space-x-4">
              {["Enrolment ID", "SRN", "URN"].map((option) => (
                <label key={option} className="flex items-center text-black">
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Conditional Form Rendering */}
          <form>
            {selectedOption === "Enrolment ID" && (
              <>
                <div className="mb-4">
                  <input
                    type="text"
                    id="enrolmentNumber"
                    className="w-full bg-transparent border-none focus:outline-none text-black text-lg"
                    placeholder="Enter 14-digit Enrolment Number"
                  />
                  <div className="border-b-2 border-black mt-1"></div>
                </div>
                <p className="text-sm text-black mb-2">
                  Mention date and time as per the acknowledgement slip (optional)
                </p>
                <div className="mb-4">
                  <input
                    type="date"
                    id="enrolmentDate"
                    className="w-full bg-transparent border-none focus:outline-none text-black text-lg"
                    placeholder="Enter Date"
                  />
                  <div className="border-b-2 border-black mt-1"></div>
                </div>
                <div className="mb-4">
                  <input
                    type="time"
                    id="enrolmentTime"
                    className="w-full bg-transparent border-none focus:outline-none text-black text-lg"
                    placeholder="Enter Time"
                  />
                  <div className="border-b-2 border-black mt-1"></div>
                </div>
              </>
            )}

            {selectedOption === "SRN" && (
              <div className="mb-4">
                <input
                  type="text"
                  id="srnNumber"
                  className="w-full bg-transparent border-none focus:outline-none text-black text-lg"
                  placeholder="Enter SRN"
                />
                <div className="border-b-2 border-black mt-1"></div>
              </div>
            )}

            {selectedOption === "URN" && (
              <div className="mb-4">
                <input
                  type="text"
                  id="urnNumber"
                  className="w-full bg-transparent border-none focus:outline-none text-black text-lg"
                  placeholder="Enter URN"
                />
                <div className="border-b-2 border-black mt-1"></div>
              </div>
            )}

            {/* Captcha Section */}
            <div className="mb-4">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  id="captcha"
                  className="w-full bg-transparent border-none focus:outline-none text-black text-lg"
                  placeholder="Enter Captcha"
                />
                <div className="flex items-center space-x-2">
                  <span className="text-black font-semibold">{captcha}</span>
                  <button
                    type="button"
                    onClick={regenerateCaptcha}
                    className="text-blue-600 underline"
                  >
                    Refresh
                  </button>
                </div>
              </div>
              <div className="border-b-2 border-black mt-1"></div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section: FAQs */}
        <div className="flex-1 bg-gray-100 p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded p-4">
              <summary className="font-semibold text-black">What details can I update online?</summary>
              <p className="mt-2 text-black">
                You can update your demographic details such as name, address, and date of birth.
              </p>
            </details>
            <details className="bg-white rounded p-4">
              <summary className="font-semibold text-black">Is there a fee for online updates?</summary>
              <p className="mt-2 text-black">Yes, a small fee is required for demographic updates.</p>
            </details>
            <details className="bg-white rounded p-4">
              <summary className="font-semibold text-black">How many times can I update my Aadhaar?</summary>
              <p className="mt-2 text-black">
                You can update address multiple times. Other details have specific limits.
              </p>
            </details>
            <details className="bg-white rounded p-4">
              <summary className="font-semibold text-black">
                What documents are needed for address update?
              </summary>
              <p className="mt-2 text-black">You need valid address proof like utility bills or bank statements.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAadhaarStatus;

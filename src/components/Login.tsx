import React, { useState } from "react";

const Login: React.FC = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [captcha, setCaptcha] = useState("");

  const isFormValid = aadhaarNumber.length > 0 && captcha.length > 0;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Login Box */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto mt-8">
        <h2 className="text-center text-blue-900 text-lg font-semibold mb-4">
          Login to Aadhaar via OTP
        </h2>

        {/* Form */}
        <form>
          <div className="mb-6">
            <input
              type="text"
              id="aadhaar-number"
              className="w-full bg-transparent border-none focus:outline-none text-black text-lg"
              placeholder="Enter Aadhaar Number"
              value={aadhaarNumber}
              onChange={(e) => setAadhaarNumber(e.target.value)}
            />
            <div className="border-b-2 border-black"></div>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <div className="flex-grow">
                <input
                  type="text"
                  id="captcha"
                  className="w-full bg-transparent border-none focus:outline-none text-black text-lg"
                  placeholder="Enter Captcha"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                />
                <div className="border-b-2 border-black"></div>
              </div>
              <img
                src="/Captcha.png"
                alt="Captcha"
                className="ml-3 h-10 w-32 border"
              />
              
            </div>
          </div>

          <button
            type="submit"
            className={`w-full font-semibold py-2 rounded ${
              isFormValid
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-400 text-gray-800 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Login With OTP
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-white py-3 text-center text-sm mt-80">
        Copyright © 2024 Unique Identification Authority of India. All Rights
        Reserved.
      </footer>
    </div>
  );
};

export default Login;

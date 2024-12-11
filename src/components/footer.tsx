import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4 lg:px-10 max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <div className="border border-white p-4 rounded mb-2">
            <p className="text-xl font-medium flex items-center">📞 Toll-free: 1947</p>
          </div>
          <div className="border border-white p-4 rounded">
            <p className="text-xl font-medium flex items-center">📧 help@uidai.gov.in</p>
          </div>
          <h4 className="font-bold text-lg mt-4">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white text-2xl hover:text-gray-300"><FaFacebook /></a>
            <a href="#" className="text-white text-2xl hover:text-gray-300"><FaYoutube /></a>
            <a href="#" className="text-white text-2xl hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="text-white text-2xl hover:text-gray-300"><FaLinkedin /></a>
            <a href="#" className="text-white text-2xl hover:text-gray-300"><FaTwitter /></a>
          </div>
          <p className="mt-4 text-sm">
            To Collaborate, email us at: collaborate[at]uidai[dot]net
          </p>
        </div>

        {/* UIDAI Head Office */}
        <div>
          <h3 className="font-bold text-lg mb-2">UIDAI Head Office</h3>
          <p>
            Unique Identification Authority of India (GoI)<br />
            Bangla Sahib Road, Behind Kali Mandir, Gole Market,<br />
            New Delhi - 110001
          </p>
          <h4 className="font-bold text-lg mt-4">Regional Offices</h4>
          <select className="bg-white text-black mt-2 p-2 rounded w-full">
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Kolkata</option>
          </select>
          <div className="mt-4">
            <p className="font-bold">UIDAI Regional Office, Delhi</p>
            <p>Ground Floor, Supreme Court Metro Station, Pragati Maidan, New Delhi - 110001</p>
          </div>
        </div>

        {/* Website Policy */}
        <div>
          <h3 className="font-bold text-lg mb-2">Website Policy</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Hyperlinking Policy</a></li>
            <li><a href="#" className="hover:underline">Copyright Policy</a></li>
            <li><a href="#" className="hover:underline">Disclaimer</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Feedback</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>

        {/* Government of India */}
        <div>
          <h3 className="font-bold text-lg mb-2">Government of India</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">My Gov</a></li>
            <li><a href="#" className="hover:underline">National Portal of India</a></li>
            <li><a href="#" className="hover:underline">Digital India</a></li>
            <li><a href="#" className="hover:underline">GST.gov.in</a></li>
            <li><a href="#" className="hover:underline">DBT Bharat</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-300">
        &copy; 2024 Aadhaar Services. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

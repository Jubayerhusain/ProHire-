import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold text-gray-800">ProHire</h2>
            <p className="text-sm text-gray-600 mt-2">
              ProHire is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-md font-semibold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">About us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Our Team</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Products</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-800">Community</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Feature</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Credit</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-800">Quick links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">iOS</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Android</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Microsoft</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Desktop</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-800">More</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Privacy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Help</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Terms</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 text-sm text-gray-600 flex flex-wrap justify-between">
          <p>&copy; 2024. ProHire all rights reserved</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
            <a href="#" className="hover:text-blue-600">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
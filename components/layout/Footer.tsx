import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">StayFinder</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Find unique places to stay, from villas to cabins and everything in
            between.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Contact</li>
            <li>Help Center</li>
            <li>Terms & Policy</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-2">Top Categories</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Villas</li>
            <li>Cabins</li>
            <li>Luxury Homes</li>
            <li>Mountain Lodges</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Get in Touch</h3>
          <p className="text-gray-300 text-sm">support@stayfinder.com</p>
          <p className="text-gray-300 text-sm mt-1">+1 (555) 123-4567</p>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} StayFinder. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Villa",
  "Beachfront",
  "Cabins",
  "Loft",
];

const Header: React.FC = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <span>StayFinder</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 border rounded-full py-2 px-4 w-1/2 shadow-sm">
          <input
            type="text"
            placeholder="Search location..."
            className="flex-1 outline-none"
          />
          <button className="bg-black text-white px-4 py-1 rounded-full">
            Search
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-md hover:bg-gray-100">
            Sign In
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-md">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="max-w-7xl mx-auto flex gap-6 py-3 px-6 overflow-auto text-gray-600">
        {accommodationTypes.map((type) => (
          <button
            key={type}
            className="hover:text-black transition font-medium"
          >
            {type}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("offer");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
      {/* LEFT SIDE – PROPERTY INFO */}
      <div className="lg:col-span-2">
        {/* Title */}
        <h1 className="text-4xl font-bold">{property.name}</h1>

        <div className="flex items-center space-x-2 mt-2 text-gray-600">
          <span className="text-yellow-500">{property.rating} ⭐</span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            src={property.image}
            alt={property.name}
            className="col-span-2 w-full h-96 object-cover rounded-lg"
          />

          {/* sample extra images */}
          {property.gallery?.map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* ---------------- TAB SECTION ---------------- */}
        <div className="mt-8">
          <div className="flex space-x-4 border-b pb-2">
            <button
              onClick={() => setActiveTab("offer")}
              className={`pb-2 ${
                activeTab === "offer" ? "border-b-2 border-black font-semibold" : ""
              }`}
            >
              What we offer
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-2 ${
                activeTab === "reviews" ? "border-b-2 border-black font-semibold" : ""
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab("host")}
              className={`pb-2 ${
                activeTab === "host" ? "border-b-2 border-black font-semibold" : ""
              }`}
            >
              About host
            </button>
          </div>

          {/* TAB CONTENT */}
          {activeTab === "offer" && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">Description</h2>
              <p className="text-gray-700 mt-2">{property.description}</p>

              {/* Amenities */}
              <h2 className="text-2xl font-semibold mt-6">What this place offers</h2>
              <ul className="flex flex-wrap gap-3 mt-3">
                {property.category.map((amenity, index) => (
                  <li key={index} className="bg-gray-200 p-2 rounded-md">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <ReviewSection reviews={property.reviews || []} />
          )}

          {activeTab === "host" && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">About the host</h2>
              <p className="text-gray-700 mt-2">
                {property.host?.name || "Host name not provided"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE – BOOKING SECTION */}
      <div className="lg:col-span-1">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;

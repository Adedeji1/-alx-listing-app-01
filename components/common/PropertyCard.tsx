import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  image,
  price,
  rating,
  address,
}) => {
  return (
    <div className="rounded-xl shadow hover:shadow-xl transition bg-white overflow-hidden">
      <img src={image} alt={name} className="h-56 w-full object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">{address.city}, {address.country}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-blue-600 font-bold text-lg">${price}</span>
          <span className="text-yellow-500 font-medium">{rating} ⭐</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

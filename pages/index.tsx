import React from "react";
import { HERO_BG, FILTER_OPTIONS } from "@/constants";
import Pill from "@/components/common/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";

export default function Home() {
  return (
    <div className="w-full">
      <section
        className="w-full h-[70vh] bg-cover bg-center flex items-center px-12"
        style={{ backgroundImage: `url(${HERO_BG.src})` }}
      >
        <div>
          <h1 className="text-4xl font-bold text-white max-w-lg leading-tight">
            Find your favorite place here!
          </h1>
          <p className="text-white text-lg mt-3">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <section className="px-12 py-8">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        <div className="flex gap-3 flex-wrap">
          {FILTER_OPTIONS.map((option) => (
            <Pill key={option} label={option} />
          ))}
        </div>
      </section>

      <section className="px-12 py-8">
        <h2 className="text-xl font-semibold mb-6">Popular Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </section>

    </div>
  );
}



"use client";

import RedMap from "../components/Map";
import Filters from "../components/Filters";

export default function MapSection() {
  return (
    <section className="w-full">
      <div className="mb-6">
        <Filters />
      </div>
      <div className="w-full h-[600px] rounded-3xl overflow-hidden border">
        <RedMap />
      </div>
    </section>
  );
}
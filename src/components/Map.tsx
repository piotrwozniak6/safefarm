"use client";

import { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";

export default function MapComponent() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current!,
      style: "/map-style.json", // ✅ This loads your custom style from /public/
      center: [105.8544441, 21.028511], // example: Hanoi
      zoom: 6,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[500px] rounded-xl overflow-hidden shadow-md"
    />
  );
}

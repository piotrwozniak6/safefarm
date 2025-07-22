"use client";

import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import mockPlaces from "../lib/mockPlaces";

export default function CustomMap() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="w-full h-[600px] rounded-3xl overflow-hidden border">
      <Map
        mapLib={import("maplibre-gl")}
        initialViewState={{
          longitude: 105.85,
          latitude: 21.03,
          zoom: 12,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="/map-style.json"
        onClick={() => setSelectedPlace(null)} // 🟢 Close popup on map click
      >
        {mockPlaces.map((place) => (
          <Marker
            key={place.id}
            longitude={place.lng}
            latitude={place.lat}
            anchor="bottom"
          >
            <div
              onClick={(e) => {
                e.stopPropagation(); // 🛑 Prevent map click from firing
                setSelectedPlace(place);
              }}
              className="cursor-pointer"
              style={{ width: 32, height: 42 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 42"
                width="32"
                height="42"
              >
                <path
                  d="M16 42C16 42 32 25.5 32 15.5C32 6.93959 24.8366 0 16 0C7.16344 0 0 6.93959 0 15.5C0 25.5 16 42 16 42Z"
                  fill="#2D5A26"
                />
                <circle cx="16" cy="15" r="6" fill="white" />
              </svg>
            </div>
          </Marker>
        ))}

        {selectedPlace && (
          <Popup
            longitude={selectedPlace.lng}
            latitude={selectedPlace.lat}
            onClose={() => setSelectedPlace(null)}
            closeOnClick={false}
            closeButton={false}
            anchor="top"
          >
            <div className="text-sm">Popup placeholder</div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
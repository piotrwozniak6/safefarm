"use client";

import { useEffect, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import mockPlaces from "../lib/mockPlaces";
import Image from "next/image";
import Link from "next/link";

export default function CustomMap() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setSelectedPlace(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredPlaces = mockPlaces; // No filtering by verification anymore

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
      >
        {filteredPlaces.map((place) => (
          <Marker
            key={place.id}
            longitude={place.lng}
            latitude={place.lat}
            anchor="bottom"
          >
            <div
              onClick={() => setSelectedPlace(place)}
              className="cursor-pointer"
              style={{ width: 36, height: 48 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 42"
                width="36"
                height="48"
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
          <div
            ref={popupRef}
            className="absolute top-4 right-4 bg-white rounded-2xl p-6 shadow-xl w-[340px] max-w-[90vw] z-50 border border-gray-200"
          >
            <div className="mb-4">
              <img
                src={selectedPlace.imagePopUp}
                alt={`${selectedPlace.name} photo`}
                className="rounded-xl w-full h-[180px] object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {selectedPlace.name}
            </h2>

            <div className="flex items-center gap-2 bg-green-100 rounded-full px-3 py-1 w-fit mb-2">
              <Image
                src="/popUpCheckMark-Green.png"
                alt="verified"
                width={16}
                height={16}
              />
              <span className="text-sm font-semibold text-[#2D5A26]">
                Verified by Safe Farm
              </span>
            </div>

            <div className="text-sm text-gray-700 space-y-2 mb-4">
              <div className="flex gap-2 items-start">
                <Image
                  src="/popUpLocation.png"
                  alt="location"
                  width={16}
                  height={16}
                  className="mt-[2px]"
                />
                <span>{selectedPlace.address}</span>
              </div>

              {selectedPlace.phoneNumber && (
                <div className="flex gap-2 items-start">
                  <Image
                    src="/popUpTelephone.png"
                    alt="phone"
                    width={16}
                    height={16}
                    className="mt-[2px]"
                  />
                  <span>{selectedPlace.phoneNumber}</span>
                </div>
              )}

              <div className="font-semibold">
                Tested for:{" "}
                <span className="font-normal">
                  {selectedPlace.products.join(", ")}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/places/${selectedPlace.id}`}
                className="flex items-center gap-2 bg-[#2D5A26] text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                <Image
                  src="/popUpShow-White.png"
                  alt="show"
                  width={20}
                  height={20}
                />
                View Full Profile
              </Link>
              <a
                href={selectedPlace.locationGoogleMap}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium"
              >
                <Image
                  src="/popUpMaximize.png"
                  alt="map"
                  width={18}
                  height={18}
                />
                Google Maps
              </a>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => setSelectedPlace(null)}
                className="text-sm text-gray-600 hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Map>
    </div>
  );
}
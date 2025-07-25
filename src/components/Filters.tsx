"use client";

import { useState, useRef, useEffect } from "react";

const productOptions = [
  { value: "allPlaces", label: "All places" },
  { value: "Pork", label: "Pork" },
  { value: "Eggs", label: "Eggs" },
];

function CustomDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="flex flex-col items-center font-['Inter'] text-safefarm-charcoal tracking-[0.01em]">
      <label className="block text-sm font-medium mb-2 text-center">
        {label}
      </label>
      <div className="relative w-[250px]" ref={dropdownRef}>
        <button
          type="button"
          className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-safefarm-green focus:border-transparent transition-all duration-200 flex items-center justify-between cursor-pointer hover:bg-green-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedOption?.label}</span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`w-full px-4 py-3 text-left text-base transition-colors duration-150 flex items-center ${
                  option.value === value
                    ? "bg-[#2D5A26]/90 text-white"
                    : "text-gray-900 hover:bg-green-50"
                }`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.value === value && (
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Filters() {
  const [product, setProduct] = useState("allPlaces");

  return (
    <section className="w-full flex justify-center">
      <div className="bg-[#FDF7F4] rounded-xl p-6">
        <CustomDropdown
          label="Places tested for"
          options={productOptions}
          value={product}
          onChange={setProduct}
        />
      </div>
    </section>
  );
}

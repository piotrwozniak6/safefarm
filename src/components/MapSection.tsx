// MapSection component: placeholder for the interactive map
export default function MapSection() {
  return (
    <section className="w-full h-80 md:h-[450px] rounded-lg overflow-hidden shadow relative">
      {/* MapLibre map will be rendered here */}
      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-safefarm-green">
        Map loading…
      </div>
    </section>
  );
} 
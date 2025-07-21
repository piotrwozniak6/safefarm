import dynamic from "next/dynamic";
import Header from "../components/Header";
import Filters from "../components/Filters";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 py-0 gap-0 max-w-4xl mx-auto">
      <Header />
      <div className="w-full flex justify-center mt-2 mb-8">
        <div className="w-full max-w-2xl">
          <Filters />
        </div>
      </div>
      <Map />
    </main>
  );
}

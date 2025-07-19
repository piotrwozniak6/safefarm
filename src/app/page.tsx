import Header from '../components/Header';
import Filters from '../components/Filters';
import MapSection from '../components/MapSection';

// Home page: renders header, filters, and map
export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 py-0 gap-0 max-w-4xl mx-auto">
      <Header />
      {/* Centered filters below header, above map */}
      <div className="w-full flex justify-center mt-2 mb-8">
        <div className="w-full max-w-2xl">
          <Filters />
        </div>
      </div>
      <MapSection />
    </main>
  );
} 
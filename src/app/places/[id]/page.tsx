import { notFound } from 'next/navigation';
import mockPlaces from '../../../lib/mockPlaces';

// Dynamic page for /places/[id]
export default function PlacePage({ params }: { params: { id: string } }) {
  // Find the place by id from mock data
  const place = mockPlaces.find(p => p.id === params.id);
  if (!place) return notFound();

  return (
    <main className="max-w-xl mx-auto p-6 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold text-safefarm-green">{place.name}</h2>
      <img src={place.image} alt={place.name} className="w-full h-56 object-cover rounded-lg shadow" />
      <p className="text-lg text-safefarm-charcoal text-center">{place.description}</p>
    </main>
  );
} 
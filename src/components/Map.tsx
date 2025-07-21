import maplibregl from 'maplibre-gl';
import { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function RedMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapRef.current,
      style: '/redStreetsMap.json', // <-- this loads your custom style
      center: [105.854444, 21.028511], // Hanoi
      zoom: 6
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-[600px] rounded-xl mt-6"
    />
  );
}
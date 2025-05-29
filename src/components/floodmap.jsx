import { useEffect, useState, useRef } from 'react';

const FloodMap = () => {
  const [MapComponents, setMapComponents] = useState(null);
  const mapRef = useRef(null);
  const position = [-1.286389, 36.817223]; // Nairobi, Kenya as a placeholder

  useEffect(() => {
    import('react-leaflet').then((module) => {
      setMapComponents({
        MapContainer: module.MapContainer,
        TileLayer: module.TileLayer,
        Marker: module.Marker,
        Popup: module.Popup,
        useMap: module.useMap,
      });
    });
  }, []);

  useEffect(() => {
    if (MapComponents && mapRef.current) {
      const map = MapComponents.useMap();
      setTimeout(() => map.invalidateSize(), 100); // Ensure DOM is ready
    }
  }, [MapComponents]);

  if (!MapComponents) {
    return <div className="h-[800px] w-[1200px] bg-gray-700 flex items-center justify-center rounded-lg">
      <p className="text-gray-400">Loading map...</p>
    </div>;
  }

  const { MapContainer, TileLayer, Marker, Popup } = MapComponents;

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
      id="map"
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Sample Location: Nairobi
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default FloodMap;
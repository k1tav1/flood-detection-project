import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function FloodMap({ posts }) {
  const center = [-1.286389, 36.817223];
  const zoom = 6;

  return (
    <div className="map-container mb-6">
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default FloodMap;
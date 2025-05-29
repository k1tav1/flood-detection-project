import Sidebar from '../components/Sidebar';
import FloodMap from '../components/FloodMap';

const Map = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-roboto">
      <Sidebar />
      <main className="flex-1 p-6 md:ml-64">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Map</h2>
          <input
            type="text"
            placeholder="Search locations..."
            className="w-full p-2 mb-4 border border-gray-700 rounded-md bg-gray-900 text-white"
          />
          <div style={{ width: '1200px', height: '800px', position: 'relative' }}>
            <FloodMap />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Map;
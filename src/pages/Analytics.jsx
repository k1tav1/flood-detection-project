import Sidebar from '../components/Sidebar';

const Analytics = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-roboto">
      <Sidebar />
      <main className="flex-1 p-6 md:ml-64">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Active Alerts</h3>
            <p className="text-2xl">24</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">People Affected</h3>
            <p className="text-2xl">17,500</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Response Time</h3>
            <p className="text-2xl">4.2 min</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md h-[300px] flex items-center justify-center">
            <p className="text-gray-400">Disaster Types (400x300)</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md h-[300px] flex items-center justify-center">
            <p className="text-gray-400">Alert Trends (400x300)</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
import { useState } from 'react';

function Settings() {
  const [mapEnabled, setMapEnabled] = useState(true);
  const [alertThreshold, setAlertThreshold] = useState(5);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Settings</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Preferences</h2>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={mapEnabled}
                onChange={() => setMapEnabled(!mapEnabled)}
                className="mr-2"
              />
              <span className="text-gray-700">Enable Map View</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Alert Threshold (posts/hour)</label>
            <input
              type="number"
              value={alertThreshold}
              onChange={(e) => setAlertThreshold(Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Save Settings
          </button>
        </div>
      </main>
    </div>
  );
}

export default Settings;
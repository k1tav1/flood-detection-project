import Sidebar from '../components/Sidebar';

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-roboto">
      <Sidebar />
      <main className="flex-1 p-6 md:ml-64">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Push Notifications</span>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Auto-refresh Data</span>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </div>
            <button className="w-full bg-purple-700 text-white p-2 rounded-md hover:bg-purple-800 transition-colors mt-4">
              Sign Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
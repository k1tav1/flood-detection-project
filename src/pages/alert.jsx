function Alerts() {
    const alerts = [
      { id: 1, location: "Nairobi", message: "High flood risk near River Road", severity: "High", time: "2025-04-30 10:15" },
      { id: 2, location: "Mombasa", message: "Coastal flooding expected", severity: "Medium", time: "2025-04-30 09:45" },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100">
        <main className="max-w-5xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Flood Alerts</h1>
          <div className="grid gap-6">
            {alerts.length === 0 ? (
              <p className="text-gray-600 text-center text-lg">No active alerts.</p>
            ) : (
              alerts.map(alert => (
                <div
                  key={alert.id}
                  className={`p-6 rounded-lg shadow-md ${
                    alert.severity === 'High' ? 'bg-red-100 border-l-4 border-red-500' : 'bg-yellow-100 border-l-4 border-yellow-500'
                  }`}
                >
                  <p className="text-lg font-semibold text-gray-800">{alert.message}</p>
                  <p className="text-sm text-gray-600">Location: {alert.location}</p>
                  <p className="text-sm text-gray-600">Time: {alert.time}</p>
                  <p className="text-sm text-gray-600">Severity: {alert.severity}</p>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    );
  }
  
  export default Alerts;
import Sidebar from '../components/Sidebar';

const About = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-roboto">
      <Sidebar />
      <main className="flex-1 p-6 md:ml-64">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              Beacon is revolutionizing disaster response through real-time social media analysis and machine learning. Our platform provides crucial early warnings and facilitates rapid emergency response, helping communities stay safe and informed during critical situations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold">Real-time Monitoring</h3>
                <p>Continuous analysis of social media data to detect emerging disasters</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold">ML-Powered Analysis</h3>
                <p>Advanced algorithms for accurate disaster detection and classification</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold">Instant Alerts</h3>
                <p>Immediate notifications to affected communities and emergency services</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
            <p>We are a dedicated team of developers, data scientists, and disaster response experts committed to making a difference.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <ul className="list-disc list-inside">
              <li>Email: info@beacon-alerts.com</li>
              <li>Emergency Hotline: 1-800-BEACON-HELP</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
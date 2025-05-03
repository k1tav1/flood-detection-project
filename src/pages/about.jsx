function About() {
    return (
      <div className="min-h-screen bg-gray-100">
        <main className="max-w-5xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">About Flood Detection</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 text-lg mb-4">
              The Flood Detection Dashboard is a real-time system designed to monitor flood-related posts on X,
              helping communities stay informed about flood risks in Kenya.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Built by Kitavi, a 3rd-year student, this project uses React, Tailwind CSS, and Leaflet to
              visualize flood data and provide actionable insights.
            </p>
            <p className="text-gray-700 text-lg">
              Future plans include integrating AI (NLP) to classify posts and deploying the app for public use.
            </p>
          </div>
        </main>
      </div>
    );
  }
  
  export default About;
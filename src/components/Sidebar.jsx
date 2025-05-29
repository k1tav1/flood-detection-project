import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinkStyles = (path) => `block py-2 px-4 ${location.pathname === path ? 'bg-purple-700' : 'hover:bg-gray-700'}`;

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-30 text-white"
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className={`fixed inset-y-0 left-0 bg-gray-900 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-20`}>
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Beacon</h1>
        </div>
        <nav className="mt-4">
          <Link to="/map" className={navLinkStyles('/map')}>Map</Link>
          <Link to="/analytics" className={navLinkStyles('/analytics')}>Analytics</Link>
          <Link to="/settings" className={navLinkStyles('/settings')}>Settings</Link>
          <Link to="/about" className={navLinkStyles('/about')}>About</Link>
          <div className="py-2 px-4 flex items-center">
            <span>Active Alerts</span>
            <span className="ml-2 w-3 h-3 bg-yellow-400 rounded-full"></span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
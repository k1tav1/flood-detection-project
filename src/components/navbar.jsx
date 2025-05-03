import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-10">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Flood Detection</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300 transition'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300 transition'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alerts"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300 transition'
              }
            >
              Alerts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300 transition'
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
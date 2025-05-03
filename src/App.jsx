import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Alerts from './pages/alert';
import Settings from './pages/setting';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<div className="text-center p-6">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
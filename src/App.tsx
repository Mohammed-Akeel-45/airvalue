import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { 
  Home, 
  MapPin, 
  HeartPulse, 
  Info, 
  Menu, 
  Newspaper
} from 'lucide-react';
import { useState } from 'react';
import PropertyList from './pages/PropertyList';
import AQIHeatmap from './pages/AQIHeatmap';
import HealthAssessment from './pages/HealthAssessment';
import Aware from "./pages/Aware"; // ✅ Import News page
import About from './pages/About';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
    },
  },
});

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = [
    { 
      path: "/", 
      icon: <Home className="w-5 h-5 mr-2" />, 
      label: "Properties" 
    },
    { 
      path: "/map", 
      icon: <MapPin className="w-5 h-5 mr-2" />, 
      label: "AQI Heatmap" 
    },
    { 
      path: "/health", 
      icon: <HeartPulse className="w-5 h-5 mr-2" />, 
      label: "Health Risk" 
    },
    { 
      path: "/aware", 
      icon: <Newspaper className="w-5 h-5 mr-2" />, 
      label: "Aware" 
    },
    { 
      path: "/about", 
      icon: <Info className="w-5 h-5 mr-2" />, 
      label: "About" 
    }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-2xl font-bold tracking-wider">
                AIR VALUE
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {NavItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `
                      text-white px-3 py-2 rounded-md text-sm font-medium 
                      transition-all duration-300 ease-in-out
                      flex items-center
                      hover:bg-white/20 hover:scale-105
                      ${isActive ? 'bg-white/30 ring-2 ring-white/50' : ''}
                    `}
                  >
                    {item.icon}
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/20 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    text-white block px-3 py-2 rounded-md text-base font-medium
                    hover:bg-white/20
                    ${isActive ? 'bg-white/30' : ''}
                  `}
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
          <Navbar />
          <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Routes>
                <Route path="/" element={<PropertyList />} />
                <Route path="/map" element={<AQIHeatmap />} />
                <Route path="/health" element={<HealthAssessment />} />
                <Route path="/aware" element={<Aware />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/home' },
    { name: 'Kendaraan', path: '/kendaraan' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Tentang', path: '/tentang' },
    { name: 'Kontak', path: '/kontak' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center glow">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="ml-3 text-2xl font-black text-white">
              Rent<span className="text-gradient">Car</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:scale-110 relative group ${
                  isActive(item.path) 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">Masuk</button>
            <button className="btn-primary relative overflow-hidden group">
              <span className="relative z-10">Daftar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 glass rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300"></div>
            <div className="w-6 h-0.5 bg-white transition-transform duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-6 animate-slide-in">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-2 transition-all duration-300 hover:translate-x-2 ${
                    isActive(item.path) 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4">
                <button className="btn-secondary flex-1">Masuk</button>
                <button className="btn-primary flex-1">Daftar</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
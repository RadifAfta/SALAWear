import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Katalog', path: '/catalog' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Testimoni', path: '/testimonials' },
    { name: 'Cara Order', path: '/order' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="z-50">
              <h1 className="text-2xl md:text-3xl font-playfair font-bold">SALA<span className="font-light">Wear</span></h1>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Navigation Button */}
            <button
              className="md:hidden z-50 text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center transition-all duration-300 z-40 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-xl font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-10 mt-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Info */}
            <div className="flex flex-col">
              <h3 className="text-xl font-playfair font-bold mb-4">SORA<span className="font-light">Wear</span></h3>
              <p className="mb-4">Fashion lokal berkualitas untuk tampilan chic setiap hari.</p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent">
                  <FiInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent">
                  <FiTwitter />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent">
                  <FiFacebook />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-medium mb-4">Kontak</h4>
              <address className="not-italic">
                <p className="mb-2">Jl. Fashion Kreatif No. 45</p>
                <p className="mb-2">Bandung, Indonesia</p>
                <p className="mb-2">info@sorawear.com</p>
                <p>+62 812 3456 7890</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Sala Wear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
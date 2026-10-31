import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu as MenuIcon, X, Calendar, MessageCircle } from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Underground Bar', path: '/underground-bar' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Luxury Announcement & Quick Contact Bar */}
      <div className="bg-[#1C1C1C] text-xs text-gray-300 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-gray-300 hover:text-gold transition">
              <MapPin className="w-3.5 h-3.5 text-gold mr-1.5" />
              Udaipole, Behind State Bank of Indore, Udaipur
            </span>
            <span className="text-gray-500">|</span>
            <a 
              href={`tel:${HOTEL_INFO.phone}`} 
              className="flex items-center hover:text-gold transition"
            >
              <Phone className="w-3.5 h-3.5 text-gold mr-1.5" />
              {HOTEL_INFO.phone}
            </a>
            <span className="text-gray-500">|</span>
            <a 
              href={`mailto:${HOTEL_INFO.email}`} 
              className="flex items-center hover:text-gold transition"
            >
              <Mail className="w-3.5 h-3.5 text-gold mr-1.5" />
              {HOTEL_INFO.email}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gold tracking-widest uppercase font-serif text-[11px]">
              Near Udaipole Bus Stand & Railway Station
            </span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition text-[11px] font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1" />
              WhatsApp Help
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#1E1E1E]/95 backdrop-blur-md shadow-xl py-3 border-b border-gold/20' 
            : 'bg-[#242424] py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/images/hotel-madurai-logo.jpg" 
              alt="Hotel Madurai Emblem" 
              className="w-10 h-10 rounded-full border border-gold/60 object-cover shadow-sm group-hover:scale-105 transition"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-luxury text-white group-hover:text-gold transition">
                HOTEL MADURAI
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gold font-sans font-medium -mt-1">
                UDAIPUR • RAJASTHAN
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] uppercase tracking-luxury font-medium transition duration-200 relative py-1 ${
                  isActive(link.path)
                    ? 'text-gold font-semibold'
                    : 'text-gray-200 hover:text-gold'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-luxury font-medium border border-gold/50 text-gold hover:bg-gold hover:text-white transition duration-200"
            >
              Enquire
            </a>
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-luxury font-semibold bg-gold hover:bg-gold-light text-[#1F1F1F] shadow-md transition duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              Book Now
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold bg-gold text-[#1F1F1F]"
            >
              Book
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-md hover:text-gold focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6 text-gold" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#1E1E1E] border-t border-gold/20 px-6 py-6 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-luxury py-2 border-b border-white/5 ${
                    isActive(link.path)
                      ? 'text-gold font-bold'
                      : 'text-gray-300 hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 flex flex-col space-y-3">
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 bg-gold text-dark font-semibold text-xs uppercase tracking-widest shadow-md"
                >
                  Book Online Today
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 border border-emerald-500/50 text-emerald-400 font-medium text-xs uppercase tracking-widest flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Enquiry
                </a>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="w-full text-center py-2 text-xs text-gray-400 hover:text-white flex items-center justify-center"
                >
                  <Phone className="w-3.5 h-3.5 text-gold mr-2" />
                  Call Us: {HOTEL_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

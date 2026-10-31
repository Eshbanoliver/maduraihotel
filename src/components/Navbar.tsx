import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu as MenuIcon, 
  X, 
  Calendar, 
  MessageCircle, 
  Star, 
  ChevronRight, 
  Clock 
} from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    { name: 'Menu', path: '/restaurant-menu' },
    { name: 'Underground Bar', path: '/underground-bar' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/testimonials' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300">
        {/* Top Luxury Announcement Bar */}
        <div className="bg-[#121212] text-xs text-gray-300 border-b border-gold/20 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
            
            <div className="flex items-center space-x-6 text-[11px]">
              <span className="flex items-center text-gray-300 hover:text-gold transition">
                <MapPin className="w-3.5 h-3.5 text-gold mr-1.5 flex-shrink-0" />
                Udaipole, Behind State Bank of Indore, Udaipur
              </span>
              <span className="text-gray-600">|</span>
              <a 
                href={`tel:${HOTEL_INFO.phone}`} 
                className="flex items-center text-gray-300 hover:text-gold transition font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-gold mr-1.5 flex-shrink-0" />
                {HOTEL_INFO.phone}
              </a>
              <span className="text-gray-600">|</span>
              <span className="flex items-center text-gray-300">
                <Clock className="w-3.5 h-3.5 text-gold mr-1.5 flex-shrink-0" />
                24/7 Front Desk & Transfers
              </span>
            </div>

            <div className="flex items-center space-x-5">
              <span className="text-gold tracking-widest uppercase font-serif text-[11px] font-medium flex items-center">
                <Star className="w-3 h-3 fill-gold text-gold mr-1" />
                Official Direct Rates
              </span>
              <span className="text-gray-600">|</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition text-[11px] font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1" />
                WhatsApp Desk
              </a>
            </div>

          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav 
          className={`w-full transition-all duration-300 ${
            scrolled 
              ? 'bg-[#161616]/95 backdrop-blur-lg shadow-2xl py-3 border-b border-gold/30' 
              : 'bg-[#1A1A1A] py-4 border-b border-white/10'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            
            {/* Logo / Brand Identity */}
            <Link to="/" className="flex items-center space-x-3.5 group">
              <div className="relative">
                <img 
                  src="/images/hotel-madurai-logo.jpg" 
                  alt="Hotel Madurai Emblem" 
                  className="w-11 h-11 rounded-full border-2 border-gold/70 object-cover shadow-md group-hover:scale-105 transition duration-300"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-gold rounded-full border-2 border-[#1A1A1A] flex items-center justify-center">
                  <Star className="w-2 h-2 text-[#1A1A1A] fill-[#1A1A1A]" />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-luxury text-white group-hover:text-gold transition duration-200">
                  HOTEL MADURAI
                </span>
                <span className="text-[10px] tracking-widest uppercase text-gold/90 font-sans font-semibold -mt-1 flex items-center">
                  <span>UDAIPUR</span>
                  <span className="mx-1.5 opacity-50">•</span>
                  <span>RAJASTHAN</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[12.5px] uppercase tracking-luxury font-medium transition-all duration-200 relative py-1.5 ${
                    isActive(link.path)
                      ? 'text-gold font-bold'
                      : 'text-gray-300 hover:text-gold'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold/50 via-gold to-gold/50 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Header Right Action CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center justify-center px-4 py-2.5 text-xs uppercase tracking-luxury font-medium border border-gold/40 text-gold hover:bg-gold hover:text-dark transition duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                Enquire
              </a>
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-badge inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-luxury font-bold bg-gold hover:bg-gold-light text-[#161616] shadow-lg transition-all duration-200 hover:scale-[1.03] active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                Book Now
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="lg:hidden flex items-center space-x-2">
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold bg-gold text-[#161616]"
              >
                Book
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:text-gold focus:outline-none"
                aria-label="Toggle navigation"
              >
                {isOpen ? <X className="w-6 h-6 text-gold" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Navigation Drawer */}
          {isOpen && (
            <div className="lg:hidden bg-[#161616]/98 backdrop-blur-xl border-t border-gold/25 px-6 py-6 shadow-2xl animate-fadeIn">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm uppercase tracking-luxury py-2.5 border-b border-white/5 flex items-center justify-between ${
                      isActive(link.path)
                        ? 'text-gold font-bold'
                        : 'text-gray-300 hover:text-gold'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gold/60" />
                  </Link>
                ))}

                <div className="pt-4 flex flex-col space-y-3">
                  <a
                    href={HOTEL_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3 bg-gold text-dark font-bold text-xs uppercase tracking-widest shadow-md"
                  >
                    Direct Online Reservation
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 border border-emerald-500/60 text-emerald-400 font-semibold text-xs uppercase tracking-widest flex items-center justify-center bg-emerald-950/20"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Enquiry (+91 87419 14825)
                  </a>
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="w-full text-center py-2 text-xs text-gray-400 hover:text-white flex items-center justify-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold mr-2" />
                    Call Front Desk: {HOTEL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Floating Bottom Quick-Action Bar for Mobile Screens */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#161616]/95 backdrop-blur-md border-t border-gold/30 px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center rounded-none shadow"
        >
          <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
          WhatsApp
        </a>
        <a
          href={HOTEL_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 bg-gold text-dark font-bold text-xs uppercase tracking-wider flex items-center justify-center rounded-none shadow"
        >
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          Book Room
        </a>
      </div>
    </>
  );
};

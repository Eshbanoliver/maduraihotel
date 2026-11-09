import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Menu as MenuIcon, 
  X, 
  Calendar, 
  MessageCircle, 
  Star, 
  ChevronDown, 
  Clock, 
  Utensils, 
  Wine, 
  FileText,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [diningDropdownOpen, setDiningDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDiningDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDiningDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const isDiningActive = () => {
    return (
      location.pathname.startsWith('/restaurant') ||
      location.pathname.startsWith('/underground-bar')
    );
  };

  // Primary desktop nav items
  const primaryNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Facilities', path: '/facilities' },
    // Dining dropdown handled separately
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/testimonials' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  // Full direct list for mobile drawer
  const mobileNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Hotel', path: '/about' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Hotel Facilities', path: '/facilities' },
    { name: 'Restaurant & Breakfast', path: '/restaurant' },
    { name: 'Restaurant Menu & Thali', path: '/restaurant-menu' },
    { name: 'Underground Bar', path: '/underground-bar' },
    { name: 'Photo & Video Gallery', path: '/gallery' },
    { name: 'Guest Reviews', path: '/testimonials' },
    { name: 'Location & Map', path: '/location' },
    { name: 'Contact & Enquiries', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300 w-full">
        {/* Top Luxury Announcement Bar - visible on desktop */}
        <div className="bg-[#0D0D0D] text-xs text-gray-300 border-b border-gold/20 hidden lg:block">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center py-2">
            
            <div className="flex items-center space-x-4 xl:space-x-6 text-[11px]">
              <span className="flex items-center text-gray-300 hover:text-gold transition">
                <MapPin className="w-3.5 h-3.5 text-gold mr-1.5 flex-shrink-0" />
                <span className="truncate max-w-[280px] xl:max-w-none">Behind State Bank of Indore, Udaipole, Udaipur</span>
              </span>
              <span className="text-gray-600">|</span>
              <a 
                href={`tel:${HOTEL_INFO.phone}`} 
                className="flex items-center text-gray-300 hover:text-gold transition font-medium whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-gold mr-1.5 flex-shrink-0" />
                {HOTEL_INFO.phone}
              </a>
              <span className="text-gray-600 hidden xl:inline">|</span>
              <span className="hidden xl:flex items-center text-gray-300 whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-gold mr-1.5 flex-shrink-0" />
                24/7 Front Desk & Station Transfers
              </span>
            </div>

            <div className="flex items-center space-x-4 text-[11px] flex-shrink-0">
              <span className="text-gold tracking-widest uppercase font-serif font-semibold flex items-center whitespace-nowrap">
                <Star className="w-3 h-3 fill-gold text-gold mr-1.5" />
                Official Direct Reservation Portal
              </span>
              <span className="text-gray-600">|</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition font-semibold whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
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
              ? 'bg-[#141414]/98 backdrop-blur-xl shadow-2xl py-2 sm:py-2.5 border-b border-gold/30' 
              : 'bg-[#181818] py-2.5 sm:py-3 border-b border-white/10'
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            
            {/* Logo / Brand Identity */}
            <Link to="/" className="flex items-center space-x-2.5 group flex-shrink-0 mr-2 sm:mr-4">
              <div className="relative flex-shrink-0">
                <img 
                  src="/images/hotel-madurai-logo.jpg" 
                  alt="Hotel Madurai Emblem" 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gold/70 object-cover shadow-md group-hover:scale-105 transition duration-300"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-gold rounded-full border-2 border-[#181818] flex items-center justify-center">
                  <Star className="w-2 h-2 text-[#181818] fill-[#181818]" />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-wider text-white group-hover:text-gold transition duration-200 whitespace-nowrap">
                  HOTEL MADURAI
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] tracking-widest uppercase text-gold/90 font-sans font-semibold -mt-0.5 flex items-center whitespace-nowrap">
                  <span>UDAIPUR</span>
                  <span className="mx-1 opacity-50">•</span>
                  <span>RAJASTHAN</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1.5 flex-shrink min-w-0">
              {/* Home */}
              <Link
                to="/"
                className={`px-2 py-1.5 text-[11px] 2xl:text-[12px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
                  isActive('/')
                    ? 'text-gold font-bold bg-white/5'
                    : 'text-gray-300 hover:text-gold hover:bg-white/5'
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold rounded-full" />
                )}
              </Link>

              {/* About */}
              <Link
                to="/about"
                className={`px-2 py-1.5 text-[11px] 2xl:text-[12px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
                  isActive('/about')
                    ? 'text-gold font-bold bg-white/5'
                    : 'text-gray-300 hover:text-gold hover:bg-white/5'
                }`}
              >
                About
                {isActive('/about') && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold rounded-full" />
                )}
              </Link>

              {/* Rooms */}
              <Link
                to="/rooms"
                className={`px-2 py-1.5 text-[11px] 2xl:text-[12px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
                  isActive('/rooms')
                    ? 'text-gold font-bold bg-white/5'
                    : 'text-gray-300 hover:text-gold hover:bg-white/5'
                }`}
              >
                Rooms
                {isActive('/rooms') && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold rounded-full" />
                )}
              </Link>

              {/* Facilities */}
              <Link
                to="/facilities"
                className={`px-2 py-1.5 text-[11px] 2xl:text-[12px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
                  isActive('/facilities')
                    ? 'text-gold font-bold bg-white/5'
                    : 'text-gray-300 hover:text-gold hover:bg-white/5'
                }`}
              >
                Facilities
                {isActive('/facilities') && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold rounded-full" />
                )}
              </Link>

              {/* Dining & Bar Dropdown */}
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDiningDropdownOpen(true)}
                onMouseLeave={() => setDiningDropdownOpen(false)}
              >
                <button
                  onClick={() => setDiningDropdownOpen(!diningDropdownOpen)}
                  className={`px-2 py-1.5 text-[11px] 2xl:text-[12px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded inline-flex items-center space-x-1 ${
                    isDiningActive()
                      ? 'text-gold font-bold bg-white/5'
                      : 'text-gray-300 hover:text-gold hover:bg-white/5'
                  }`}
                  aria-expanded={diningDropdownOpen}
                >
                  <span>Dining & Bar</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${diningDropdownOpen ? 'rotate-180 text-gold' : 'text-gray-400'}`} />
                  {isDiningActive() && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold rounded-full" />
                  )}
                </button>

                {/* Dropdown Menu Panel */}
                {diningDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-[#181818]/98 backdrop-blur-xl border border-gold/40 shadow-2xl py-2 z-50 animate-fadeIn">
                    <Link
                      to="/restaurant"
                      className="px-4 py-3 flex items-start space-x-3 hover:bg-white/5 transition group"
                    >
                      <Utensils className="w-4 h-4 text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition" />
                      <div>
                        <span className="text-xs uppercase tracking-luxury font-bold text-white group-hover:text-gold block">
                          Restaurant & Breakfast
                        </span>
                        <span className="text-[11px] text-gray-400 block font-sans">
                          Continental breakfast & cozy room
                        </span>
                      </div>
                    </Link>

                    <Link
                      to="/restaurant-menu"
                      className="px-4 py-3 flex items-start space-x-3 hover:bg-white/5 transition group border-t border-white/5"
                    >
                      <FileText className="w-4 h-4 text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition" />
                      <div>
                        <span className="text-xs uppercase tracking-luxury font-bold text-white group-hover:text-gold block">
                          Menu & Family Thali
                        </span>
                        <span className="text-[11px] text-gray-400 block font-sans">
                          Renowned thali near station
                        </span>
                      </div>
                    </Link>

                    <Link
                      to="/underground-bar"
                      className="px-4 py-3 flex items-start space-x-3 hover:bg-white/5 transition group border-t border-white/5"
                    >
                      <Wine className="w-4 h-4 text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition" />
                      <div>
                        <span className="text-xs uppercase tracking-luxury font-bold text-white group-hover:text-gold block">
                          UnderGround Bar
                        </span>
                        <span className="text-[11px] text-gray-400 block font-sans">
                          Subterranean evening lounge
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Gallery */}
              <Link
                to="/gallery"
                className={`px-2 py-1.5 text-[11px] 2xl:text-[12px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
                  isActive('/gallery')
                    ? 'text-gold font-bold bg-white/5'
                    : 'text-gray-300 hover:text-gold hover:bg-white/5'
                }`}
              >
                Gallery
                {isActive('/gallery') && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold rounded-full" />
                )}
              </Link>

              {/* Reviews */}
              <Link
                to="/testimonials"
                className={`px-2 py-1.5 text-[11px] 2xl:text-[12px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
                  isActive('/testimonials')
                    ? 'text-gold font-bold bg-white/5'
                    : 'text-gray-300 hover:text-gold hover:bg-white/5'
                }`}
              >
                Reviews
                {isActive('/testimonials') && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold rounded-full" />
                )}
              </Link>

              {/* Location */}
              <Link
                to="/location"
                className={`px-2 py-1.5 text-[11px] 2xl:text-[12px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
                  isActive('/location')
                    ? 'text-gold font-bold bg-white/5'
                    : 'text-gray-300 hover:text-gold hover:bg-white/5'
                }`}
              >
                Location
                {isActive('/location') && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold rounded-full" />
                )}
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-2 py-1.5 text-[11px] 2xl:text-[12px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
                  isActive('/contact')
                    ? 'text-gold font-bold bg-white/5'
                    : 'text-gray-300 hover:text-gold hover:bg-white/5'
                }`}
              >
                Contact
                {isActive('/contact') && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold rounded-full" />
                )}
              </Link>
            </div>

            {/* Header Right Action CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-2 flex-shrink-0 ml-auto xl:ml-3">
              {/* WhatsApp Quick Link */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden 2xl:inline-flex items-center justify-center px-3 py-2 text-[11px] uppercase tracking-wider font-semibold border border-gold/40 text-gold hover:bg-gold hover:text-[#141414] transition duration-200 whitespace-nowrap rounded-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1" />
                Enquire
              </a>

              {/* Book Direct Button */}
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-glow-button shimmer-badge inline-flex items-center justify-center px-3.5 py-2 text-xs uppercase tracking-wider font-bold text-[#121212] shadow-lg transition-all duration-200 hover:scale-[1.03] active:scale-95 whitespace-nowrap cursor-pointer rounded-sm"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                Book Direct
              </a>
            </div>

            {/* Mobile / Tablet Menu Hamburger */}
            <div className="xl:hidden flex items-center space-x-2 ml-2">
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold bg-gold text-[#141414] rounded-sm shadow-sm whitespace-nowrap"
              >
                Book
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:text-gold focus:outline-none rounded hover:bg-white/5"
                aria-label="Toggle navigation"
              >
                {isOpen ? <X className="w-6 h-6 text-gold" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile / Tablet Navigation Drawer */}
          {isOpen && (
            <div className="xl:hidden bg-[#161616]/98 backdrop-blur-xl border-t border-gold/25 px-5 sm:px-8 py-6 shadow-2xl animate-fadeIn max-h-[calc(100vh-72px)] overflow-y-auto overscroll-contain">
              {/* Trust Pill */}
              <div className="mb-5 pb-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-gold font-serif font-bold flex items-center">
                  <Star className="w-3.5 h-3.5 fill-gold mr-1.5 text-gold" />
                  Official Hotel Madurai Portal
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Best Rate Guaranteed
                </span>
              </div>

              {/* Navigation links grid */}
              <div className="grid grid-cols-1 gap-1">
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 text-sm font-semibold tracking-wide transition rounded ${
                      isActive(link.path)
                        ? 'bg-gold/15 text-gold border-l-2 border-gold font-bold'
                        : 'text-gray-200 hover:text-gold hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>

              {/* Drawer Action Buttons */}
              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="py-3 px-3 bg-[#242424] border border-white/20 text-white hover:border-gold text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center rounded-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-gold mr-1.5" />
                  <span>Call Front Desk</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center rounded-sm shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="mt-3">
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-glow-button shimmer-badge w-full py-3.5 px-4 text-[#121212] font-bold text-xs uppercase tracking-luxury text-center flex items-center justify-center shadow-xl rounded-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Direct Online Reservation</span>
                </a>
              </div>

              {/* Location Footer in Drawer */}
              <div className="mt-5 pt-4 border-t border-white/10 text-[11px] text-gray-400 space-y-1">
                <p className="flex items-center text-gray-300">
                  <MapPin className="w-3.5 h-3.5 text-gold mr-1.5 flex-shrink-0" />
                  {HOTEL_INFO.address}
                </p>
                <p className="text-gray-500 pl-5">
                  &lt; 1 km from Udaipur Railway Station • Udaipole
                </p>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

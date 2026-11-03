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
  ChevronRight, 
  ChevronDown, 
  Clock, 
  Utensils, 
  Wine, 
  FileText 
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

  // Primary desktop nav items (Dining grouped in a luxury dropdown to prevent wrapping/crowding)
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
      <header className="sticky top-0 z-50 transition-all duration-300">
        {/* Top Luxury Announcement Bar - visible on large screens */}
        <div className="bg-[#101010] text-xs text-gray-300 border-b border-gold/20 hidden lg:block">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
            
            <div className="flex items-center space-x-6 text-[11px]">
              <span className="flex items-center text-gray-300 hover:text-gold transition">
                <MapPin className="w-3.5 h-3.5 text-gold mr-1.5 flex-shrink-0" />
                Behind State Bank of Indore, Udaipole, Udaipur
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
                24/7 Front Desk & Station Transfers
              </span>
            </div>

            <div className="flex items-center space-x-5">
              <span className="text-gold tracking-widest uppercase font-serif text-[11px] font-semibold flex items-center">
                <Star className="w-3 h-3 fill-gold text-gold mr-1" />
                Official Direct Reservation Portal
              </span>
              <span className="text-gray-600">|</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition text-[11px] font-semibold"
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
              ? 'bg-[#141414]/98 backdrop-blur-xl shadow-2xl py-2.5 sm:py-3 border-b border-gold/30' 
              : 'bg-[#181818] py-3 sm:py-3.5 border-b border-white/10'
          }`}
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-3">
            
            {/* Logo / Brand Identity - Fixed flex-shrink-0 with clear separation */}
            <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 group flex-shrink-0 mr-2 xl:mr-4">
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
                <span className="font-serif text-sm sm:text-base lg:text-lg xl:text-xl font-bold tracking-wider text-white group-hover:text-gold transition duration-200 whitespace-nowrap">
                  HOTEL MADURAI
                </span>
                <span className="text-[8px] sm:text-[9.5px] tracking-widest uppercase text-gold/90 font-sans font-semibold -mt-0.5 flex items-center whitespace-nowrap">
                  <span>UDAIPUR</span>
                  <span className="mx-1 opacity-50">•</span>
                  <span>RAJASTHAN</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links - Compact & robust spacing to prevent overflow */}
            <div className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 flex-shrink">
              {/* Home */}
              <Link
                to="/"
                className={`px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-[12px] 2xl:text-[12.5px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
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
                className={`px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-[12px] 2xl:text-[12.5px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
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
                className={`px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-[12px] 2xl:text-[12.5px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
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
                className={`px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-[12px] 2xl:text-[12.5px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
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

              {/* Dining & Bar Dropdown (Groups Restaurant, Menu, Underground Bar cleanly) */}
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDiningDropdownOpen(true)}
                onMouseLeave={() => setDiningDropdownOpen(false)}
              >
                <button
                  onClick={() => setDiningDropdownOpen(!diningDropdownOpen)}
                  className={`px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-[12px] 2xl:text-[12.5px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded inline-flex items-center space-x-1 ${
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
                className={`px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-[12px] 2xl:text-[12.5px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
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
                className={`px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-[12px] 2xl:text-[12.5px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
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
                className={`px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-[12px] 2xl:text-[12.5px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
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
                className={`px-2 xl:px-2.5 py-1.5 text-[11px] xl:text-[12px] 2xl:text-[12.5px] uppercase tracking-wide font-semibold transition-all duration-200 relative whitespace-nowrap rounded ${
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

            {/* Header Right Action CTA Buttons - Fixed ml-auto & compact to eliminate right collapse */}
            <div className="hidden sm:flex items-center space-x-2 xl:space-x-2.5 flex-shrink-0 ml-auto pl-1 sm:pl-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center justify-center px-3 py-2 text-xs uppercase tracking-wider font-semibold border border-gold/50 text-gold hover:bg-gold hover:text-[#141414] transition duration-200 whitespace-nowrap rounded-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                Enquire
              </a>
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-glow-button shimmer-badge inline-flex items-center justify-center px-3.5 py-2 xl:px-4 xl:py-2 text-xs uppercase tracking-wider font-bold text-[#121212] shadow-lg transition-all duration-200 hover:scale-[1.03] active:scale-95 whitespace-nowrap cursor-pointer rounded-sm"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                Book Direct
              </a>
            </div>

            {/* Mobile / Tablet Menu Hamburger */}
            <div className="xl:hidden flex items-center space-x-2">
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold bg-gold text-[#141414]"
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

          {/* Mobile / Tablet Navigation Drawer */}
          {isOpen && (
            <div className="xl:hidden bg-[#161616]/98 backdrop-blur-xl border-t border-gold/25 px-5 sm:px-8 py-6 shadow-2xl animate-fadeIn max-h-[calc(100vh-72px)] overflow-y-auto overscroll-contain">
              <div className="flex flex-col space-y-1">
                {mobileNavLinks.map((link) => (
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
                    className="w-full text-center py-3 bg-gold text-[#141414] font-bold text-xs uppercase tracking-widest shadow-md"
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

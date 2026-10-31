import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Calendar, ChevronRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { HOTEL_INFO, ROOMS, getWhatsAppUrl } from '../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 border-t border-gold/30 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Property Story */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3.5">
              <img 
                src="/images/hotel-madurai-logo.jpg" 
                alt="Hotel Madurai" 
                className="w-14 h-14 rounded-full border-2 border-gold/70 object-cover shadow-lg"
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-luxury text-white block">
                  HOTEL MADURAI
                </span>
                <span className="text-xs uppercase tracking-luxury text-gold font-bold block">
                  Udaipur, Rajasthan
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
              A business class hotel at Udaipur which pampers you with all the facilities and amenities a 21st century traveler expects. Offering fine accommodation, business and recreation facilities in a welcoming family-run atmosphere.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-gold font-semibold">
              <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Official Property Booking Guarantee</span>
            </div>
          </div>

          {/* Accommodation Links */}
          <div>
            <h4 className="font-serif text-lg text-white font-bold mb-5 pb-2 border-b border-gold/40 inline-block">
              Accommodations
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-sans">
              {ROOMS.map((room) => (
                <li key={room.id}>
                  <Link 
                    to={`/rooms#${room.id}`}
                    className="flex items-center text-gray-400 hover:text-gold transition group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-2 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                    <span>{room.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/facilities"
                  className="flex items-center text-gray-400 hover:text-gold transition group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  <span>Hotel Facilities & Amenities</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery"
                  className="flex items-center text-gray-400 hover:text-gold transition group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  <span>Photo & Video Gallery</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/testimonials"
                  className="flex items-center text-gray-400 hover:text-gold transition group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  <span>Guest Reviews</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Dining & Experience Links */}
          <div>
            <h4 className="font-serif text-lg text-white font-bold mb-5 pb-2 border-b border-gold/40 inline-block">
              Dining & Experiences
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-sans">
              <li>
                <Link 
                  to="/restaurant"
                  className="flex items-center text-gray-400 hover:text-gold transition group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  <span>Restaurant & Breakfast Room</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/restaurant-menu"
                  className="flex items-center text-gray-400 hover:text-gold transition group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  <span>Restaurant Menu & Thalis</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/underground-bar"
                  className="flex items-center text-gray-400 hover:text-gold transition group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  <span>Underground Bar</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/facilities#party-hall"
                  className="flex items-center text-gray-400 hover:text-gold transition group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  <span>Party Hall near Bus Stand</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/location"
                  className="flex items-center text-gray-400 hover:text-gold transition group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-2 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  <span>Nearby Udaipur Attractions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div>
            <h4 className="font-serif text-lg text-white font-bold mb-5 pb-2 border-b border-gold/40 inline-block">
              Location & Contact
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm font-sans">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {HOTEL_INFO.address}
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  24-Hour Reception & Guest Desk
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-gold transition font-bold">
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                <a 
                  href={getWhatsAppUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition font-bold"
                >
                  WhatsApp: +91 87419 14825
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-gold transition break-all font-medium">
                  {HOTEL_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-5">
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-badge w-full inline-flex items-center justify-center py-3 px-4 bg-gold hover:bg-gold-light text-[#141414] font-bold text-xs uppercase tracking-luxury transition shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                Direct Online Reservation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-sans gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Hotel Madurai, Udaipur. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <Link to="/about" className="hover:text-gold transition">About Us</Link>
            <Link to="/location" className="hover:text-gold transition">Udaipole Location</Link>
            <Link to="/contact" className="hover:text-gold transition">Contact & Enquiries</Link>
            <a 
              href="https://hotelmaduraiudaipur.nowfloats.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gold transition"
            >
              Original Portal Archive
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { 
  Calendar, 
  MessageCircle, 
  Check, 
  ShieldCheck, 
  Star, 
  Wind, 
  Wifi, 
  Tv, 
  Bath, 
  Coffee, 
  Shirt, 
  Car, 
  Bell 
} from 'lucide-react';
import { ROOMS, HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';
import { BookingBar } from '../components/BookingBar';

export const RoomsPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/room-triple-bed-large.jpg" 
            alt="Hotel Madurai Rooms" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-3">
            Hotel Madurai Accommodations
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Guest Rooms & Suites
          </h1>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Fine accommodations featuring air conditioning, cable/satellite TV, complimentary high-speed WiFi, and private bathrooms with hot & cold shower.
          </p>
        </div>
      </section>

      {/* Floating reservation bar */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6">
        <BookingBar />
      </section>

      {/* Detailed Room Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          {ROOMS.map((room, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={room.id}
                id={room.id}
                className="bg-white border border-gold/30 shadow-luxury overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-center`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[16/11] overflow-hidden group">
                      <img 
                        src={room.image} 
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-dark/85 backdrop-blur-sm px-3.5 py-1.5 border border-gold/50 text-gold text-xs uppercase tracking-widest font-serif font-bold">
                        {room.idealFor}
                      </div>
                    </div>

                    {/* Small Gallery Strip */}
                    <div className="grid grid-cols-3 gap-1 bg-[#1F1F1F] p-1 border-t border-gold/20">
                      {room.galleryImages.map((imgSrc, i) => (
                        <div key={i} className="aspect-[16/9] overflow-hidden">
                          <img 
                            src={imgSrc} 
                            alt={`${room.name} view ${i + 1}`} 
                            className="w-full h-full object-cover hover:opacity-80 transition"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-5 p-8 sm:p-12 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                          Category {index + 1}
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-dark mb-1">
                          {room.name}
                        </h2>
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                          {room.tagline}
                        </p>
                      </div>

                      {/* Original description verbatim */}
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {room.description}
                      </p>

                      {/* Features */}
                      <div className="border-t border-gold/20 pt-6">
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-dark mb-4 flex items-center">
                          <span className="w-1.5 h-1.5 bg-gold mr-2" />
                          Verified Amenities & Features:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {room.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start text-xs text-gray-700">
                              <Check className="w-3.5 h-3.5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="pt-6 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
                        <a
                          href={HOTEL_INFO.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3.5 px-4 bg-gold hover:bg-gold-light text-[#1F1F1F] font-semibold text-xs uppercase tracking-luxury text-center flex items-center justify-center transition shadow-md"
                        >
                          <Calendar className="w-3.5 h-3.5 mr-2" />
                          Book Online
                        </a>
                        <a
                          href={getWhatsAppUrl(room.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3.5 px-4 border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-medium text-xs uppercase tracking-luxury text-center flex items-center justify-center transition"
                        >
                          <MessageCircle className="w-3.5 h-3.5 mr-2" />
                          WhatsApp Enquiry
                        </a>
                      </div>

                      <p className="text-[11px] text-gray-500 italic text-center">
                        * Direct booking opens the official eGlobe reservation portal for live rates and confirmation.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reservation Assistance Section */}
      <section className="py-16 bg-[#1A1A1A] text-white border-t border-gold/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Need Guidance Choosing?
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            We Are Here to Assist Your Stay Planning
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Our polite and welcoming staff will be happy to assist with group bookings, transfers from Udaipur Railway Station, or specific room preferences.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="px-6 py-3 bg-gold text-dark font-semibold text-xs uppercase tracking-luxury"
            >
              Call Us: {HOTEL_INFO.phone}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-600 hover:text-white text-xs uppercase tracking-luxury transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

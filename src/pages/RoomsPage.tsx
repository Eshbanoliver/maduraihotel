import React, { useState } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  Check, 
  Sparkles, 
  Bed, 
  Wind, 
  Wifi, 
  Tv, 
  Bath, 
  Coffee, 
  Shirt, 
  Car, 
  Bell, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkle
} from 'lucide-react';
import { ROOMS, HOTEL_INFO, getWhatsAppUrl, type Room } from '../data/hotelData';
import { BookingBar } from '../components/BookingBar';

// Interactive Room Detail Card
const RoomDetailItem: React.FC<{ room: Room; index: number }> = ({ room, index }) => {
  const [activeImage, setActiveImage] = useState<string>(room.image);
  const isReversed = index % 2 === 1;

  return (
    <div 
      id={room.id}
      className="bg-white border-2 border-gold/30 shadow-2xl overflow-hidden hover:border-gold transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        
        {/* Image Column */}
        <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative aspect-[16/11] overflow-hidden group bg-dark">
            <img 
              src={activeImage} 
              alt={room.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
            />
            <div className="absolute top-4 left-4 bg-[#141414]/90 backdrop-blur-md px-3.5 sm:px-4 py-1.5 border border-gold/50 text-gold text-xs uppercase tracking-luxury font-serif font-bold shadow-lg">
              {room.idealFor}
            </div>
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] text-white font-mono border border-white/20">
              Click photo below to inspect
            </div>
          </div>

          {/* Thumbnail Gallery Strip */}
          <div className="grid grid-cols-3 gap-1.5 bg-[#141414] p-2 border-t border-gold/25">
            {room.galleryImages.map((imgSrc, i) => (
              <button 
                key={i}
                type="button"
                onClick={() => setActiveImage(imgSrc)}
                className={`aspect-[16/9] overflow-hidden border-2 transition cursor-pointer ${
                  activeImage === imgSrc ? 'border-gold ring-1 ring-gold opacity-100 scale-[1.02]' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label={`View photo ${i + 1} of ${room.name}`}
              >
                <img 
                  src={imgSrc} 
                  alt={`${room.name} view ${i + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details Column */}
        <div className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 xl:p-12 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-1">
                Category {index + 1}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark mb-1">
                {room.name}
              </h2>
              <p className="text-xs uppercase tracking-luxury text-gray-500 font-semibold">
                {room.tagline}
              </p>
            </div>

            {/* Original description verbatim */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              {room.description}
            </p>

            {/* Features */}
            <div className="border-t border-gold/20 pt-5">
              <h4 className="text-xs uppercase tracking-luxury font-bold text-dark mb-3 flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                Verified In-Room Amenities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {room.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start text-xs text-gray-700 font-sans">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Buttons */}
            <div className="pt-5 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-glow-button shimmer-badge flex-1 py-3.5 px-4 text-[#121212] font-bold text-xs uppercase tracking-luxury text-center flex items-center justify-center transition shadow-md cursor-pointer rounded-none"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                <span>Book Direct & Save</span>
              </a>
              <a
                href={getWhatsAppUrl(room.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 border-2 border-emerald-600 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 font-bold text-xs uppercase tracking-luxury text-center flex items-center justify-center transition shadow-sm rounded-none"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-2 text-emerald-600 hover:text-white" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            <p className="text-[11px] text-gray-500 italic text-center">
              * Direct reservation connects to official eGlobe booking system with instant confirmation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export const RoomsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredRooms = selectedFilter === 'all' 
    ? ROOMS 
    : ROOMS.filter(r => r.id === selectedFilter);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="bg-[#141414] text-white py-24 relative overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/room-super-deluxe-main.jpg" 
            alt="Hotel Madurai Rooms" 
            className="w-full h-full object-cover animate-kenburns"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark/80 px-4 py-1.5 border border-gold/40 text-gold text-xs uppercase tracking-luxury mb-4 font-serif font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accommodations Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Guest Rooms & Suites
          </h1>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Fine accommodations featuring air conditioning, cable/satellite TV, complimentary high-speed WiFi, and private bathrooms with hot & cold shower.
          </p>
        </div>
      </section>

      {/* Floating reservation bar */}
      <section className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6">
        <BookingBar />
      </section>

      {/* Filter Tabs */}
      <section className="pt-12 sm:pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs uppercase tracking-luxury font-bold border transition cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-gold border-gold text-[#141414] shadow-md'
                  : 'bg-white border-gold/30 text-gray-700 hover:border-gold'
              }`}
            >
              All Categories ({ROOMS.length})
            </button>
            {ROOMS.map(r => (
              <button
                key={r.id}
                onClick={() => setSelectedFilter(r.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs uppercase tracking-luxury font-bold border transition cursor-pointer ${
                  selectedFilter === r.id
                    ? 'bg-gold border-gold text-[#141414] shadow-md'
                    : 'bg-white border-gold/30 text-gray-700 hover:border-gold'
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Room Sections */}
      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          {filteredRooms.map((room, index) => (
            <RoomDetailItem key={room.id} room={room} index={index} />
          ))}
        </div>
      </section>

      {/* Reservation Assistance Section */}
      <section className="py-20 bg-[#161616] text-white border-t border-gold/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase tracking-luxury text-gold font-bold">
            Need Guidance Choosing?
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold">
            We Are Here to Assist Your Stay Planning
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
            Our polite and welcoming staff will be happy to assist with group bookings, transfers from Udaipur Railway Station, or specific room preferences.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="px-7 py-3.5 bg-gold text-[#141414] font-bold text-xs uppercase tracking-luxury shadow-lg rounded-none"
            >
              Call Us: {HOTEL_INFO.phone}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 border border-emerald-500 text-emerald-400 hover:bg-emerald-600 hover:text-white text-xs uppercase tracking-luxury font-semibold transition rounded-none"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

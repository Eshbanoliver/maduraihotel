import React, { useState } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  Check, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Bed, 
  Wifi, 
  Wind, 
  Tv, 
  Bath, 
  Coffee,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { type Room, HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

interface RoomCardProps {
  room: Room;
  featured?: boolean;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, featured = false }) => {
  const [activeImage, setActiveImage] = useState<string>(room.image);
  const [expanded, setExpanded] = useState<boolean>(false);

  // Active image index
  const activeIndex = room.galleryImages.indexOf(activeImage);

  // Distinctive colored badge based on room
  const getRibbonBadge = () => {
    if (room.id === 'super-deluxe-room') {
      return (
        <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-dark px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-lg flex items-center space-x-1.5 rounded-none">
          <Sparkles className="w-3.5 h-3.5 text-dark" />
          <span>★ Guest Favorite Suite</span>
        </div>
      );
    }
    if (room.id === 'triple-bed-room') {
      return (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-lg flex items-center space-x-1.5 rounded-none">
          <Bed className="w-3.5 h-3.5 text-emerald-200" />
          <span>Family & Group Choice</span>
        </div>
      );
    }
    return (
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-lg flex items-center space-x-1.5 rounded-none">
        <Sparkles className="w-3.5 h-3.5 text-sky-300" />
        <span>Executive Comfort</span>
      </div>
    );
  };

  return (
    <div 
      id={room.id}
      className={`bg-white rounded-none border-2 transition-all duration-500 flex flex-col justify-between overflow-hidden group ${
        featured 
          ? 'border-gold shadow-2xl ring-2 ring-gold/30 hover:-translate-y-1.5' 
          : 'border-gold/30 hover:border-gold hover:shadow-2xl hover:-translate-y-1.5 shadow-luxury'
      }`}
    >
      <div>
        {/* Main Photograph Stage */}
        <div className="relative aspect-[16/10] overflow-hidden bg-dark">
          <img 
            src={activeImage} 
            alt={room.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-transparent" />
          
          {/* Top Left Ribbon */}
          <div className="absolute top-3 left-3 z-10">
            {getRibbonBadge()}
          </div>

          {/* Photo Counter */}
          {room.galleryImages.length > 1 && (
            <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] text-white font-mono border border-white/20">
              {activeIndex >= 0 ? activeIndex + 1 : 1} / {room.galleryImages.length} Photos
            </div>
          )}

          {/* Heading overlay */}
          <div className="absolute bottom-3.5 left-4 right-4 sm:left-5 sm:right-5 z-10">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide drop-shadow-md">
              {room.name}
            </h3>
            <p className="text-[11px] sm:text-xs text-gold-bright font-semibold tracking-luxury uppercase">
              {room.tagline}
            </p>
          </div>
        </div>

        {/* Small Thumbnail Gallery Selector */}
        {room.galleryImages.length > 1 && (
          <div className="flex bg-[#121212] p-2 gap-2 border-b border-gold/30">
            {room.galleryImages.map((imgSrc, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(imgSrc)}
                className={`relative flex-1 aspect-[16/9] overflow-hidden border-2 transition cursor-pointer ${
                  activeImage === imgSrc 
                    ? 'border-gold ring-1 ring-gold opacity-100 scale-[1.02]' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label={`View photo ${i + 1} of ${room.name}`}
              >
                <img src={imgSrc} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Card Body */}
        <div className="p-5 sm:p-6 lg:p-7">
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5 font-sans">
            {room.description}
          </p>

          {/* Key Feature Badges with Colorful Accents */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
            <span className="inline-flex items-center text-[11px] font-semibold bg-sky-50 text-sky-800 border border-sky-200 px-2.5 py-1">
              <Wind className="w-3 h-3 text-sky-600 mr-1.5" />
              Split AC
            </span>
            <span className="inline-flex items-center text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1">
              <Wifi className="w-3 h-3 text-emerald-600 mr-1.5" />
              Free WiFi
            </span>
            <span className="inline-flex items-center text-[11px] font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 px-2.5 py-1">
              <Tv className="w-3 h-3 text-indigo-600 mr-1.5" />
              LED TV
            </span>
            <span className="inline-flex items-center text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1">
              <Bath className="w-3 h-3 text-amber-600 mr-1.5" />
              Hot/Cold Shower
            </span>
            <span className="inline-flex items-center text-[11px] font-semibold bg-rose-50 text-rose-800 border border-rose-200 px-2.5 py-1">
              <Coffee className="w-3 h-3 text-rose-600 mr-1.5" />
              Tea/Coffee Maker
            </span>
          </div>

          {/* Expandable Feature List */}
          <div className="border-t border-gold/20 pt-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-between text-xs uppercase tracking-luxury font-bold text-dark hover:text-gold transition py-1 cursor-pointer"
            >
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                Verified In-Room Amenities ({room.features.length})
              </span>
              {expanded ? <ChevronUp className="w-4 h-4 text-gold" /> : <ChevronDown className="w-4 h-4 text-gold" />}
            </button>

            {expanded && (
              <div className="mt-3 pt-3 border-t border-gold/15 grid grid-cols-1 sm:grid-cols-2 gap-2 animate-fadeIn bg-ivory/80 p-3.5 border border-gold/20">
                {room.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start text-xs text-gray-700 font-sans">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-4 bg-gradient-to-r from-amber-50/70 via-ivory to-emerald-50/60 border-t border-gold/30 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <a
          href={HOTEL_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-glow-button w-full sm:flex-1 py-3 px-3 sm:px-4 text-[#121212] font-bold text-xs uppercase tracking-luxury text-center flex items-center justify-center transition shadow-md group/btn whitespace-nowrap cursor-pointer rounded-none"
        >
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          <span>Book Direct</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-80 group-hover/btn:translate-x-1.5 transition duration-200" />
        </a>

        <a
          href={getWhatsAppUrl(room.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-3 sm:px-4 border-2 border-emerald-600 bg-emerald-50/90 hover:bg-emerald-600 hover:text-white text-emerald-800 font-bold text-xs uppercase tracking-luxury text-center flex items-center justify-center transition duration-200 shadow-sm whitespace-nowrap rounded-none"
        >
          <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-600 group-hover:text-white" />
          <span>WhatsApp Desk</span>
        </a>
      </div>
    </div>
  );
};

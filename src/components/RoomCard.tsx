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
  Coffee 
} from 'lucide-react';
import { type Room, HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

interface RoomCardProps {
  room: Room;
  featured?: boolean;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, featured = false }) => {
  const [activeImage, setActiveImage] = useState<string>(room.image);
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div 
      id={room.id}
      className={`bg-white rounded-none border transition-all duration-500 flex flex-col justify-between overflow-hidden group ${
        featured 
          ? 'border-gold shadow-2xl ring-1 ring-gold/40' 
          : 'border-gold/30 hover:border-gold shadow-luxury'
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
          <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />
          
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-[#181818]/90 backdrop-blur-md px-3.5 py-1.5 border border-gold/50 text-gold text-[11px] uppercase tracking-luxury font-serif font-bold shadow-md flex items-center space-x-1.5">
            <Sparkles className="w-3 h-3 text-gold" />
            <span>{room.idealFor}</span>
          </div>

          {/* Heading overlay */}
          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
              {room.name}
            </h3>
            <p className="text-xs text-gold/90 font-medium tracking-luxury uppercase">
              {room.tagline}
            </p>
          </div>
        </div>

        {/* Small Thumbnail Gallery Selector */}
        {room.galleryImages.length > 1 && (
          <div className="flex bg-[#181818] p-1.5 gap-1.5 border-b border-gold/20">
            {room.galleryImages.map((imgSrc, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(imgSrc)}
                className={`relative flex-1 aspect-[16/9] overflow-hidden border transition ${
                  activeImage === imgSrc 
                    ? 'border-gold ring-1 ring-gold' 
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
        <div className="p-6 sm:p-7">
          <p className="text-sm text-gray-700 leading-relaxed mb-6 font-sans">
            {room.description}
          </p>

          {/* Key Feature Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center text-[11px] bg-ivory px-2.5 py-1 text-gray-700 border border-gold/25">
              <Wind className="w-3 h-3 text-gold mr-1" />
              Split AC
            </span>
            <span className="inline-flex items-center text-[11px] bg-ivory px-2.5 py-1 text-gray-700 border border-gold/25">
              <Wifi className="w-3 h-3 text-gold mr-1" />
              Free WiFi
            </span>
            <span className="inline-flex items-center text-[11px] bg-ivory px-2.5 py-1 text-gray-700 border border-gold/25">
              <Tv className="w-3 h-3 text-gold mr-1" />
              LED TV
            </span>
            <span className="inline-flex items-center text-[11px] bg-ivory px-2.5 py-1 text-gray-700 border border-gold/25">
              <Bath className="w-3 h-3 text-gold mr-1" />
              Hot/Cold Shower
            </span>
            <span className="inline-flex items-center text-[11px] bg-ivory px-2.5 py-1 text-gray-700 border border-gold/25">
              <Coffee className="w-3 h-3 text-gold mr-1" />
              Tea Maker
            </span>
          </div>

          {/* Expandable Feature List */}
          <div className="border-t border-gold/20 pt-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-between text-xs uppercase tracking-luxury font-bold text-dark hover:text-gold transition py-1"
            >
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gold mr-2" />
                Verified In-Room Amenities ({room.features.length})
              </span>
              {expanded ? <ChevronUp className="w-4 h-4 text-gold" /> : <ChevronDown className="w-4 h-4 text-gold" />}
            </button>

            {expanded && (
              <div className="mt-4 pt-3 border-t border-gold/15 grid grid-cols-1 sm:grid-cols-2 gap-2 animate-fadeIn">
                {room.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start text-xs text-gray-700">
                    <Check className="w-3.5 h-3.5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 sm:px-7 pb-6 pt-3 bg-ivory/60 border-t border-gold/20 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center gap-2.5">
        <a
          href={HOTEL_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-3 sm:px-4 bg-gold hover:bg-gold-light text-[#141414] font-bold text-xs uppercase tracking-luxury text-center flex items-center justify-center transition shadow-md hover:shadow-lg group/btn whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          <span>Book Online</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-70 group-hover/btn:translate-x-1 transition duration-200" />
        </a>

        <a
          href={getWhatsAppUrl(room.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-3 sm:px-4 border border-emerald-600 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 font-semibold text-xs uppercase tracking-luxury text-center flex items-center justify-center transition duration-200 shadow-sm whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

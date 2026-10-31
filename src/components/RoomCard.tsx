import React from 'react';
import { Calendar, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { type Room, HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

interface RoomCardProps {
  room: Room;
  featured?: boolean;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, featured = false }) => {
  return (
    <div 
      id={room.id}
      className={`bg-white rounded-none border transition-all duration-300 flex flex-col justify-between ${
        featured 
          ? 'border-gold shadow-luxury-hover' 
          : 'border-gold/20 hover:border-gold/60 shadow-luxury'
      }`}
    >
      <div>
        {/* Room Photograph */}
        <div className="relative aspect-[16/10] overflow-hidden group">
          <img 
            src={room.image} 
            alt={room.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          
          <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-sm px-3 py-1 border border-gold/40 text-gold text-xs uppercase tracking-widest font-serif font-semibold">
            {room.idealFor}
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
              {room.name}
            </h3>
            <p className="text-xs text-gold/90 font-medium tracking-luxury uppercase">
              {room.tagline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {room.description}
          </p>

          <div className="border-t border-gold/15 pt-5 mb-6">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-dark mb-3.5 flex items-center">
              <span className="w-1.5 h-1.5 bg-gold mr-2" />
              Verified In-Room Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.slice(0, 6).map((feat, idx) => (
                <div key={idx} className="flex items-center text-xs text-gray-700">
                  <Check className="w-3.5 h-3.5 text-gold mr-2 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 sm:px-7 pb-6 pt-2 bg-ivory/50 border-t border-gold/15 flex flex-col sm:flex-row items-center gap-3">
        <a
          href={HOTEL_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-4 bg-gold hover:bg-gold-light text-dark font-semibold text-xs uppercase tracking-luxury text-center flex items-center justify-center transition shadow-sm hover:shadow"
        >
          <Calendar className="w-3.5 h-3.5 mr-2" />
          Book Online
        </a>

        <a
          href={getWhatsAppUrl(room.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-4 border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-medium text-xs uppercase tracking-luxury text-center flex items-center justify-center transition"
        >
          <MessageCircle className="w-3.5 h-3.5 mr-2" />
          WhatsApp Enquiry
        </a>
      </div>
    </div>
  );
};

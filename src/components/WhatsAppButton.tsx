import React, { useState } from 'react';
import { MessageCircle, Phone, X, Calendar, Sparkles } from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* 1. Mobile Fixed Bottom Quick-Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#161616]/98 backdrop-blur-xl border-t border-gold/40 shadow-2xl px-2 py-2 flex items-center justify-between gap-1.5 safe-area-pb">
        {/* Call Button */}
        <a
          href={`tel:${HOTEL_INFO.phone}`}
          className="flex-1 py-2.5 px-2 bg-[#222222] border border-white/15 text-white hover:border-gold text-[11px] font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 active:scale-95 transition"
        >
          <Phone className="w-3.5 h-3.5 text-gold-bright" />
          <span>Call Desk</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 active:scale-95 transition shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Direct Button */}
        <a
          href={HOTEL_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 gold-glow-button text-dark text-[11px] font-bold uppercase tracking-wider flex items-center justify-center space-x-1 active:scale-95 transition shadow-md whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 mr-0.5" />
          <span>Book Direct</span>
        </a>
      </div>

      {/* 2. Desktop Floating Action Button */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end">
        {/* Popover helper */}
        {showTooltip && (
          <div className="mb-3 p-4 bg-white border-2 border-gold/60 shadow-2xl max-w-xs text-xs text-gray-700 animate-fadeIn relative">
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-dark cursor-pointer"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="font-serif font-bold text-dark text-sm mb-1 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Need Instant Assistance?</span>
            </div>
            <p className="text-gray-600 mb-3 font-sans">
              Chat directly with Hotel Madurai front desk on WhatsApp for fast booking, directions from Udaipole, or transfers.
            </p>
            <div className="flex space-x-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center flex-1 hover:brightness-110 transition shadow-sm"
              >
                Start Chat
              </a>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="px-3 py-2 border-2 border-dark text-dark font-bold text-[11px] uppercase tracking-wider flex items-center justify-center flex-1 hover:bg-dark hover:text-white transition"
              >
                Call Us
              </a>
            </div>
          </div>
        )}

        {/* Floating Action Pill */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={() => setShowTooltip(!showTooltip)}
            className="hidden md:flex items-center bg-[#1A1A1A]/95 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2.5 border border-gold/50 shadow-xl hover:border-gold transition cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse mr-2" />
            <span>Chat on WhatsApp</span>
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white focus:outline-none ring-4 ring-emerald-500/20"
            aria-label="Chat with Hotel Madurai on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 fill-current" />
          </a>
        </div>
      </div>
    </>
  );
};

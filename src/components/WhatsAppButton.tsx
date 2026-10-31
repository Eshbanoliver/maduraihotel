import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end">
      {/* Popover helper */}
      {showTooltip && (
        <div className="mb-3 p-4 bg-white border border-gold/40 shadow-xl max-w-xs text-xs text-gray-700 animate-fadeIn relative">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-dark"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-serif font-bold text-dark text-sm mb-1">
            Need Instant Assistance?
          </div>
          <p className="text-gray-600 mb-3">
            Directly chat with Hotel Madurai front desk on WhatsApp for fast booking, questions, or transfers.
          </p>
          <div className="flex space-x-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-emerald-600 text-white font-medium text-[11px] uppercase tracking-wider flex items-center justify-center flex-1 hover:bg-emerald-700 transition"
            >
              Start Chat
            </a>
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="px-3 py-1.5 border border-dark text-dark font-medium text-[11px] uppercase tracking-wider flex items-center justify-center flex-1 hover:bg-dark hover:text-white transition"
            >
              Call Us
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Circle Button */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="hidden md:flex items-center bg-dark/90 text-white text-xs px-3 py-2 border border-gold/40 shadow-lg hover:border-gold transition"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2" />
          Chat on WhatsApp
        </button>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white focus:outline-none"
          aria-label="Chat with Hotel Madurai on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </div>
    </div>
  );
};

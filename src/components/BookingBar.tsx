import React, { useState } from 'react';
import { Calendar, Users, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';

export const BookingBar: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [selectedRoom, setSelectedRoom] = useState('all');

  const handleBookingRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirects to verified booking engine URL
    window.open(HOTEL_INFO.bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gradient-to-b from-[#1E1E1E] to-[#141414] text-white p-5 sm:p-7 lg:p-8 border-2 border-gold/40 shadow-2xl relative overflow-hidden ring-1 ring-gold/20">
      {/* Decorative luxury radial glow overlays */}
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/10 gap-3 relative z-10">
        <div className="flex items-center space-x-3">
          <span className="p-2 bg-gradient-to-br from-amber-400 to-yellow-600 text-dark rounded-none shadow-md flex-shrink-0 font-bold">
            <Sparkles className="w-4 h-4 text-dark" />
          </span>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-serif text-sm sm:text-base tracking-luxury uppercase text-gold-bright font-bold block">
                Direct Reservation Portal
              </span>
              <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-semibold tracking-wider uppercase">
                Best Rate Guaranteed
              </span>
            </div>
            <span className="text-[11px] text-gray-300">
              Direct connection to official eGlobe booking system with instant confirmation
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs">
          <span className="inline-flex items-center text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
            No Booking Fee
          </span>
          <span className="inline-flex items-center text-amber-300 font-semibold bg-amber-950/60 border border-amber-500/30 px-2.5 py-1">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
            Pay At Hotel Available
          </span>
        </div>
      </div>

      {/* Reservation Form */}
      <form onSubmit={handleBookingRedirect} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-end relative z-10">
        {/* Check In */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-gold-light font-bold mb-2 flex items-center">
            <Calendar className="w-3.5 h-3.5 text-gold-bright mr-1.5" />
            Check-In Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#2A2A2A] border border-white/20 focus:border-gold px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition shadow-inner font-medium"
            />
          </div>
        </div>

        {/* Check Out */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-gold-light font-bold mb-2 flex items-center">
            <Calendar className="w-3.5 h-3.5 text-gold-bright mr-1.5" />
            Check-Out Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#2A2A2A] border border-white/20 focus:border-gold px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition shadow-inner font-medium"
            />
          </div>
        </div>

        {/* Room Preference */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-gold-light font-bold mb-2 flex items-center">
            <Users className="w-3.5 h-3.5 text-gold-bright mr-1.5" />
            Room Category
          </label>
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="w-full bg-[#2A2A2A] border border-white/20 focus:border-gold px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition shadow-inner font-medium cursor-pointer"
          >
            <option value="all">⭐ All Room Categories</option>
            {ROOMS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="gold-glow-button shimmer-badge w-full py-3.5 px-6 text-[#121212] font-bold text-xs uppercase tracking-luxury flex items-center justify-center transition-all duration-300 shadow-xl group hover:scale-[1.02] cursor-pointer"
          >
            <span className="font-serif tracking-widest text-[13px]">Check Rates & Book</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition duration-200" />
          </button>
        </div>
      </form>
    </div>
  );
};

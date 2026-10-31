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
    <div className="bg-[#181818] text-white p-6 sm:p-8 border border-gold/40 shadow-2xl relative overflow-hidden">
      {/* Decorative luxury background gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-5 border-b border-white/10 gap-3 relative z-10">
        <div className="flex items-center space-x-2.5">
          <span className="p-1.5 bg-gold/10 border border-gold/40 text-gold">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <div>
            <span className="font-serif text-sm tracking-luxury uppercase text-gold font-bold block">
              Direct Reservation Portal
            </span>
            <span className="text-[11px] text-gray-400">
              Verified Official eGlobe Booking Engine
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-xs text-gray-300">
          <span className="flex items-center text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
            Instant Confirmation
          </span>
          <span className="text-gray-600">|</span>
          <span className="flex items-center text-gold">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            Zero Booking Fee
          </span>
        </div>
      </div>

      {/* Reservation Form */}
      <form onSubmit={handleBookingRedirect} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end relative z-10">
        {/* Check In */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-gray-300 font-semibold mb-2 flex items-center">
            <Calendar className="w-3.5 h-3.5 text-gold mr-1.5" />
            Check-In Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#242424] border border-white/20 px-3.5 py-3 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
            />
          </div>
        </div>

        {/* Check Out */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-gray-300 font-semibold mb-2 flex items-center">
            <Calendar className="w-3.5 h-3.5 text-gold mr-1.5" />
            Check-Out Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#242424] border border-white/20 px-3.5 py-3 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
            />
          </div>
        </div>

        {/* Room Preference */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-gray-300 font-semibold mb-2 flex items-center">
            <Users className="w-3.5 h-3.5 text-gold mr-1.5" />
            Room Category
          </label>
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="w-full bg-[#242424] border border-white/20 px-3.5 py-3 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
          >
            <option value="all">All Room Categories</option>
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
            className="shimmer-badge w-full py-3.5 px-6 bg-gold hover:bg-gold-light text-[#141414] font-bold text-xs uppercase tracking-luxury flex items-center justify-center transition-all duration-300 shadow-xl group hover:scale-[1.02]"
          >
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-200" />
          </button>
        </div>
      </form>
    </div>
  );
};

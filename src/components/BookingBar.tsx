import React, { useState } from 'react';
import { Calendar, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';

export const BookingBar: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [selectedRoom, setSelectedRoom] = useState('all');

  const handleBookingRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to verified booking engine URL
    window.open(HOTEL_INFO.bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#1F1F1F] text-white p-5 sm:p-7 border border-gold/30 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-2">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-gold" />
          <span className="font-serif text-sm tracking-luxury uppercase text-gold font-semibold">
            Direct Reservation Portal
          </span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-400">
          <ShieldCheck className="w-4 h-4 text-gold" />
          <span>Official Best Rate Guaranteed • Instant Confirmation</span>
        </div>
      </div>

      <form onSubmit={handleBookingRedirect} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        {/* Check In */}
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-1.5 flex items-center">
            <Calendar className="w-3.5 h-3.5 text-gold mr-1.5" />
            Check-In Date
          </label>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-[#2A2A2A] border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition"
          />
        </div>

        {/* Check Out */}
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-1.5 flex items-center">
            <Calendar className="w-3.5 h-3.5 text-gold mr-1.5" />
            Check-Out Date
          </label>
          <input
            type="date"
            value={checkOut}
            min={checkIn || today}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-[#2A2A2A] border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition"
          />
        </div>

        {/* Room Category */}
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-1.5 flex items-center">
            <Users className="w-3.5 h-3.5 text-gold mr-1.5" />
            Room Preference
          </label>
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="w-full bg-[#2A2A2A] border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition"
          >
            <option value="all">All Room Categories</option>
            {ROOMS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full py-2.5 px-6 bg-gold hover:bg-gold-light text-[#1F1F1F] font-semibold text-xs uppercase tracking-luxury flex items-center justify-center transition shadow-md group"
          >
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </form>
    </div>
  );
};

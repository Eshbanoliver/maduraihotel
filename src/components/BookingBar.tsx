import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Bed, 
  UserCheck, 
  ExternalLink 
} from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';

export const BookingBar: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [selectedRoom, setSelectedRoom] = useState('all');
  const [guests, setGuests] = useState('2');

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);
    if (newCheckIn >= checkOut) {
      const nextDay = new Date(new Date(newCheckIn).getTime() + 86400000).toISOString().split('T')[0];
      setCheckOut(nextDay);
    }
  };

  const handleBookingRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirects to verified official eGlobe booking portal
    window.open(HOTEL_INFO.bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gradient-to-b from-[#1C1C1C] via-[#161616] to-[#121212] text-white p-5 sm:p-7 lg:p-8 border-2 border-gold/40 shadow-2xl relative overflow-hidden ring-1 ring-gold/25 rounded-sm">
      {/* Subtle luxury ambient glows */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/10 gap-3 relative z-10">
        <div className="flex items-center space-x-3">
          <span className="p-2 bg-gradient-to-br from-amber-400 to-yellow-600 text-dark rounded-none shadow-md flex-shrink-0 font-bold">
            <Sparkles className="w-4 h-4 text-dark" />
          </span>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-serif text-sm sm:text-base tracking-luxury uppercase text-gold-bright font-bold block">
                Direct Reservation Engine
              </span>
              <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-semibold tracking-wider uppercase">
                Best Rate Guaranteed
              </span>
            </div>
            <span className="text-[11px] text-gray-300 font-sans">
              Instant live booking powered by eGlobe official property channel manager
            </span>
          </div>
        </div>

        {/* Guarantee badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          <span className="inline-flex items-center text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
            No Booking Fee
          </span>
          <span className="inline-flex items-center text-amber-300 font-semibold bg-amber-950/60 border border-amber-500/30 px-2.5 py-1 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
            Pay At Hotel Available
          </span>
        </div>
      </div>

      {/* Reservation Form */}
      <form onSubmit={handleBookingRedirect} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-end relative z-10">
        {/* Check In */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-gold-light font-bold mb-1.5 flex items-center">
            <Calendar className="w-3.5 h-3.5 text-gold-bright mr-1.5" />
            Check-In Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={handleCheckInChange}
              className="w-full bg-[#262626] border border-white/20 focus:border-gold px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition shadow-inner font-medium rounded-none"
            />
          </div>
        </div>

        {/* Check Out */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-gold-light font-bold mb-1.5 flex items-center">
            <Calendar className="w-3.5 h-3.5 text-gold-bright mr-1.5" />
            Check-Out Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#262626] border border-white/20 focus:border-gold px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition shadow-inner font-medium rounded-none"
            />
          </div>
        </div>

        {/* Room Preference */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-gold-light font-bold mb-1.5 flex items-center">
            <Bed className="w-3.5 h-3.5 text-gold-bright mr-1.5" />
            Room Category
          </label>
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="w-full bg-[#262626] border border-white/20 focus:border-gold px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition shadow-inner font-medium cursor-pointer rounded-none"
          >
            <option value="all">⭐ All Categories</option>
            {ROOMS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-gold-light font-bold mb-1.5 flex items-center">
            <Users className="w-3.5 h-3.5 text-gold-bright mr-1.5" />
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-[#262626] border border-white/20 focus:border-gold px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition shadow-inner font-medium cursor-pointer rounded-none"
          >
            <option value="1">1 Adult (Solo)</option>
            <option value="2">2 Adults (Couple)</option>
            <option value="3">3 Adults (Triple / Family)</option>
            <option value="4">4+ Adults / Group</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="gold-glow-button shimmer-badge w-full py-3 px-4 text-[#121212] font-bold text-xs uppercase tracking-luxury flex items-center justify-center transition-all duration-300 shadow-xl group hover:scale-[1.02] cursor-pointer rounded-none h-[42px]"
          >
            <span className="font-serif tracking-widest text-[12px] sm:text-[12.5px]">Check Rates</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition duration-200" />
          </button>
        </div>
      </form>

      {/* Trust Micro-Row */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-gray-400 font-sans gap-2 relative z-10">
        <div className="flex items-center space-x-1 text-gold-light">
          <UserCheck className="w-3.5 h-3.5 mr-1 text-gold" />
          <span>Official Direct Rate: zero commission markup compared to third-party travel portals</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-400">
          <span>✓ Instant Confirmation</span>
          <span>✓ Free High-Speed WiFi</span>
          <span>✓ 24/7 Check-in Support</span>
        </div>
      </div>
    </div>
  );
};

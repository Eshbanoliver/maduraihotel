import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Check, 
  Star, 
  ArrowRight, 
  Wind, 
  Wifi, 
  Tv, 
  Bath, 
  Utensils, 
  Wine, 
  Car, 
  Shirt, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  Users,
  Compass,
  BedDouble,
  Coffee,
  MapPinned
} from 'lucide-react';
import { 
  HOTEL_INFO, 
  ROOMS, 
  TESTIMONIALS, 
  NEARBY_PLACES, 
  HOTEL_UPDATES, 
  getWhatsAppUrl 
} from '../data/hotelData';
import { RoomCard } from '../components/RoomCard';
import { BookingBar } from '../components/BookingBar';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#FAF8F5]">
      
      {/* 1. MAJESTIC HERO SECTION */}
      <section className="relative min-h-[94vh] flex items-center justify-center bg-[#101010] overflow-hidden">
        {/* Large Original Hotel Photography with Ken Burns effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/room-super-deluxe-large.jpg" 
            alt="Hotel Madurai Super Deluxe Suite Udaipur" 
            className="w-full h-full object-cover object-center animate-kenburns opacity-75"
          />
          {/* Multi-layered luxury gradients for deep depth & vibrant color */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/95 via-[#101010]/80 to-[#101010]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/60" />
          
          {/* Ambient colorful atmospheric glows */}
          <div className="hero-glow-gold top-10 left-10" />
          <div className="hero-glow-emerald bottom-10 right-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            
            {/* Prestige 5-Star Hospitality Trust Badge */}
            <div className="inline-flex items-center flex-wrap gap-2.5 bg-[#1C1C1C]/90 backdrop-blur-md border border-gold/60 px-4 py-2 text-xs uppercase tracking-luxury text-gold mb-6 font-serif font-bold shadow-2xl">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <span className="text-white font-sans font-semibold tracking-normal text-[11px] sm:text-xs">
                4.6/5 Rated by 500+ Guests
              </span>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <span className="text-gold-bright font-semibold">
                3-Star Business Class Hotel
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.12] mb-6 drop-shadow-lg">
              Comfort & Elegance in the Heart of <span className="gold-gradient-text">Udaipur</span>.
            </h1>

            {/* Authentic Subtitle */}
            <p className="text-sm sm:text-lg text-gray-200 font-normal leading-relaxed mb-8 max-w-2xl font-sans">
              Hotel Madurai is a business class hotel in Udaipur that pampers you with all the amenities a 21st-century traveler expects — fine AC rooms, authentic family thalis, an underground lounge bar, and 24/7 reception in Udaipole.
            </p>

            {/* Hero Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-glow-button shimmer-badge py-4 px-8 text-[#121212] font-bold text-xs uppercase tracking-luxury shadow-2xl transition-all duration-300 hover:scale-[1.03] flex items-center justify-center text-center cursor-pointer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Direct & Save</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="emerald-glow-button py-4 px-7 text-white font-bold text-xs uppercase tracking-luxury backdrop-blur-md transition-all duration-300 flex items-center justify-center text-center shadow-lg group hover:scale-[1.03] cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse mr-2.5" />
                <MessageCircle className="w-4 h-4 mr-2 text-white" />
                <span>WhatsApp Front Desk</span>
              </a>

              <Link
                to="/rooms"
                className="py-4 px-6 border-2 border-white/30 text-white hover:border-gold hover:text-gold-bright text-xs uppercase tracking-luxury transition font-semibold backdrop-blur-sm flex items-center justify-center text-center hover:bg-white/10"
              >
                <span>View Suites</span>
              </Link>
            </div>

            {/* Quick Transport Distance & Trust Badges */}
            <div className="mt-12 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
              <div className="flex items-center space-x-2 text-gray-200">
                <span className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-none border border-emerald-500/40">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="font-bold text-white block">Udaipole Stand</span>
                  <span className="text-[11px] text-emerald-400">Walking Distance</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-200">
                <span className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded-none border border-cyan-500/40">
                  <Car className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="font-bold text-white block">Railway Station</span>
                  <span className="text-[11px] text-cyan-400">&lt; 1 km (5 Mins)</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-200">
                <span className="p-1.5 bg-amber-500/20 text-amber-400 rounded-none border border-amber-500/40">
                  <Compass className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="font-bold text-white block">City Palace</span>
                  <span className="text-[11px] text-amber-400">~10 Mins Drive</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-200">
                <span className="p-1.5 bg-rose-500/20 text-rose-400 rounded-none border border-rose-500/40">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="font-bold text-white block">Direct Guarantee</span>
                  <span className="text-[11px] text-rose-400">Zero Extra Fees</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESERVATION QUICK BAR (Floating over section break) */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6">
        <BookingBar />
      </section>

      {/* STATS & CREDENTIALS STRIP WITH RICH COLOR ACCENTS */}
      <section className="py-12 bg-white border-b border-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            
            {/* Stat 1: 3-Star Rating */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-amber-50/70 to-ivory border-2 border-amber-200/80 shadow-md card-elevated">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-amber-400 to-yellow-600 text-dark flex items-center justify-center font-bold shadow-md shadow-amber-500/25">
                <Award className="w-6 h-6 text-dark" />
              </div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-dark block mb-1">
                3 Star
              </span>
              <span className="text-xs uppercase tracking-luxury text-amber-800 font-bold block">
                Business & Family Class
              </span>
            </div>

            {/* Stat 2: 3 Room Types */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-indigo-50/70 to-ivory border-2 border-indigo-200/80 shadow-md card-elevated">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-500/25">
                <BedDouble className="w-6 h-6" />
              </div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-dark block mb-1">
                3 Suites
              </span>
              <span className="text-xs uppercase tracking-luxury text-indigo-800 font-bold block">
                Super Deluxe, Triple & Deluxe
              </span>
            </div>

            {/* Stat 3: Location Proximity */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-emerald-50/70 to-ivory border-2 border-emerald-200/80 shadow-md card-elevated">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/25">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-dark block mb-1">
                &lt; 500m
              </span>
              <span className="text-xs uppercase tracking-luxury text-emerald-800 font-bold block">
                To Udaipole Bus Stand
              </span>
            </div>

            {/* Stat 4: 24/7 Front Desk */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-sky-50/70 to-ivory border-2 border-sky-200/80 shadow-md card-elevated">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-sky-500 to-blue-700 text-white flex items-center justify-center font-bold shadow-md shadow-sky-500/25">
                <Clock className="w-6 h-6" />
              </div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-dark block mb-1">
                24 / 7
              </span>
              <span className="text-xs uppercase tracking-luxury text-sky-800 font-bold block">
                Front Desk & Station Pickups
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT US EDITORIAL SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative border-4 border-gold/40 p-2 sm:p-3 bg-white shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/room-triple-bed-large.jpg"
                    alt="Hotel Madurai Triple Bed Suite Udaipur"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Floating Prestige Badge */}
                <div className="hidden sm:block absolute -bottom-6 -right-4 sm:-right-6 bg-[#161616] text-white p-5 sm:p-6 border-2 border-gold/60 shadow-2xl max-w-xs">
                  <HeartHandshake className="w-7 h-7 text-gold-bright mb-2" />
                  <span className="text-gold-bright font-serif text-lg sm:text-xl font-bold block mb-1">
                    Family-Run Warmth
                  </span>
                  <span className="text-xs text-gray-300 leading-relaxed block font-sans">
                    Polite, welcoming staff ready to offer genuine local dining and sightseeing guidance.
                  </span>
                </div>
              </div>
            </div>

            {/* Text Editorial Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-amber-100/80 border border-amber-300/80 px-3 py-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span className="text-xs uppercase tracking-widest text-amber-900 font-bold">
                  About Hotel Madurai
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                Fine Accommodation, Business and Recreation at an Affordable Tariff.
              </h2>

              <div className="space-y-4 text-gray-700 text-base leading-relaxed font-sans">
                <p>
                  Hotel Madurai is a business class hotel in Udaipur that welcomes travelers with all modern comforts at exceptional rates. Offering comfortable air-conditioned rooms, satellite TV, and round-the-clock room service.
                </p>
                <p>
                  With cozy interiors and genuine Rajasthani hospitality, our family-run team takes pride in making every guest feel completely at home from the moment you step through our doors.
                </p>
                
                {/* Quote Box */}
                <div className="p-6 bg-gradient-to-r from-amber-50 to-ivory border-l-4 border-gold shadow-sm text-dark italic font-serif text-base leading-relaxed">
                  "You will feel right at home when you try our rich continental breakfast, which may be enjoyed in our cozy breakfast room. Enjoy your stay at Hotel Madurai."
                </div>
              </div>

              {/* 3 Core Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white border border-emerald-200 text-xs">
                  <span className="font-bold text-emerald-800 flex items-center mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                    Clean & Sanitized
                  </span>
                  <span className="text-gray-600">Fresh daily linen and pristine private baths.</span>
                </div>
                <div className="p-3 bg-white border border-amber-200 text-xs">
                  <span className="font-bold text-amber-800 flex items-center mb-1">
                    <Utensils className="w-3.5 h-3.5 text-amber-600 mr-1.5" />
                    Authentic Thali
                  </span>
                  <span className="text-gray-600">Delicious home-style dining & breakfast room.</span>
                </div>
                <div className="p-3 bg-white border border-sky-200 text-xs">
                  <span className="font-bold text-sky-800 flex items-center mb-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 mr-1.5" />
                    Prime Location
                  </span>
                  <span className="text-gray-600">Walking distance to Udaipole Bus Stand.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-5 items-center">
                <Link
                  to="/about"
                  className="gold-glow-button inline-flex items-center text-xs uppercase tracking-luxury font-bold text-dark py-3 px-6 shadow-md"
                >
                  <span>Explore Hotel Story</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="inline-flex items-center text-xs uppercase tracking-luxury font-bold text-gray-800 hover:text-gold transition bg-white border border-gray-300 px-4 py-3 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600 mr-2" />
                  <span>Reception: {HOTEL_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ROOM CATEGORIES SHOWCASE */}
      <section className="py-24 bg-white border-y border-gold/25 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100/80 border border-amber-300 px-3 py-1 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span className="text-xs uppercase tracking-luxury text-amber-900 font-bold">
                  Curated Accommodations
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark">
                Handcrafted Guest Suites
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-xl font-sans">
                Every room is maintained with genuine attention to comfort, equipped with split air conditioning, satellite LED TV, and private hot & cold baths.
              </p>
            </div>

            <Link
              to="/rooms"
              className="inline-flex items-center px-6 py-3.5 border-2 border-dark text-dark hover:bg-dark hover:text-white transition text-xs uppercase tracking-luxury font-bold shadow-md hover:scale-[1.02]"
            >
              <span>View All 3 Categories</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} featured={room.id === 'super-deluxe-room'} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUTHENTIC HOTEL FACILITIES - COLORFUL & VIBRANT */}
      <section className="py-24 bg-[#121212] text-white relative overflow-hidden">
        {/* Colorful ambient background light */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-gold/20 border border-gold/40 text-gold-bright text-xs uppercase tracking-luxury font-bold mb-3">
              <Sparkles className="w-3 h-3 text-gold-bright" />
              <span>Full Amenities Spectrum</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Authentic Hotel Facilities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto my-4" />
            <p className="text-sm text-gray-300 font-sans">
              Preserving all genuine amenities documented at Hotel Madurai for a seamless, relaxing stay in Udaipur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Facility 1: Split AC */}
            <div className="p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-cyan-400/80 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-cyan-500/15">
              <div className="p-3.5 bg-gradient-to-br from-cyan-400 to-blue-600 text-white inline-block mb-5 shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition duration-300">
                <Wind className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-cyan-300 transition">
                Split Air Conditioning
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Cool, climate-controlled comfort across guestrooms for relaxation after city sightseeing.
              </p>
            </div>

            {/* Facility 2: High Speed WiFi */}
            <div className="p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-emerald-400/80 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-emerald-500/15">
              <div className="p-3.5 bg-gradient-to-br from-emerald-400 to-teal-600 text-white inline-block mb-5 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition duration-300">
                <Wifi className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-emerald-300 transition">
                High-Speed WiFi
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Complimentary wireless internet keeping business executives and tourists connected.
              </p>
            </div>

            {/* Facility 3: Satellite TV */}
            <div className="p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-indigo-400/80 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-indigo-500/15">
              <div className="p-3.5 bg-gradient-to-br from-indigo-500 to-purple-600 text-white inline-block mb-5 shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition duration-300">
                <Tv className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-indigo-300 transition">
                Cable & Satellite LED TV
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Flat screen television in every room with a rich selection of entertainment channels.
              </p>
            </div>

            {/* Facility 4: Hot & Cold Shower */}
            <div className="p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-amber-400/80 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-amber-500/15">
              <div className="p-3.5 bg-gradient-to-br from-amber-400 to-orange-500 text-white inline-block mb-5 shadow-lg shadow-amber-500/25 group-hover:scale-110 transition duration-300">
                <Bath className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-amber-300 transition">
                Hot & Cold Shower
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Private en-suite bathroom with continuous running water and essential guest toiletries.
              </p>
            </div>

            {/* Facility 5: Restaurant & Breakfast */}
            <div className="p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-rose-400/80 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-rose-500/15">
              <div className="p-3.5 bg-gradient-to-br from-rose-500 to-red-600 text-white inline-block mb-5 shadow-lg shadow-rose-500/25 group-hover:scale-110 transition duration-300">
                <Utensils className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-rose-300 transition">
                Restaurant & Breakfast Room
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Serving rich continental breakfast in our cozy room and traditional family thali meals.
              </p>
            </div>

            {/* Facility 6: Underground Bar */}
            <div className="p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-fuchsia-400/80 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-fuchsia-500/15">
              <div className="p-3.5 bg-gradient-to-br from-fuchsia-500 to-pink-600 text-white inline-block mb-5 shadow-lg shadow-fuchsia-500/25 group-hover:scale-110 transition duration-300">
                <Wine className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-fuchsia-300 transition">
                Underground Bar & Lounge
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Dedicated subterranean lounge space for relaxing refreshments and evening cocktails.
              </p>
            </div>

            {/* Facility 7: Station Transfers */}
            <div className="p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-teal-400/80 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-teal-500/15">
              <div className="p-3.5 bg-gradient-to-br from-teal-400 to-emerald-600 text-white inline-block mb-5 shadow-lg shadow-teal-500/25 group-hover:scale-110 transition duration-300">
                <Car className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-teal-300 transition">
                Transfers & Travel Desk
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Railway station and airport transfers, plus local Udaipur taxi arrangements.
              </p>
            </div>

            {/* Facility 8: Laundry & Elevator */}
            <div className="p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-blue-400/80 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-blue-500/15">
              <div className="p-3.5 bg-gradient-to-br from-blue-500 to-cyan-600 text-white inline-block mb-5 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition duration-300">
                <Shirt className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-blue-300 transition">
                Passenger Lift & 24h Laundry
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Modern passenger elevator serving all floors and 24-hour laundry service support.
              </p>
            </div>

          </div>

          <div className="text-center mt-14">
            <Link
              to="/facilities"
              className="gold-glow-button inline-flex items-center text-xs uppercase tracking-luxury text-[#121212] font-bold py-3.5 px-8 shadow-xl"
            >
              <span>Explore All Verified Facilities</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. DINING & RESTAURANT HIGHLIGHT */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-rose-100/80 border border-rose-300 px-3 py-1">
                <Utensils className="w-3.5 h-3.5 text-rose-700" />
                <span className="text-xs uppercase tracking-luxury text-rose-900 font-bold">
                  Culinary Experience
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                Restaurant, Breakfast Room & Family Thali
              </h2>
              
              <p className="text-gray-700 leading-relaxed text-base font-sans">
                Begin your morning with our rich continental breakfast served in our cozy breakfast room, and savor wholesome traditional Indian favorites including our popular Family Thali near Udaipur Railway Station.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start text-sm text-gray-800 p-2.5 bg-white border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Continental Breakfast:</strong> Served fresh daily in our dedicated breakfast room.</span>
                </div>
                <div className="flex items-start text-sm text-gray-800 p-2.5 bg-white border border-amber-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Family Thali:</strong> Wholesome, homestyle Indian delicacies prepared fresh.</span>
                </div>
                <div className="flex items-start text-sm text-gray-800 p-2.5 bg-white border border-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Underground Bar:</strong> Dedicated relaxing subterranean bar & lounge venue.</span>
                </div>
                <div className="flex items-start text-sm text-gray-800 p-2.5 bg-white border border-sky-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Party Hall:</strong> Banquet & celebration venue for family gatherings in Udaipole.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/restaurant"
                  className="px-6 py-3.5 bg-dark hover:bg-gold hover:text-dark text-white text-xs uppercase tracking-luxury font-bold transition shadow-md"
                >
                  Restaurant Details
                </Link>
                <Link
                  to="/restaurant-menu"
                  className="px-6 py-3.5 border-2 border-dark text-dark hover:bg-dark hover:text-white text-xs uppercase tracking-luxury font-bold transition"
                >
                  View Menu Card
                </Link>
                <Link
                  to="/underground-bar"
                  className="px-6 py-3.5 border-2 border-gold text-gold hover:bg-gold hover:text-dark text-xs uppercase tracking-luxury font-bold transition"
                >
                  Underground Bar
                </Link>
              </div>
            </div>

            {/* Photographic Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="border-2 border-gold/40 p-2 bg-white shadow-xl card-elevated">
                  <img
                    src="/images/5bd7063b4c21cd0001298965.jpg"
                    alt="Family Thali Dining Hotel Madurai"
                    className="w-full aspect-square object-cover"
                  />
                  <span className="text-xs text-gray-800 text-center block mt-2 font-bold">
                    Family Thali Arrangements
                  </span>
                </div>
                <div className="border-2 border-gold/40 p-2 bg-white shadow-xl card-elevated">
                  <img
                    src="/images/5bd7054ac52ae30001ddb980.jpg"
                    alt="Party Hall at Hotel Madurai Udaipur"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span className="text-xs text-gray-800 text-center block mt-2 font-bold">
                    Party Hall near Bus Stand
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="border-2 border-gold/40 p-2 bg-white shadow-xl card-elevated">
                  <img
                    src="/images/room-deluxe-large.jpg"
                    alt="Hotel Madurai Dining Hospitality"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span className="text-xs text-gray-800 text-center block mt-2 font-bold">
                    Prompt In-Room Dining
                  </span>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#1C1C1C] to-[#121212] text-white border-2 border-gold/50 shadow-xl">
                  <Users className="w-7 h-7 text-gold-bright mb-2" />
                  <span className="text-gold-bright font-serif text-lg font-bold block mb-1">
                    Group Bookings
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Host your family events and group meals with special thali catering packages.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. REAL GUEST TESTIMONIALS */}
      <section className="py-24 bg-white border-y border-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-100 border border-amber-300 text-amber-900 text-xs uppercase tracking-luxury font-bold mb-3">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>Real Traveler Impressions</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark">
              Original Guest Reviews
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto my-4" />
            <p className="text-sm text-gray-600 font-sans">
              Authentic reviews from real travelers who experienced Hotel Madurai's welcoming hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div 
                key={item.id} 
                className="bg-gradient-to-br from-[#FAF8F5] to-white border-2 border-gold/30 p-8 flex flex-col justify-between shadow-card-subtle card-elevated relative group"
              >
                <div>
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed italic mb-6 font-serif">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-gold/20">
                  <div className="flex items-center space-x-3">
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gold/70 shadow"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-dark font-serif font-bold flex items-center justify-center text-sm border-2 border-gold/50 shadow">
                        {item.author[0]}
                      </div>
                    )}
                    <div>
                      <span className="font-serif font-bold text-dark block text-sm">
                        {item.author}
                      </span>
                      <span className="text-xs uppercase tracking-luxury text-gold-dark font-semibold block">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 font-bold uppercase tracking-wider">
                    Verified Stay
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-xs uppercase tracking-luxury font-bold text-dark hover:text-gold transition border-b-2 border-dark hover:border-gold pb-1"
            >
              <span>View All Guest Testimonials</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. NEARBY PLACES & LOCATION PREVIEW */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-300 px-3 py-1 mb-3">
                <MapPinned className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-xs uppercase tracking-luxury text-emerald-900 font-bold">
                  Prime Udaipole Connectivity
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark">
                Explore Udaipur from Our Doorstep
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-xl font-sans">
                Located behind State Bank of Indore, Shrinath Market, Udaipole. Walking distance to Udaipole Bus Stand and less than 1 km from Udaipur Railway Station.
              </p>
            </div>

            <Link
              to="/location"
              className="inline-flex items-center px-6 py-3.5 border-2 border-dark text-dark hover:bg-dark hover:text-white transition text-xs uppercase tracking-luxury font-bold shadow-sm"
            >
              <span>Transit & Map Directions</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEARBY_PLACES.map((place) => (
              <div key={place.id} className="bg-white border-2 border-gold/30 shadow-luxury group overflow-hidden card-elevated">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-[11px] px-3 py-1 uppercase tracking-widest font-bold shadow-md">
                    {place.distanceInfo}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-dark mb-1">
                    {place.name}
                  </h3>
                  <p className="text-xs text-gold-dark uppercase tracking-luxury font-bold mb-3">
                    {place.locationText}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VERIFIED UPDATES & PROPERTY CHRONICLES */}
      <section className="py-20 bg-white border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-luxury text-gold-dark font-bold block mb-2">
              Property Chronicles
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark">
              Hotel Madurai Announcements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_UPDATES.map((post) => (
              <div key={post.id} className="border-2 border-gold/25 p-4 bg-[#FAF8F5] hover:border-gold transition shadow-card-subtle card-elevated">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-36 object-cover mb-4 shadow-sm"
                />
                <span className="text-[10px] uppercase tracking-widest text-amber-700 font-bold block mb-1">
                  {post.date}
                </span>
                <h3 className="font-serif text-sm font-bold text-dark mb-2 line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 font-sans">
                  {post.snippet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LUXURY FINAL CTA BANNER */}
      <section className="py-24 bg-gradient-to-b from-[#141414] to-[#0A0A0A] text-white border-t-2 border-gold/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/room-triple-bed-large.jpg" 
            alt="Hotel Madurai Direct Reservation" 
            className="w-full h-full object-cover filter blur-sm"
          />
        </div>
        
        {/* Glow lights */}
        <div className="hero-glow-gold top-0 left-1/3" />
        <div className="hero-glow-emerald bottom-0 right-1/3" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-400/40 px-3.5 py-1 text-xs uppercase tracking-widest text-gold-bright font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Direct Reservation Guarantee</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-md">
            Book Online Today and Look Forward to a Relaxing Stay With Us.
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Call us directly on {HOTEL_INFO.phone} or chat on WhatsApp. Instant reservations with zero booking fees through our verified booking engine.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-glow-button shimmer-badge py-4 px-9 text-[#121212] font-bold text-xs uppercase tracking-luxury shadow-2xl transition hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              <span>Book Online Direct</span>
            </a>
            
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="emerald-glow-button py-4 px-8 text-white font-bold text-xs uppercase tracking-luxury transition hover:scale-105 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              <span>WhatsApp Front Desk</span>
            </a>
            
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="py-4 px-8 border-2 border-white/30 text-white hover:border-gold hover:text-gold-bright font-bold text-xs uppercase tracking-luxury transition hover:bg-white/10"
            >
              <Phone className="w-4 h-4 inline-block mr-2 -mt-0.5 text-gold-bright" />
              <span>Call {HOTEL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

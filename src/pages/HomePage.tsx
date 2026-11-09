import React, { useState, useEffect } from 'react';
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
  MapPinned,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Building2,
  BadgeCheck
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

const HERO_SLIDES = [
  {
    id: 'deluxe-room',
    image: '/images/room-deluxe-main.jpg',
    badge: 'Deluxe Room',
    alt: 'Hotel Madurai Deluxe Room Udaipur',
    headline: 'Comfort & Elegance in the Heart of',
    highlight: 'Udaipur',
    description: 'Designed for practicality and comfort, our deluxe guest rooms feature scenic Udaipur city views, plush king-sized bedding, split AC, and round-the-clock room service.'
  },
  {
    id: 'super-deluxe-room',
    image: '/images/room-super-deluxe-main.jpg',
    badge: 'Super Deluxe Suite',
    alt: 'Hotel Madurai Super Deluxe Room Udaipur',
    headline: 'High Ceilings & Warm Comfort in',
    highlight: 'Lake City',
    description: 'Experience refined couple and family suites featuring handcrafted diamond-tufted headboards, swan towel art, split air-conditioning, and modern en-suite baths with soaking tub.'
  },
  {
    id: 'restaurant',
    image: '/images/restaurant-dining-hall.jpg',
    badge: 'Restaurant & Dining',
    alt: 'Hotel Madurai In-House Multi-Cuisine Restaurant',
    headline: 'Authentic Dining & Thalis in',
    highlight: 'Udaipole',
    description: 'Relish rich continental breakfasts, wholesome traditional Indian thalis, and unwind at our underground lounge bar — freshly prepared for families and travelers.'
  },
  {
    id: 'hotel-facade',
    image: '/images/hotel-exterior-facade.jpg',
    badge: 'Hotel Property & Facade',
    alt: 'Hotel Madurai Grand Facade & Architecture Udaipur',
    headline: '3-Star Hospitality Near Udaipur',
    highlight: 'Station & Udaipole',
    description: 'Strategically located in Shrinath Market, Udaipole — offering effortless access to Udaipur Railway Station, Central Bus Stand, passenger lift, and 24/7 reception.'
  }
];

const FAQS = [
  {
    question: "What are the standard Check-in and Check-out timings?",
    answer: "Check-in time is 12:00 PM and Check-out time is 11:00 AM. Our reception desk operates 24 hours daily, so guests arriving on early morning or late night trains can easily check-in or securely store luggage with our concierge."
  },
  {
    question: "How close is Hotel Madurai to Udaipur Railway Station and Bus Stand?",
    answer: "Hotel Madurai is located in Shrinath Market, Udaipole (behind State Bank of Indore). We are less than 1 km from Udaipur City Railway Station (5 minutes by car/auto) and within walking distance (< 500 meters) from the Udaipole Central Bus Stand."
  },
  {
    question: "What dining options and breakfasts are available?",
    answer: "We offer daily rich continental breakfasts served in our cozy breakfast room. Our in-house restaurant serves celebrated regional Indian Family Thalis, and guests can unwind in the evening at our dedicated Underground Bar."
  },
  {
    question: "Does the hotel have passenger elevator (lift) and accessibility?",
    answer: "Yes, Hotel Madurai features a modern passenger lift serving all guestroom floors, along with luggage assistance from our welcoming front desk team."
  },
  {
    question: "Can the hotel arrange railway station transfers and sightseeing tours?",
    answer: "Yes! Our 24/7 travel desk arranges pick-up and drop transfers from Udaipur City Railway Station and Maharana Pratap Airport (UDR), as well as private cabs for Lake Pichola, City Palace, Fateh Sagar, and Kumbhalgarh tours."
  },
  {
    question: "What are the benefits of booking directly on this official website?",
    answer: "Booking directly on our official portal guarantees the lowest available rate with zero booking fees, flexible cancellation options, and direct personal communication with our on-property reservation team."
  }
];

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div className="space-y-0 bg-[#FAF8F5]">
      
      {/* 1. MAJESTIC HERO SECTION WITH INTERACTIVE SLIDER */}
      <section 
        className="relative min-h-[92vh] sm:min-h-[94vh] flex items-center justify-center bg-[#101010] overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slider Background Images */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.alt} 
                className="w-full h-full object-cover object-center scale-105 animate-kenburns"
              />
            </div>
          ))}

          {/* 10% dark overlay across the hero section as requested */}
          <div className="absolute inset-0 bg-black/10 z-20 pointer-events-none" />
        </div>

        {/* Previous Slide Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/50 hover:bg-gold text-white hover:text-black border border-white/20 hover:border-gold backdrop-blur-md transition-all duration-300 shadow-2xl group cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* Next Slide Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/50 hover:bg-gold text-white hover:text-black border border-white/20 hover:border-gold backdrop-blur-md transition-all duration-300 shadow-2xl group cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Bottom Slide Indicators with Category Labels */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2 sm:space-x-3 bg-black/60 backdrop-blur-md py-1.5 sm:py-2 px-3 sm:px-4 rounded-full border border-white/20 shadow-2xl">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Switch to slide ${idx + 1}: ${slide.badge}`}
              className={`flex items-center space-x-1.5 sm:space-x-2 py-1 px-2.5 sm:px-3 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#FFDF73] to-[#B8860B] text-black shadow-lg font-bold scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${idx === currentSlide ? 'bg-black animate-pulse' : 'bg-gray-400'}`} />
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider">{slide.badge}</span>
              <span className="sm:hidden text-xs">{idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Hero Content Stage */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 w-full">
          <div className="max-w-3xl bg-black/45 backdrop-blur-md p-6 sm:p-8 lg:p-9 rounded-2xl border border-white/20 shadow-2xl">
            
            {/* Active Slide Category Pill & Trust Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4 sm:mb-5">
              <span className="inline-flex items-center space-x-1.5 bg-gold/90 text-black px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                <span>Slide {currentSlide + 1} of {HERO_SLIDES.length}: {HERO_SLIDES[currentSlide].badge}</span>
              </span>

              <div className="inline-flex items-center flex-wrap gap-2 bg-[#1C1C1C]/90 backdrop-blur-md border border-gold/60 px-3.5 py-1 text-xs uppercase tracking-luxury text-gold font-serif font-bold shadow-xl rounded-full">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-gray-400 hidden sm:inline">|</span>
                <span className="text-white font-sans font-semibold tracking-normal text-[11px] sm:text-xs">
                  4.6/5 Rated
                </span>
                <span className="text-gray-400 hidden sm:inline">|</span>
                <span className="text-gold-bright font-semibold">
                  3-Star Hotel
                </span>
              </div>
            </div>

            {/* Dynamic Headline synced with Slide */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-[1.15] mb-4 sm:mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              {HERO_SLIDES[currentSlide].headline}{' '}
              <span className="gold-gradient-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {HERO_SLIDES[currentSlide].highlight}
              </span>.
            </h1>

            {/* Dynamic Description synced with Slide */}
            <p className="text-xs sm:text-sm lg:text-base text-gray-100 font-medium leading-relaxed mb-6 sm:mb-7 max-w-2xl font-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
              {HERO_SLIDES[currentSlide].description}
            </p>

            {/* Hero Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-glow-button shimmer-badge py-3.5 px-6 sm:px-7 text-[#121212] font-bold text-xs uppercase tracking-luxury shadow-2xl transition-all duration-300 hover:scale-[1.03] flex items-center justify-center text-center cursor-pointer rounded-sm"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Direct & Save</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="emerald-glow-button py-3.5 px-6 text-white font-bold text-xs uppercase tracking-luxury backdrop-blur-md transition-all duration-300 flex items-center justify-center text-center shadow-lg group hover:scale-[1.03] cursor-pointer rounded-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse mr-2" />
                <MessageCircle className="w-4 h-4 mr-2 text-white" />
                <span>WhatsApp Front Desk</span>
              </a>

              <Link
                to={currentSlide === 2 ? "/restaurant" : currentSlide === 3 ? "/about" : "/rooms"}
                className="py-3.5 px-5 border-2 border-white/50 text-white hover:border-gold hover:text-gold-bright text-xs uppercase tracking-luxury transition font-semibold backdrop-blur-sm flex items-center justify-center text-center hover:bg-white/10 rounded-sm"
              >
                <span>{currentSlide === 2 ? "View Dining" : currentSlide === 3 ? "About Hotel" : "View Suites"}</span>
              </Link>
            </div>

            {/* Quick Transport Distance & Trust Badges */}
            <div className="mt-7 pt-4 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-sans">
              <div className="flex items-center space-x-2 text-gray-200">
                <span className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded border border-emerald-500/40">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="font-bold text-white block text-xs">Udaipole Stand</span>
                  <span className="text-[11px] text-emerald-400">Walking Distance</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-200">
                <span className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded border border-cyan-500/40">
                  <Car className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="font-bold text-white block text-xs">Railway Station</span>
                  <span className="text-[11px] text-cyan-400">&lt; 1 km (5 Mins)</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-200">
                <span className="p-1.5 bg-amber-500/20 text-amber-400 rounded border border-amber-500/40">
                  <Compass className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="font-bold text-white block text-xs">City Palace</span>
                  <span className="text-[11px] text-amber-400">~10 Mins Drive</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-200">
                <span className="p-1.5 bg-rose-500/20 text-rose-400 rounded border border-rose-500/40">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="font-bold text-white block text-xs">Direct Guarantee</span>
                  <span className="text-[11px] text-rose-400">Zero Extra Fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION QUICK BAR (Floating over section break) */}
      <section className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6">
        <BookingBar />
      </section>

      {/* STATS & CREDENTIALS STRIP WITH RICH COLOR ACCENTS */}
      <section className="py-12 sm:py-14 bg-white border-b border-gold/25">
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
                    src="/images/hotel-exterior-facade.jpg"
                    alt="Hotel Madurai Grand Facade & Building Udaipur"
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

              <div className="pt-4 flex flex-wrap gap-4 items-center">
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
      <section className="py-20 sm:py-24 bg-white border-y border-gold/25 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
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

      {/* 4. AUTHENTIC HOTEL FACILITIES */}
      <section className="py-20 sm:py-24 bg-[#121212] text-white relative overflow-hidden">
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
            <div className="p-6 sm:p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-cyan-400/80 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-500/15">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-600 text-white inline-block mb-4 shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition duration-300">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-1.5 group-hover:text-cyan-300 transition">
                Split Air Conditioning
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Cool, climate-controlled comfort across guestrooms for relaxation after city sightseeing.
              </p>
            </div>

            {/* Facility 2: High Speed WiFi */}
            <div className="p-6 sm:p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-emerald-400/80 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-emerald-500/15">
              <div className="p-3 bg-gradient-to-br from-emerald-400 to-teal-600 text-white inline-block mb-4 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition duration-300">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-1.5 group-hover:text-emerald-300 transition">
                High-Speed WiFi
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Complimentary wireless internet keeping business executives and tourists connected.
              </p>
            </div>

            {/* Facility 3: Satellite TV */}
            <div className="p-6 sm:p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-indigo-400/80 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-indigo-500/15">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white inline-block mb-4 shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition duration-300">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-1.5 group-hover:text-indigo-300 transition">
                Cable & Satellite LED TV
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Flat screen television in every room with a rich selection of entertainment channels.
              </p>
            </div>

            {/* Facility 4: Hot & Cold Shower */}
            <div className="p-6 sm:p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-amber-400/80 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-amber-500/15">
              <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 text-white inline-block mb-4 shadow-lg shadow-amber-500/25 group-hover:scale-110 transition duration-300">
                <Bath className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-1.5 group-hover:text-amber-300 transition">
                Hot & Cold Shower
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Private en-suite bathroom with continuous running water and essential guest toiletries.
              </p>
            </div>

            {/* Facility 5: Restaurant & Breakfast */}
            <div className="p-6 sm:p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-rose-400/80 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-rose-500/15">
              <div className="p-3 bg-gradient-to-br from-rose-500 to-red-600 text-white inline-block mb-4 shadow-lg shadow-rose-500/25 group-hover:scale-110 transition duration-300">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-1.5 group-hover:text-rose-300 transition">
                Restaurant & Breakfast Room
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Serving rich continental breakfast in our cozy room and traditional family thali meals.
              </p>
            </div>

            {/* Facility 6: Underground Bar */}
            <div className="p-6 sm:p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-fuchsia-400/80 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-fuchsia-500/15">
              <div className="p-3 bg-gradient-to-br from-fuchsia-500 to-pink-600 text-white inline-block mb-4 shadow-lg shadow-fuchsia-500/25 group-hover:scale-110 transition duration-300">
                <Wine className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-1.5 group-hover:text-fuchsia-300 transition">
                Underground Bar & Lounge
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Dedicated subterranean lounge space for relaxing refreshments and evening unwind.
              </p>
            </div>

            {/* Facility 7: Station Transfers */}
            <div className="p-6 sm:p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-teal-400/80 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-teal-500/15">
              <div className="p-3 bg-gradient-to-br from-teal-400 to-emerald-600 text-white inline-block mb-4 shadow-lg shadow-teal-500/25 group-hover:scale-110 transition duration-300">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-1.5 group-hover:text-teal-300 transition">
                Transfers & Travel Desk
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Railway station and airport transfers, plus local Udaipur taxi arrangements.
              </p>
            </div>

            {/* Facility 8: Laundry & Elevator */}
            <div className="p-6 sm:p-7 bg-[#1A1A1A] border-2 border-white/10 hover:border-blue-400/80 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-blue-500/15">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 text-white inline-block mb-4 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition duration-300">
                <Shirt className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-1.5 group-hover:text-blue-300 transition">
                Passenger Lift & Laundry
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Modern passenger elevator serving all floors and 24-hour laundry service support.
              </p>
            </div>

          </div>

          <div className="text-center mt-12 sm:mt-14">
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
      <section className="py-20 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            
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
              
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-sans">
                Begin your morning with our rich continental breakfast served in our cozy breakfast room, and savor wholesome traditional Indian favorites including our popular Family Thali near Udaipur Railway Station.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start text-xs sm:text-sm text-gray-800 p-3 bg-white border border-emerald-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Continental Breakfast:</strong> Served fresh daily in our dedicated breakfast room.</span>
                </div>
                <div className="flex items-start text-xs sm:text-sm text-gray-800 p-3 bg-white border border-amber-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Family Thali:</strong> Wholesome, homestyle Indian delicacies prepared fresh.</span>
                </div>
                <div className="flex items-start text-xs sm:text-sm text-gray-800 p-3 bg-white border border-purple-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Underground Bar:</strong> Dedicated relaxing subterranean bar & lounge venue.</span>
                </div>
                <div className="flex items-start text-xs sm:text-sm text-gray-800 p-3 bg-white border border-sky-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Party Hall:</strong> Banquet & celebration venue for family gatherings in Udaipole.</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <Link
                  to="/restaurant"
                  className="px-5 py-3 bg-dark hover:bg-gold hover:text-dark text-white text-xs uppercase tracking-luxury font-bold transition shadow-md"
                >
                  Restaurant Details
                </Link>
                <Link
                  to="/restaurant-menu"
                  className="px-5 py-3 border-2 border-dark text-dark hover:bg-dark hover:text-white text-xs uppercase tracking-luxury font-bold transition"
                >
                  View Menu Card
                </Link>
                <Link
                  to="/underground-bar"
                  className="px-5 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-dark text-xs uppercase tracking-luxury font-bold transition"
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
                    src="/images/restaurant-dining-hall.jpg"
                    alt="Multi-Cuisine Restaurant Dining Hall Hotel Madurai"
                    className="w-full aspect-square object-cover"
                  />
                  <span className="text-xs text-gray-800 text-center block mt-2 font-bold">
                    Multi-Cuisine Restaurant
                  </span>
                </div>
                <div className="border-2 border-gold/40 p-2 bg-white shadow-xl card-elevated">
                  <img
                    src="/images/5bd7063b4c21cd0001298965.jpg"
                    alt="Family Thali Dining Hotel Madurai"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span className="text-xs text-gray-800 text-center block mt-2 font-bold">
                    Famous Family Thali Platter
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-0 sm:pt-6">
                <div className="border-2 border-gold/40 p-2 bg-white shadow-xl card-elevated">
                  <img
                    src="/images/hotel-lobby-staff.jpg"
                    alt="Hotel Madurai Lobby & Restaurant Entry"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span className="text-xs text-gray-800 text-center block mt-2 font-bold">
                    Lobby & Dining Overlook
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
      <section className="py-20 sm:py-24 bg-white border-y border-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((item) => (
              <div 
                key={item.id} 
                className="bg-gradient-to-br from-[#FAF8F5] to-white border-2 border-gold/30 p-6 sm:p-8 flex flex-col justify-between shadow-card-subtle card-elevated relative group"
              >
                <div>
                  <div className="flex text-amber-400 mb-3.5">
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
                        className="w-11 h-11 rounded-full object-cover border-2 border-gold/70 shadow"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-dark font-serif font-bold flex items-center justify-center text-sm border-2 border-gold/50 shadow">
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

          <div className="text-center mt-10">
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

      {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-gold/25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-100 border border-amber-300 text-amber-900 text-xs uppercase tracking-luxury font-bold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Guest Assistance</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto my-3" />
            <p className="text-sm text-gray-600 font-sans">
              Helpful details regarding check-in timings, transport connectivity, and direct booking perks.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white border-2 border-gold/30 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-dark hover:text-gold transition cursor-pointer"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold pr-4 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-gold mr-3 flex-shrink-0" />
                      {faq.question}
                    </span>
                    <span className="p-1 rounded bg-ivory text-gold flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans border-t border-gold/15 bg-ivory/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center bg-white p-5 border border-gold/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs sm:text-sm text-gray-700 font-sans">
              Have another question? Our 24/7 reception desk is available via call or WhatsApp.
            </span>
            <a
              href={getWhatsAppUrl("FAQ Enquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs uppercase tracking-luxury font-bold text-emerald-700 hover:text-emerald-800 transition"
            >
              <MessageCircle className="w-4 h-4 mr-1.5 text-emerald-600" />
              <span>Ask Front Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. NEARBY PLACES & LOCATION PREVIEW */}
      <section className="py-20 sm:py-24 bg-white border-b border-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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

      {/* 9. VERIFIED UPDATES & PROPERTY CHRONICLES */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-luxury text-gold-dark font-bold block mb-2">
              Property Chronicles
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark">
              Hotel Madurai Announcements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {HOTEL_UPDATES.map((post) => (
              <div key={post.id} className="border-2 border-gold/25 p-4 bg-white hover:border-gold transition shadow-card-subtle card-elevated">
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

      {/* 10. LUXURY FINAL CTA BANNER */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#141414] to-[#0A0A0A] text-white border-t-2 border-gold/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/hotel-exterior-facade.jpg" 
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
          
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Call us directly on {HOTEL_INFO.phone} or chat on WhatsApp. Instant reservations with zero booking fees through our verified booking engine.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-glow-button shimmer-badge py-3.5 sm:py-4 px-8 sm:px-9 text-[#121212] font-bold text-xs uppercase tracking-luxury shadow-2xl transition hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              <span>Book Online Direct</span>
            </a>
            
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="emerald-glow-button py-3.5 sm:py-4 px-7 sm:px-8 text-white font-bold text-xs uppercase tracking-luxury transition hover:scale-105 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              <span>WhatsApp Front Desk</span>
            </a>
            
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="py-3.5 sm:py-4 px-7 sm:px-8 border-2 border-white/30 text-white hover:border-gold hover:text-gold-bright font-bold text-xs uppercase tracking-luxury transition hover:bg-white/10"
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

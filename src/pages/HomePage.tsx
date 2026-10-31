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
  Users 
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
      <section className="relative min-h-[94vh] flex items-center justify-center bg-[#121212] overflow-hidden">
        {/* Large Original Hotel Photography with Ken Burns effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/room-super-deluxe-large.jpg" 
            alt="Hotel Madurai Super Deluxe Suite Udaipur" 
            className="w-full h-full object-cover object-center animate-kenburns opacity-70"
          />
          {/* Multi-layered luxury gradients for depth & readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/95 via-[#121212]/80 to-[#121212]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            
            {/* Prestige Hospitality Badge */}
            <div className="inline-flex items-center space-x-2.5 bg-dark/80 backdrop-blur-md border border-gold/50 px-4 py-2 text-xs uppercase tracking-luxury text-gold mb-6 font-serif font-semibold shadow-2xl">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>3-Star Business Class & Family Hospitality</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.12] mb-6">
              Comfort & Elegance in the Heart of <span className="gold-gradient-text">Udaipur</span>.
            </h1>

            {/* Authentic Subtitle */}
            <p className="text-base sm:text-xl text-gray-200 font-normal leading-relaxed mb-8 max-w-2xl font-sans">
              Hotel Madurai is a business class hotel at Udaipur which pampers you with all the facilities and amenities a 21st century traveler expects — fine accommodation, cozy family-run hospitality, and prime connectivity in Udaipole.
            </p>

            {/* Hero Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-badge py-4 px-8 bg-gold hover:bg-gold-light text-[#141414] font-bold text-xs uppercase tracking-luxury shadow-2xl transition-all duration-300 hover:scale-[1.03] flex items-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Online Direct
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-7 border border-emerald-400 bg-emerald-950/40 hover:bg-emerald-600 text-emerald-300 hover:text-white font-semibold text-xs uppercase tracking-luxury backdrop-blur-md transition-all duration-300 flex items-center shadow-lg"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-emerald-400 group-hover:text-white" />
                WhatsApp Enquiry
              </a>

              <Link
                to="/rooms"
                className="py-4 px-7 border border-white/25 text-white hover:border-gold hover:text-gold text-xs uppercase tracking-luxury transition font-medium backdrop-blur-sm"
              >
                Explore Rooms
              </Link>
            </div>

            {/* Quick Transport Distance Badges */}
            <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap gap-6 text-xs text-gray-300 font-sans">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Udaipole Bus Stand (Walking Distance)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span>Udaipur Railway Station (&lt; 1 km)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span>Fateh Sagar Lake & Palaces (~10 mins)</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESERVATION QUICK BAR (Floating over section break) */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6">
        <BookingBar />
      </section>

      {/* STATS & CREDENTIALS STRIP */}
      <section className="py-12 bg-white border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gold/20">
            
            <div className="pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-dark block mb-1">
                3 Star
              </span>
              <span className="text-xs uppercase tracking-luxury text-gold font-semibold block">
                Business & Family Class
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-dark block mb-1">
                3 Categories
              </span>
              <span className="text-xs uppercase tracking-luxury text-gold font-semibold block">
                Super Deluxe, Triple & Deluxe
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-dark block mb-1">
                &lt; 500m
              </span>
              <span className="text-xs uppercase tracking-luxury text-gold font-semibold block">
                To Udaipole Bus Stand
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-dark block mb-1">
                24 / 7
              </span>
              <span className="text-xs uppercase tracking-luxury text-gold font-semibold block">
                Reception & Station Transfers
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT US EDITORIAL SECTION */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative border-2 border-gold/40 p-3 bg-white shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/room-triple-bed-large.jpg"
                    alt="Hotel Madurai Triple Bed Suite Udaipur"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Floating Prestige Badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#161616] text-white p-6 border border-gold/50 shadow-2xl max-w-xs hidden sm:block">
                  <HeartHandshake className="w-8 h-8 text-gold mb-2" />
                  <span className="text-gold font-serif text-xl font-bold block mb-1">
                    Family-Run Warmth
                  </span>
                  <span className="text-xs text-gray-300 leading-relaxed block">
                    Polite, welcoming staff happy to provide curated local dining and sightseeing advice.
                  </span>
                </div>
              </div>
            </div>

            {/* Text Editorial Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-widest text-gold font-bold">
                  About Hotel Madurai
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                Fine Accommodation, Business and Recreation at an Affordable Price.
              </h2>

              <div className="space-y-4 text-gray-700 text-base leading-relaxed font-sans">
                <p>
                  Hotel Madurai is a business class hotel at Udaipur which pampers you with all the facilities and amenities a 21st century traveler expects.
                </p>
                <p>
                  The hotel offers guests fine accommodation, business and recreation facilities at a very affordable price i.e. <strong>A/C Rooms, cable/satellite TV, private bath with hot and cold shower and room service.</strong>
                </p>
                <p>
                  With cozy interiors, Hotel Madurai features a polite and welcoming staff working for you in a family-run environment, who will be happy to give you good tips on nearby restaurants and tourist spots.
                </p>
                
                <div className="p-5 bg-white border-l-4 border-gold shadow-sm text-dark italic font-serif text-base">
                  "You will feel right at home when you try our rich continental breakfast, which may be enjoyed in our cozy breakfast room. Enjoy your stay at Hotel Madurai."
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-5 items-center">
                <Link
                  to="/about"
                  className="inline-flex items-center text-xs uppercase tracking-luxury font-bold text-dark hover:text-gold transition border-b-2 border-dark hover:border-gold pb-1"
                >
                  <span>Explore Hotel Story</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="inline-flex items-center text-xs uppercase tracking-luxury font-semibold text-gray-700 hover:text-gold transition"
                >
                  <Phone className="w-3.5 h-3.5 text-gold mr-2" />
                  Call Reception: {HOTEL_INFO.phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ROOM CATEGORIES SHOWCASE */}
      <section className="py-24 bg-white border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 mb-2">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-luxury text-gold font-bold">
                  Accommodations
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark">
                Curated Guest Suites
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-xl font-sans">
                Every room is maintained with genuine attention to comfort, equipped with split air conditioning, satellite LED TV, and private hot & cold baths.
              </p>
            </div>

            <Link
              to="/rooms"
              className="inline-flex items-center px-6 py-3.5 border-2 border-dark text-dark hover:bg-dark hover:text-white transition text-xs uppercase tracking-luxury font-bold shadow-sm"
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
      <section className="py-24 bg-[#141414] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-2">
              Guest Conveniences
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Authentic Hotel Facilities
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
            <p className="text-sm text-gray-400 font-sans">
              Preserving all genuine services documented at Hotel Madurai for a seamless, relaxing stay in Udaipur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 bg-[#1C1C1C] border border-white/10 hover:border-gold/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="p-3 bg-dark/60 border border-gold/30 inline-block text-gold mb-5 group-hover:bg-gold group-hover:text-dark transition">
                <Wind className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Split Air Conditioning</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Cool, climate-controlled comfort across guestrooms for relaxation after hot city tours.
              </p>
            </div>

            <div className="p-7 bg-[#1C1C1C] border border-white/10 hover:border-gold/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="p-3 bg-dark/60 border border-gold/30 inline-block text-gold mb-5 group-hover:bg-gold group-hover:text-dark transition">
                <Wifi className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">High-Speed WiFi</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Complimentary wireless internet keeping business executives and leisure travelers connected.
              </p>
            </div>

            <div className="p-7 bg-[#1C1C1C] border border-white/10 hover:border-gold/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="p-3 bg-dark/60 border border-gold/30 inline-block text-gold mb-5 group-hover:bg-gold group-hover:text-dark transition">
                <Tv className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Cable / Satellite LED TV</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Flat screen television in every room with a rich selection of entertainment channels.
              </p>
            </div>

            <div className="p-7 bg-[#1C1C1C] border border-white/10 hover:border-gold/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="p-3 bg-dark/60 border border-gold/30 inline-block text-gold mb-5 group-hover:bg-gold group-hover:text-dark transition">
                <Bath className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Hot & Cold Shower</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Private en-suite bathroom with continuous running water and essential guest toiletries.
              </p>
            </div>

            <div className="p-7 bg-[#1C1C1C] border border-white/10 hover:border-gold/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="p-3 bg-dark/60 border border-gold/30 inline-block text-gold mb-5 group-hover:bg-gold group-hover:text-dark transition">
                <Utensils className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Restaurant & Breakfast</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Serving rich continental breakfast in our cozy room and traditional family thali meals.
              </p>
            </div>

            <div className="p-7 bg-[#1C1C1C] border border-white/10 hover:border-gold/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="p-3 bg-dark/60 border border-gold/30 inline-block text-gold mb-5 group-hover:bg-gold group-hover:text-dark transition">
                <Wine className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Underground Bar</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Dedicated underground lounge space for relaxing refreshments and evening unwind.
              </p>
            </div>

            <div className="p-7 bg-[#1C1C1C] border border-white/10 hover:border-gold/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="p-3 bg-dark/60 border border-gold/30 inline-block text-gold mb-5 group-hover:bg-gold group-hover:text-dark transition">
                <Car className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Transfers & Travel Desk</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Airport and railway station transfers, plus local Udaipur sightseeing guidance.
              </p>
            </div>

            <div className="p-7 bg-[#1C1C1C] border border-white/10 hover:border-gold/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="p-3 bg-dark/60 border border-gold/30 inline-block text-gold mb-5 group-hover:bg-gold group-hover:text-dark transition">
                <Shirt className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">24h Laundry & Lift</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Modern passenger elevator serving all floors and 24 hours laundry service support.
              </p>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link
              to="/facilities"
              className="inline-flex items-center text-xs uppercase tracking-luxury text-gold hover:text-white transition font-bold"
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
              <div className="inline-flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-luxury text-gold font-bold">
                  Culinary Experience
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                Restaurant, Breakfast Room & Family Thali
              </h2>
              
              <p className="text-gray-700 leading-relaxed text-base font-sans">
                Begin your morning with our rich continental breakfast served in a cozy dining hall, and savor delicious traditional Indian favorites including our renowned Family Thali near Udaipur Railway Station.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Continental Breakfast:</strong> Served fresh daily in our cozy breakfast room.</span>
                </div>
                <div className="flex items-start text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Family Thali:</strong> Popular wholesome traditional thalis near Udaipur Station.</span>
                </div>
                <div className="flex items-start text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Underground Bar:</strong> Dedicated relaxing subterranean bar & lounge venue.</span>
                </div>
                <div className="flex items-start text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Party Hall:</strong> Banquet & celebration venue near Udaipole Bus Stand.</span>
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="border border-gold/30 p-2 bg-white shadow-xl">
                  <img
                    src="/images/5bd7063b4c21cd0001298965.jpg"
                    alt="Family Thali Dining Hotel Madurai"
                    className="w-full aspect-square object-cover"
                  />
                  <span className="text-[11px] text-gray-600 text-center block mt-2 font-medium">
                    Family Thali Arrangements
                  </span>
                </div>
                <div className="border border-gold/30 p-2 bg-white shadow-xl">
                  <img
                    src="/images/5bd7054ac52ae30001ddb980.jpg"
                    alt="Party Hall at Hotel Madurai Udaipur"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span className="text-[11px] text-gray-600 text-center block mt-2 font-medium">
                    Party Hall near Bus Stand
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="border border-gold/30 p-2 bg-white shadow-xl">
                  <img
                    src="/images/room-deluxe-large.jpg"
                    alt="Hotel Madurai Dining Hospitality"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span className="text-[11px] text-gray-600 text-center block mt-2 font-medium">
                    Prompt In-Room Dining
                  </span>
                </div>
                <div className="p-6 bg-[#181818] text-white border border-gold/40 shadow-xl">
                  <Users className="w-6 h-6 text-gold mb-2" />
                  <span className="text-gold font-serif text-lg font-bold block mb-1">
                    Group Bookings
                  </span>
                  <p className="text-xs text-gray-400">
                    Host your family events and group meals with special thali catering packages.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. REAL GUEST TESTIMONIALS */}
      <section className="py-24 bg-white border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-2">
              Guest Impressions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark">
              Original Guest Reviews
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
            <p className="text-sm text-gray-600 font-sans">
              Unedited reviews from real travelers who experienced Hotel Madurai's hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#FAF8F5] border border-gold/30 p-8 flex flex-col justify-between shadow-card-subtle hover:shadow-luxury transition duration-300 relative group"
              >
                <div>
                  <div className="flex text-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed italic mb-6 font-serif">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-5 border-t border-gold/20">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-11 h-11 rounded-full object-cover border-2 border-gold/60 shadow"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-dark text-gold font-serif font-bold flex items-center justify-center text-sm border-2 border-gold/50 shadow">
                      {item.author[0]}
                    </div>
                  )}
                  <div>
                    <span className="font-serif font-bold text-dark block text-sm">
                      {item.author}
                    </span>
                    <span className="text-xs uppercase tracking-luxury text-gold font-semibold block">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-xs uppercase tracking-luxury font-bold text-dark hover:text-gold transition border-b border-dark hover:border-gold pb-0.5"
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
              <div className="inline-flex items-center space-x-2 mb-2">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-luxury text-gold font-bold">
                  Location & Connectivity
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark">
                Prime Udaipole Hub
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-xl font-sans">
                Located behind State Bank of Indore, Shrinath Market, Udaipole. Near Udaipur City Railway Station and Udaipur Bus Stand.
              </p>
            </div>

            <Link
              to="/location"
              className="inline-flex items-center px-6 py-3.5 border-2 border-dark text-dark hover:bg-dark hover:text-white transition text-xs uppercase tracking-luxury font-bold shadow-sm"
            >
              <span>Map & Transit Directions</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEARBY_PLACES.map((place) => (
              <div key={place.id} className="bg-white border border-gold/30 shadow-luxury group overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute top-3 right-3 bg-[#181818]/90 text-gold text-[11px] px-3 py-1 uppercase tracking-widest font-semibold border border-gold/40 shadow">
                    {place.distanceInfo}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-dark mb-1">
                    {place.name}
                  </h3>
                  <p className="text-xs text-gold uppercase tracking-luxury font-semibold mb-3">
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
            <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-2">
              Property Chronicles
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark">
              Hotel Madurai Announcements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_UPDATES.map((post) => (
              <div key={post.id} className="border border-gold/25 p-4 bg-[#FAF8F5] hover:border-gold/70 transition shadow-card-subtle">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-36 object-cover mb-4 shadow-sm"
                />
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-1">
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
      <section className="py-24 bg-[#141414] text-white border-t border-gold/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/images/room-triple-bed-large.jpg" 
            alt="Hotel Madurai Direct Reservation" 
            className="w-full h-full object-cover filter blur-sm"
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <span className="text-gold text-xs uppercase tracking-luxury font-bold block">
            Instant Direct Reservation
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white">
            Book Online Today and Look Forward to a Relaxing Stay With Us.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Call us directly on {HOTEL_INFO.phone} or email {HOTEL_INFO.email}. Convenient reservations with our verified booking portal.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-badge py-4 px-9 bg-gold hover:bg-gold-light text-[#141414] font-bold text-xs uppercase tracking-luxury shadow-2xl transition hover:scale-105"
            >
              <Calendar className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              Book Online Now
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 border border-emerald-500 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-600 hover:text-white font-semibold text-xs uppercase tracking-luxury transition"
            >
              <MessageCircle className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="py-4 px-8 border border-white/20 text-white hover:border-gold hover:text-gold font-medium text-xs uppercase tracking-luxury transition"
            >
              <Phone className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              Call +91 87419 14825
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

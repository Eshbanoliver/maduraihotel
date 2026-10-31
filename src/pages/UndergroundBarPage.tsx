import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wine, 
  GlassWater, 
  Music, 
  Clock, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Users 
} from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const UndergroundBarPage: React.FC = () => {
  return (
    <div className="bg-[#141414] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 flex items-center justify-center border-b border-gold/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src="/images/room-super-deluxe-large.jpg" 
            alt="Underground Bar Ambiance" 
            className="w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-dark/80 px-4 py-1.5 border border-gold/40 text-gold text-xs uppercase tracking-widest font-serif">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Property Lounge</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-wide">
            UnderGround <span className="gold-gradient-text">Bar</span>
          </h1>

          <div className="w-20 h-[1px] bg-gold mx-auto" />

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            A relaxed subterranean setting within Hotel Madurai, crafted for evening unwind, chilled refreshments, and pleasant conversations.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppUrl("Underground Bar Timings & Service")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-gold hover:bg-gold-light text-[#171717] font-semibold text-xs uppercase tracking-luxury shadow-lg transition"
            >
              <MessageCircle className="w-4 h-4 inline mr-2 -mt-0.5" />
              Bar Enquiries & Timings
            </a>
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="px-7 py-3.5 border border-white/20 text-white hover:border-gold hover:text-gold text-xs uppercase tracking-luxury transition"
            >
              <Phone className="w-4 h-4 inline mr-2 -mt-0.5" />
              Call Hotel Desk: {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Narrative & Ambiance */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Ambiance Card */}
            <div className="lg:col-span-5 relative">
              <div className="border border-gold/40 p-3 bg-[#1C1C1C] shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-b from-[#222222] to-[#161616] flex flex-col items-center justify-center p-8 text-center border border-white/5 relative overflow-hidden">
                  <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-6 shadow-inner">
                    <Wine className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    UnderGround Bar
                  </h3>
                  <span className="text-xs uppercase tracking-luxury text-gold font-medium mb-6">
                    Hotel Madurai • Udaipur
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                    Curated exclusively for in-house residents and guests seeking a serene, unhurried beverage space after touring Lake Pichola and the City Palace.
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/10 w-full flex justify-around text-xs text-gold">
                    <span>Intimate Seating</span>
                    <span>•</span>
                    <span>Cool Cellar Ambiance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  Subterranean Retreat
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-snug">
                Quiet Sophistication Beneath the Bustle of Udaipur.
              </h2>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Hotel Madurai's UnderGround Bar is designed as an intimate lounge where travelers can decompress. Whether you are returning from an extensive day trip through Udaipur's royal monuments or conducting informal evening conversations, our subterranean bar provides comfortable privacy away from street commotion.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-[#1F1F1F] border border-gold/20">
                  <Clock className="w-5 h-5 text-gold mb-2" />
                  <h4 className="font-serif font-bold text-white text-sm mb-1">Evening Service</h4>
                  <p className="text-xs text-gray-400">
                    Relaxed evening hours tailored for hotel guests and visitors.
                  </p>
                </div>

                <div className="p-4 bg-[#1F1F1F] border border-gold/20">
                  <GlassWater className="w-5 h-5 text-gold mb-2" />
                  <h4 className="font-serif font-bold text-white text-sm mb-1">Refreshing Beverages</h4>
                  <p className="text-xs text-gray-400">
                    Chilled soft beverages, mocktails, and evening refreshments.
                  </p>
                </div>

                <div className="p-4 bg-[#1F1F1F] border border-gold/20">
                  <Music className="w-5 h-5 text-gold mb-2" />
                  <h4 className="font-serif font-bold text-white text-sm mb-1">Ambient Music</h4>
                  <p className="text-xs text-gray-400">
                    Mellow background soundscape allowing effortless conversation.
                  </p>
                </div>

                <div className="p-4 bg-[#1F1F1F] border border-gold/20">
                  <Users className="w-5 h-5 text-gold mb-2" />
                  <h4 className="font-serif font-bold text-white text-sm mb-1">Private Gatherings</h4>
                  <p className="text-xs text-gray-400">
                    Option to reserve lounge corners for small family or colleague groups.
                  </p>
                </div>
              </div>

              {/* Verified Information Disclosure */}
              <div className="p-4 bg-[#181818] border-l-2 border-gold text-xs text-gray-400 leading-relaxed">
                <span className="text-gold font-semibold block mb-1">Authentic Property Feature:</span>
                UnderGround Bar is an authentic part of Hotel Madurai's original architecture. For daily service hours, available beverage selections, and private group reservations, please enquire with reception.
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppUrl("Underground Bar Availability")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gold hover:bg-gold-light text-[#141414] font-semibold text-xs uppercase tracking-luxury transition"
                >
                  Contact Bartender / Reception
                </a>
                <Link
                  to="/restaurant"
                  className="px-6 py-3 border border-white/20 text-white hover:border-gold hover:text-gold text-xs uppercase tracking-luxury transition"
                >
                  View Restaurant & Thalis
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

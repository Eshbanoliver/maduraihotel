import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Coffee, 
  Users, 
  Calendar, 
  MessageCircle, 
  Clock, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const RestaurantPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="bg-[#141414] text-white py-24 relative overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/5bd7063b4c21cd0001298965.jpg" 
            alt="Hotel Madurai Restaurant" 
            className="w-full h-full object-cover animate-kenburns"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark/80 px-4 py-1.5 border border-gold/40 text-gold text-xs uppercase tracking-luxury mb-4 font-serif font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hospitality Dining</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Restaurant & Breakfast Room
          </h1>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            "You will feel right at home when you try our rich continental breakfast, which may be enjoyed in our cozy breakfast room."
          </p>
        </div>
      </section>

      {/* Main Dining Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-luxury text-gold font-bold">
                  Authentic Hospitality
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark leading-tight">
                Continental Breakfasts, Home Flavors & Famous Family Thalis
              </h2>

              <p className="text-gray-700 leading-relaxed text-base font-sans">
                Dining at Hotel Madurai is rooted in the warmth of home-style Indian cuisine and thoughtful morning refreshment. Whether you are catching an early morning train from Udaipur Station or returning from a day around Lake Pichola, our dining facilities cater to both leisure tourists and busy corporate executives.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 bg-white border-l-4 border-gold shadow-sm">
                  <h4 className="font-serif font-bold text-dark text-lg mb-1 flex items-center">
                    <Coffee className="w-5 h-5 text-gold mr-2.5" />
                    Cozy Breakfast Room & Continental Breakfast
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    Enjoy freshly prepared morning beverages, continental breakfast items, toasts, and hot tea/coffee in our relaxing, quiet breakfast area.
                  </p>
                </div>

                <div className="p-5 bg-white border-l-4 border-gold shadow-sm">
                  <h4 className="font-serif font-bold text-dark text-lg mb-1 flex items-center">
                    <Utensils className="w-5 h-5 text-gold mr-2.5" />
                    Renowned Family Thali Near Udaipur Station
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    Our traditional Family Thali is renowned in the Udaipole area for delicious variety, hygiene, authentic spices, and affordable budget-friendly pricing.
                  </p>
                </div>

                <div className="p-5 bg-white border-l-4 border-gold shadow-sm">
                  <h4 className="font-serif font-bold text-dark text-lg mb-1 flex items-center">
                    <Users className="w-5 h-5 text-gold mr-2.5" />
                    Group Dining & Party Hall Banquets
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    Special meal arrangements and buffet-style service catered for tour groups, family events, and functions in our party hall near the Bus Stand.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/restaurant-menu"
                  className="shimmer-badge px-7 py-3.5 bg-gold hover:bg-gold-light text-[#141414] font-bold text-xs uppercase tracking-luxury shadow-lg transition"
                >
                  Explore Restaurant Menu
                </Link>
                <Link
                  to="/underground-bar"
                  className="px-7 py-3.5 border-2 border-dark text-dark hover:bg-dark hover:text-white font-bold text-xs uppercase tracking-luxury transition"
                >
                  Visit Underground Bar
                </Link>
              </div>
            </div>

            {/* Photographic Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="border border-gold/30 p-2 bg-white shadow-xl">
                  <img
                    src="/images/5bd7063b4c21cd0001298965.jpg"
                    alt="Family Thali Dining Hotel Madurai"
                    className="w-full aspect-square object-cover"
                  />
                  <span className="text-xs text-gray-700 text-center block mt-2 font-semibold">
                    Family Thali Arrangements
                  </span>
                </div>
                <div className="border border-gold/30 p-2 bg-white shadow-xl">
                  <img
                    src="/images/room-super-deluxe-large.jpg"
                    alt="In-room dining service"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span className="text-xs text-gray-700 text-center block mt-2 font-semibold">
                    Prompt In-Room Dining Service
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="border border-gold/30 p-2 bg-white shadow-xl">
                  <img
                    src="/images/5bd7054ac52ae30001ddb980.jpg"
                    alt="Party Hall Dining Setup"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span className="text-xs text-gray-700 text-center block mt-2 font-semibold">
                    Party & Banquet Setup
                  </span>
                </div>
                <div className="bg-[#181818] text-white p-7 border border-gold/40 shadow-2xl">
                  <Heart className="w-7 h-7 text-gold mb-3" />
                  <h4 className="font-serif font-bold text-xl mb-2">Guest Verified</h4>
                  <p className="text-xs sm:text-sm text-gray-300 italic mb-3 font-serif leading-relaxed">
                    "Food was tasty and within our budget. Loved staying in this hotel."
                  </p>
                  <span className="text-[11px] text-gold uppercase tracking-widest block font-bold">
                    — Sapna, Delhi
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact for Group Meals & Party Hall */}
      <section className="py-20 bg-[#141414] text-white border-t border-gold/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs uppercase tracking-luxury text-gold font-bold">
            Group Dining & Celebrations
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold">
            Plan a Family Thali or Event at Hotel Madurai
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
            Contact us for group dining bookings, tour party meals, or customized catering packages.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppUrl("Dining and Family Thali")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-gold text-[#141414] font-bold text-xs uppercase tracking-luxury shadow-lg"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="px-7 py-3.5 border border-white/20 text-white hover:border-gold hover:text-gold text-xs uppercase tracking-luxury transition"
            >
              Call: {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

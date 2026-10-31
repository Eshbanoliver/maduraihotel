import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Coffee, 
  Wine, 
  Users, 
  Calendar, 
  MessageCircle, 
  Check, 
  Clock, 
  Heart 
} from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const RestaurantPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/5bd7063b4c21cd0001298965.jpg" 
            alt="Hotel Madurai Restaurant" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-3">
            Hotel Madurai Dining Experience
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Restaurant & Breakfast Room
          </h1>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            "You will feel right at home when you try our rich continental breakfast, which may be enjoyed in our cozy breakfast room."
          </p>
        </div>
      </section>

      {/* Main Dining Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  Authentic Hospitality
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark leading-snug">
                Wholesome Flavors, Continental Breakfasts & Famous Family Thalis
              </h2>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Dining at Hotel Madurai is rooted in the warmth of home-style Indian cuisine and thoughtful morning refreshment. Whether you are catching an early morning train from Udaipur Station or returning from a day around Lake Pichola, our dining facilities cater to both leisure tourists and busy corporate executives.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-white border-l-2 border-gold shadow-sm">
                  <h4 className="font-serif font-bold text-dark text-base mb-1 flex items-center">
                    <Coffee className="w-4 h-4 text-gold mr-2" />
                    Cozy Breakfast Room & Continental Breakfast
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Enjoy freshly prepared morning beverages, continental breakfast items, toasts, and hot tea/coffee in our relaxing, quiet breakfast area.
                  </p>
                </div>

                <div className="p-4 bg-white border-l-2 border-gold shadow-sm">
                  <h4 className="font-serif font-bold text-dark text-base mb-1 flex items-center">
                    <Utensils className="w-4 h-4 text-gold mr-2" />
                    Renowned Family Thali Near Udaipur Station
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Our traditional Family Thali is renowned in the Udaipole area for delicious variety, hygiene, authentic spices, and affordable budget-friendly pricing.
                  </p>
                </div>

                <div className="p-4 bg-white border-l-2 border-gold shadow-sm">
                  <h4 className="font-serif font-bold text-dark text-base mb-1 flex items-center">
                    <Users className="w-4 h-4 text-gold mr-2" />
                    Group Dining & Party Hall Banquets
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Special meal arrangements and buffet-style service catered for tour groups, family events, and functions in our party hall near the Bus Stand.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/restaurant-menu"
                  className="px-6 py-3 bg-gold hover:bg-gold-light text-[#1F1F1F] font-semibold text-xs uppercase tracking-luxury shadow-md transition"
                >
                  Explore Restaurant Menu
                </Link>
                <Link
                  to="/underground-bar"
                  className="px-6 py-3 border border-dark text-dark hover:bg-dark hover:text-white font-medium text-xs uppercase tracking-luxury transition"
                >
                  Visit Underground Bar
                </Link>
              </div>
            </div>

            {/* Photographic Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="border border-gold/30 p-2 bg-white shadow-md">
                  <img
                    src="/images/5bd7063b4c21cd0001298965.jpg"
                    alt="Family Thali Dining Hotel Madurai"
                    className="w-full aspect-square object-cover"
                  />
                  <span className="text-[11px] text-gray-500 text-center block mt-2 font-medium">
                    Family Thali Arrangements
                  </span>
                </div>
                <div className="border border-gold/30 p-2 bg-white shadow-md">
                  <img
                    src="/images/room-super-deluxe-large.jpg"
                    alt="In-room dining service"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span className="text-[11px] text-gray-500 text-center block mt-2 font-medium">
                    Prompt In-Room Dining Service
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="border border-gold/30 p-2 bg-white shadow-md">
                  <img
                    src="/images/5bd7054ac52ae30001ddb980.jpg"
                    alt="Party Hall Dining Setup"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span className="text-[11px] text-gray-500 text-center block mt-2 font-medium">
                    Party & Banquet Dining Setup
                  </span>
                </div>
                <div className="bg-[#242424] text-white p-6 border border-gold/40 shadow-lg">
                  <Heart className="w-6 h-6 text-gold mb-3" />
                  <h4 className="font-serif font-bold text-lg mb-2">Guest Verified</h4>
                  <p className="text-xs text-gray-300 italic mb-2">
                    "Food was tasty and within our budget. Loved staying in this hotel."
                  </p>
                  <span className="text-[10px] text-gold uppercase tracking-widest block font-medium">
                    — Sapna, Delhi
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact for Group Meals & Party Hall */}
      <section className="py-16 bg-[#1A1A1A] text-white border-t border-gold/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Group Dining & Celebrations
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            Plan a Family Thali or Event at Hotel Madurai
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Contact us for group dining bookings, tour party meals, or customized catering packages.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppUrl("Dining and Family Thali")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gold text-[#1F1F1F] font-semibold text-xs uppercase tracking-luxury shadow-md"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="px-6 py-3 border border-white/20 text-white hover:border-gold hover:text-gold text-xs uppercase tracking-luxury transition"
            >
              Call: {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

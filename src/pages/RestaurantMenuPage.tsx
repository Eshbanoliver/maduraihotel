import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Coffee, 
  MessageCircle, 
  Phone, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const RestaurantMenuPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="bg-[#141414] text-white py-24 relative overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/restaurant-dining-hall.jpg" 
            alt="Hotel Madurai Dining" 
            className="w-full h-full object-cover animate-kenburns"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark/80 px-4 py-1.5 border border-gold/40 text-gold text-xs uppercase tracking-luxury mb-4 font-serif font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Culinary Selections</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Restaurant Menu
          </h1>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Freshly prepared home-style Indian specialties, daily continental breakfasts, and our celebrated Family Thalis.
          </p>
        </div>
      </section>

      {/* Verified Core Offerings Overview */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Offering 1: Continental Breakfast */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 border border-gold/30 shadow-luxury hover:border-gold transition">
              <div className="flex items-center space-x-4 mb-5">
                <div className="p-3.5 bg-[#FAF8F5] border border-gold/40 text-gold shadow-sm flex-shrink-0">
                  <Coffee className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark">
                    Rich Continental Breakfast
                  </h3>
                  <span className="text-xs text-gold uppercase tracking-luxury font-bold">
                    Served in Cozy Breakfast Room
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-6 font-sans">
                Freshly prepared morning breakfast service for our hotel residents, featuring hot tea, brewed coffee, toast, and morning selections to start your sightseeing or business day energized.
              </p>

              <div className="space-y-2.5 text-xs text-gray-700 border-t border-gold/20 pt-4 font-sans">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0" />
                  <span>Served fresh daily in our dedicated breakfast room</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0" />
                  <span>In-room dining delivery upon guest request</span>
                </div>
              </div>
            </div>

            {/* Offering 2: Famous Family Thali */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 border border-gold/30 shadow-luxury hover:border-gold transition">
              <div className="flex items-center space-x-4 mb-5">
                <div className="p-3.5 bg-[#FAF8F5] border border-gold/40 text-gold shadow-sm flex-shrink-0">
                  <Utensils className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark">
                    Traditional Family Thali
                  </h3>
                  <span className="text-xs text-gold uppercase tracking-luxury font-bold">
                    Near Udaipur Railway Station
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-6 font-sans">
                Our popular multi-dish traditional thali platter featuring genuine regional recipes, freshly made breads, seasonal vegetables, lentils, rice, and accompaniments. Renowned for taste and value.
              </p>

              <div className="space-y-2.5 text-xs text-gray-700 border-t border-gold/20 pt-4 font-sans">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0" />
                  <span>Wholesome family-style portions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0" />
                  <span>Catering available for tour groups and party hall events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Menu Placeholder Notice (Strict adherence: zero invented fake dishes or fake prices) */}
          <div className="bg-white p-6 sm:p-10 lg:p-14 border-2 border-dashed border-gold/60 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border-2 border-gold/50 flex items-center justify-center mx-auto text-gold shadow-inner">
              <FileText className="w-8 h-8" />
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark">
                Daily Seasonal Menu & Live Kitchen Specials
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
                Hotel Madurai's kitchen prepares daily rotating breakfast items, vegetarian curries, breads, thalis, and beverages according to seasonal market freshness. In accordance with authentic verification standards, itemized rates and daily special menus are provided directly upon arrival or by request.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] max-w-lg mx-auto border border-gold/40 text-xs sm:text-sm text-gray-700 flex items-start space-x-3 text-left">
              <AlertCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span>
                To check today's current menu card, daily thali rates, or arrange group meal catering, please contact our restaurant front desk on WhatsApp or phone.
              </span>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href={getWhatsAppUrl("Daily Restaurant Menu and Thali Rates")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-luxury flex items-center transition shadow-md"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Request Today's Menu via WhatsApp
              </a>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="px-7 py-3.5 border-2 border-dark text-dark hover:bg-dark hover:text-white font-bold text-xs uppercase tracking-luxury flex items-center transition"
              >
                <Phone className="w-4 h-4 mr-2 text-gold" />
                Call Reception: {HOTEL_INFO.phone}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Underground Bar Banner */}
      <section className="py-20 bg-[#141414] text-white border-t border-gold/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs uppercase tracking-luxury text-gold font-bold">
            Evening Relaxation
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold">
            Looking for Beverages & Evening Lounge?
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
            Discover our dedicated Underground Bar at Hotel Madurai for a quiet, relaxing atmosphere.
          </p>
          <div className="pt-2">
            <Link
              to="/underground-bar"
              className="inline-flex items-center px-8 py-3.5 bg-gold hover:bg-gold-light text-[#141414] font-bold text-xs uppercase tracking-luxury transition shadow-lg"
            >
              <span>Explore Underground Bar</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

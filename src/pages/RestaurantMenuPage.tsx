import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Coffee, 
  Clock, 
  MessageCircle, 
  Phone, 
  FileText, 
  CheckCircle, 
  AlertCircle 
} from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const RestaurantMenuPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/5bd7063b4c21cd0001298965.jpg" 
            alt="Hotel Madurai Dining" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-3">
            Hotel Madurai Dining
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Restaurant Menu
          </h1>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Freshly prepared home-style Indian specialties, daily continental breakfasts, and our celebrated Family Thalis.
          </p>
        </div>
      </section>

      {/* Verified Core Offerings Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Offering 1: Continental Breakfast */}
            <div className="bg-white p-8 border border-gold/30 shadow-luxury">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-ivory border border-gold/40 text-gold">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-dark">
                    Rich Continental Breakfast
                  </h3>
                  <span className="text-xs text-gold uppercase tracking-wider font-medium">
                    Served in Cozy Breakfast Room
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Freshly prepared morning breakfast service for our hotel residents, featuring hot tea, brewed coffee, toast, and morning selections to start your sightseeing or business day energized.
              </p>

              <div className="space-y-2 text-xs text-gray-700 border-t border-gold/20 pt-4">
                <div className="flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Served fresh daily in our dedicated breakfast room</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>In-room dining delivery upon guest request</span>
                </div>
              </div>
            </div>

            {/* Offering 2: Famous Family Thali */}
            <div className="bg-white p-8 border border-gold/30 shadow-luxury">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-ivory border border-gold/40 text-gold">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-dark">
                    Traditional Family Thali
                  </h3>
                  <span className="text-xs text-gold uppercase tracking-wider font-medium">
                    Near Udaipur Railway Station
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Our popular multi-dish traditional thali platter featuring genuine regional recipes, freshly made breads, seasonal vegetables, lentils, rice, and accompaniments. Renowned for taste and value.
              </p>

              <div className="space-y-2 text-xs text-gray-700 border-t border-gold/20 pt-4">
                <div className="flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Wholesome family-style portions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Catering available for tour groups and party hall events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Menu Placeholder Notice (Strict adherence to requirement: do not invent fake prices or items) */}
          <div className="bg-white p-8 sm:p-12 border-2 border-dashed border-gold/50 shadow-md text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-ivory border border-gold/50 flex items-center justify-center mx-auto text-gold">
              <FileText className="w-8 h-8" />
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              <h3 className="font-serif text-2xl font-bold text-dark">
                Daily Seasonal Menu & Live Kitchen Specials
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hotel Madurai's kitchen prepares daily rotating breakfast items, vegetarian curries, breads, thalis, and beverages according to seasonal market freshness. In accordance with authentic verification standards, itemized rates and daily special menus are provided directly upon arrival or by request.
              </p>
            </div>

            <div className="p-4 bg-ivory max-w-lg mx-auto border border-gold/30 text-xs text-gray-700 flex items-start space-x-3 text-left">
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
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-luxury flex items-center transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Request Today's Menu via WhatsApp
              </a>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="px-6 py-3 border border-dark text-dark hover:bg-dark hover:text-white font-medium text-xs uppercase tracking-luxury flex items-center transition"
              >
                <Phone className="w-4 h-4 mr-2 text-gold" />
                Call Reception: {HOTEL_INFO.phone}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Underground Bar Link Section */}
      <section className="py-16 bg-[#1F1F1F] text-white border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Evening Relaxation
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            Looking for Beverages & Evening Lounge?
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Discover our dedicated Underground Bar at Hotel Madurai for a quiet, relaxing atmosphere.
          </p>
          <div className="pt-2">
            <Link
              to="/underground-bar"
              className="inline-flex items-center px-6 py-3 bg-gold hover:bg-gold-light text-dark font-semibold text-xs uppercase tracking-luxury transition"
            >
              Explore Underground Bar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

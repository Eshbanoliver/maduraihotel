import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MessageCircle, 
  Coffee, 
  Users, 
  Compass, 
  Sparkles, 
  Phone, 
  ArrowRight, 
  HeartHandshake 
} from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Editorial Header */}
      <section className="bg-[#141414] text-white py-24 relative overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/room-super-deluxe-large.jpg" 
            alt="Hotel Madurai Header" 
            className="w-full h-full object-cover animate-kenburns"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark/80 px-4 py-1.5 border border-gold/40 text-gold text-xs uppercase tracking-luxury mb-4 font-serif font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome to Lakecity Udaipur</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            About Hotel Madurai
          </h1>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            A business class hotel at Udaipur designed to pamper modern travelers with genuine comfort, fine hospitality, and reasonable value.
          </p>
        </div>
      </section>

      {/* Main About Story Section (Exact Original Text Preserved) */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-16 border border-gold/30 shadow-2xl space-y-8">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-luxury text-gold font-bold">
                Our Identity & Heritage
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark leading-snug">
              "Hotel Madurai is a business class hotel at Udaipur which pampers you with all the facilities and amenities a 21st century traveler expects."
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 leading-relaxed text-sm sm:text-base font-sans">
              <div className="space-y-4">
                <p>
                  The hotel offers guests fine accommodation, business and recreation facilities at a very affordable price i.e. <strong>A/C Rooms, cable/satellite TV, private bath with hot and cold shower and room service.</strong>
                </p>
                <p>
                  With cozy interiors, Hotel Madurai features a polite and welcoming staff working for you in a family-run environment, who will be happy to give you good tips on nearby restaurants and tourist spots.
                </p>
              </div>

              <div className="space-y-4">
                <p className="bg-[#FAF8F5] p-6 border-l-4 border-gold text-dark italic font-serif leading-relaxed shadow-sm">
                  "You will feel right at home when you try our rich continental breakfast, which may be enjoyed in our cozy breakfast room. Enjoy your stay at Hotel Madurai."
                </p>
                <p>
                  Conveniently situated in Shrinath Market, Udaipole (behind State Bank of Indore), we offer travelers easy access to both Udaipur City Railway Station and Udaipur Central Bus Stand.
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="pt-10 border-t border-gold/20 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#FAF8F5] border border-gold/30 text-gold flex-shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-dark text-lg mb-1">Family-Run Warmth</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    Personalized attention and polite hospitality that makes every guest feel truly at home.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#FAF8F5] border border-gold/30 text-gold flex-shrink-0">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-dark text-lg mb-1">Cozy Dining</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    Rich continental breakfast, authentic thalis, and relaxing Underground Bar experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#FAF8F5] border border-gold/30 text-gold flex-shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-dark text-lg mb-1">Local Insights</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    Our team provides curated recommendations for visiting palaces, lakes, and handicraft markets.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA Bar */}
            <div className="pt-8 border-t border-gold/20 flex flex-wrap gap-4 items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 block uppercase tracking-wider font-semibold">
                  Reservations & Enquiries:
                </span>
                <span className="font-serif font-bold text-dark text-xl">{HOTEL_INFO.phone}</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-badge px-7 py-3.5 bg-gold hover:bg-gold-light text-[#141414] font-bold text-xs uppercase tracking-luxury shadow-lg transition"
                >
                  <Calendar className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                  Book Now
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold text-xs uppercase tracking-luxury transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Property Photographic Showcase */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-3 border border-gold/30 shadow-xl group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/room-super-deluxe-large.jpg"
                  alt="Hotel Madurai Super Deluxe Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
              </div>
              <div className="p-4 text-center">
                <span className="font-serif font-bold text-dark text-lg block">Super Deluxe Room</span>
                <span className="text-xs text-gold uppercase tracking-luxury font-semibold">Wood Finishings & High Ceilings</span>
              </div>
            </div>

            <div className="bg-white p-3 border border-gold/30 shadow-xl group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/room-triple-bed-large.jpg"
                  alt="Hotel Madurai Triple Bed Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
              </div>
              <div className="p-4 text-center">
                <span className="font-serif font-bold text-dark text-lg block">Triple Bed Room</span>
                <span className="text-xs text-gold uppercase tracking-luxury font-semibold">Spacious Family Comfort</span>
              </div>
            </div>

            <div className="bg-white p-3 border border-gold/30 shadow-xl group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/room-deluxe-large.jpg"
                  alt="Hotel Madurai Deluxe Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
              </div>
              <div className="p-4 text-center">
                <span className="font-serif font-bold text-dark text-lg block">Deluxe Room</span>
                <span className="text-xs text-gold uppercase tracking-luxury font-semibold">City Views & Modern Practicality</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

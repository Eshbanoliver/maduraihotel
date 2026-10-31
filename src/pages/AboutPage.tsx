import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MessageCircle, 
  Check, 
  Star, 
  Coffee, 
  Users, 
  Compass, 
  ShieldCheck, 
  Phone 
} from 'lucide-react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Editorial Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/room-super-deluxe-large.jpg" 
            alt="Hotel Madurai Header" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-3">
            Welcome to Lakecity Udaipur
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            About Hotel Madurai
          </h1>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            A business class hotel at Udaipur designed to pamper modern travelers with genuine comfort, fine hospitality, and reasonable value.
          </p>
        </div>
      </section>

      {/* Main About Story Section (Exact Original Text Preserved) */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-14 border border-gold/30 shadow-luxury space-y-8">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                Our Identity & Heritage
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark leading-snug">
              "Hotel Madurai is a business class hotel at Udaipur which pampers you with all the facilities and amenities a 21st century traveler expects."
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 leading-relaxed text-sm sm:text-base">
              <div className="space-y-4">
                <p>
                  The hotel offers guests fine accommodation, business and recreation facilities at a very affordable price i.e. <strong>A/C Rooms, cable/satellite TV, private bath with hot and cold shower and room service.</strong>
                </p>
                <p>
                  With cozy interiors, Hotel Madurai features a polite and welcoming staff working for you in a family-run environment, who will be happy to give you good tips on nearby restaurants and tourist spots.
                </p>
              </div>

              <div className="space-y-4">
                <p className="bg-ivory/80 p-5 border-l-2 border-gold text-dark italic font-serif">
                  "You will feel right at home when you try our rich continental breakfast, which may be enjoyed in our cozy breakfast room. Enjoy your stay at Hotel Madurai."
                </p>
                <p>
                  Conveniently situated in Shrinath Market, Udaipole (behind State Bank of Indore), we offer travelers easy access to both Udaipur City Railway Station and Udaipur Central Bus Stand.
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="pt-8 border-t border-gold/20 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3.5">
                <Users className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-dark text-base mb-1">Family-Run Warmth</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Personalized attention and polite hospitality that makes every guest feel truly at home.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Coffee className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-dark text-base mb-1">Cozy Dining</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Rich continental breakfast, authentic thalis, and relaxing Underground Bar experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Compass className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-dark text-base mb-1">Local Insights</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Our team provides curated recommendations for visiting palaces, lakes, and handicraft markets.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action bar */}
            <div className="pt-8 border-t border-gold/20 flex flex-wrap gap-4 items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 block">Reservations & Enquiries:</span>
                <span className="font-serif font-bold text-dark text-base">{HOTEL_INFO.phone}</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gold hover:bg-gold-light text-[#1F1F1F] font-semibold text-xs uppercase tracking-luxury transition"
                >
                  <Calendar className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                  Book Now
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-medium text-xs uppercase tracking-luxury transition"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-3 border border-gold/30 shadow-md">
              <img
                src="/images/room-super-deluxe-large.jpg"
                alt="Hotel Madurai Super Deluxe Room"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-3 text-center">
                <span className="font-serif font-semibold text-dark text-sm block">Super Deluxe Room</span>
                <span className="text-[11px] text-gray-500">Wood Finishings & High Ceilings</span>
              </div>
            </div>

            <div className="bg-white p-3 border border-gold/30 shadow-md">
              <img
                src="/images/room-triple-bed-large.jpg"
                alt="Hotel Madurai Triple Bed Room"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-3 text-center">
                <span className="font-serif font-semibold text-dark text-sm block">Triple Bed Room</span>
                <span className="text-[11px] text-gray-500">Spacious Family Comfort</span>
              </div>
            </div>

            <div className="bg-white p-3 border border-gold/30 shadow-md">
              <img
                src="/images/room-deluxe-large.jpg"
                alt="Hotel Madurai Deluxe Room"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-3 text-center">
                <span className="font-serif font-semibold text-dark text-sm block">Deluxe Room</span>
                <span className="text-[11px] text-gray-500">City Views & Modern Practicality</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

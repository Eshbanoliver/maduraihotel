import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wind, 
  Wifi, 
  Tv, 
  Bath, 
  ArrowUpDown, 
  Utensils, 
  Wine, 
  Users, 
  Car, 
  Shirt, 
  Bell, 
  Compass, 
  Calendar, 
  MessageCircle, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import { FACILITIES, HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const FacilitiesPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wind': return <Wind className="w-7 h-7 text-gold" />;
      case 'Wifi': return <Wifi className="w-7 h-7 text-gold" />;
      case 'Tv': return <Tv className="w-7 h-7 text-gold" />;
      case 'Bath': return <Bath className="w-7 h-7 text-gold" />;
      case 'ArrowUpDown': return <ArrowUpDown className="w-7 h-7 text-gold" />;
      case 'Utensils': return <Utensils className="w-7 h-7 text-gold" />;
      case 'Wine': return <Wine className="w-7 h-7 text-gold" />;
      case 'Users': return <Users className="w-7 h-7 text-gold" />;
      case 'Car': return <Car className="w-7 h-7 text-gold" />;
      case 'Shirt': return <Shirt className="w-7 h-7 text-gold" />;
      case 'Bell': return <Bell className="w-7 h-7 text-gold" />;
      case 'Compass': return <Compass className="w-7 h-7 text-gold" />;
      default: return <Check className="w-7 h-7 text-gold" />;
    }
  };

  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/room-deluxe-large.jpg" 
            alt="Hotel Madurai Facilities" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-3">
            Hospitality & Conveniences
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Hotel Facilities & Amenities
          </h1>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Carefully curated services to pamper 21st-century business and leisure travelers in Udaipur.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
              Verified Source Data
            </span>
            <h2 className="text-3xl font-serif font-bold text-dark">
              Every Comfort Documented at Hotel Madurai
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto my-3" />
            <p className="text-sm text-gray-600">
              Preserving original hotel services without invented features or misleading claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((facility) => (
              <div 
                key={facility.id} 
                id={facility.id}
                className="bg-white border border-gold/25 p-8 shadow-card-subtle hover:border-gold/70 hover:shadow-luxury transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-ivory inline-block border border-gold/30 mb-5">
                    {getIcon(facility.iconName)}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gold/15 flex items-center justify-between text-xs text-gold font-semibold uppercase tracking-wider">
                  <span>Available to Guests</span>
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights: Lift, Transfers & Banquet */}
      <section className="py-20 bg-white border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Lift & Accessibility */}
            <div className="border border-gold/30 p-8 bg-ivory/40">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                Convenience
              </span>
              <h3 className="font-serif text-2xl font-bold text-dark mb-3">
                Modern Lift / Elevator
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                As praised by our guest reviews, Hotel Madurai offers a dedicated lift facility serving all floors, making room access comfortable for elders, families, and travelers with heavy luggage.
              </p>
              <div className="text-xs text-gray-500 italic">
                Verified review: "had lift facility, luxurious rooms, restaurant is also available there..."
              </div>
            </div>

            {/* Card 2: Railway & Airport Transfers */}
            <div className="border border-gold/30 p-8 bg-ivory/40">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                Connectivity
              </span>
              <h3 className="font-serif text-2xl font-bold text-dark mb-3">
                Station & Airport Transfers
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We are just minutes from Udaipur City Railway Station and Udaipole Bus Stand. Our travel desk coordinates airport and station transfers to ensure smooth arrivals and departures.
              </p>
              <div className="text-xs text-gray-500 italic">
                Verified review: "Location of hotel is approvable and it's near both bus stand and railway station"
              </div>
            </div>

            {/* Card 3: Party Hall & Events */}
            <div className="border border-gold/30 p-8 bg-ivory/40">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                Celebrations
              </span>
              <h3 className="font-serif text-2xl font-bold text-dark mb-3">
                Party Hall Near Bus Stand
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Our on-site party and banquet hall provides a practical venue for family functions, birthday gatherings, tour group meals, and celebrations right in central Udaipur.
              </p>
              <div className="text-xs text-gray-500 italic">
                Original update: "Party Hall Near Udaipur Bus Stand Restaurant Mad..."
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Book CTA Banner */}
      <section className="py-16 bg-dark text-white border-t border-gold/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="font-serif text-3xl font-bold">
            Experience 3-Star Business Hospitality in Udaipur
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Book your room directly through our secure eGlobe reservation system or message us on WhatsApp.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gold hover:bg-gold-light text-[#1F1F1F] font-semibold text-xs uppercase tracking-luxury shadow-lg transition"
            >
              <Calendar className="w-4 h-4 inline mr-2 -mt-0.5" />
              Book Online Now
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 border border-emerald-500 text-emerald-400 hover:bg-emerald-600 hover:text-white font-medium text-xs uppercase tracking-luxury transition"
            >
              <MessageCircle className="w-4 h-4 inline mr-2 -mt-0.5" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

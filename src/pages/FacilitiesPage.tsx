import React, { useState } from 'react';
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
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { FACILITIES, HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const FacilitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFacilities = selectedCategory === 'all'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === selectedCategory);

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
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="bg-[#141414] text-white py-24 relative overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/room-deluxe-large.jpg" 
            alt="Hotel Madurai Facilities" 
            className="w-full h-full object-cover animate-kenburns"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark/80 px-4 py-1.5 border border-gold/40 text-gold text-xs uppercase tracking-luxury mb-4 font-serif font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hospitality & Conveniences</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Hotel Facilities & Amenities
          </h1>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Carefully curated services to pamper 21st-century business and leisure travelers in Udaipur.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 sm:py-8 bg-white border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'all', label: 'All Facilities' },
              { id: 'comfort', label: 'Room Comforts' },
              { id: 'dining', label: 'Dining & Lounge' },
              { id: 'convenience', label: 'Accessibility & Events' },
              { id: 'service', label: 'Travel & Services' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 sm:px-5 py-2 text-[11px] sm:text-xs uppercase tracking-luxury font-bold border transition ${
                  selectedCategory === tab.id
                    ? 'bg-gold border-gold text-[#141414] shadow-md'
                    : 'bg-[#FAF8F5] border-gold/30 text-gray-700 hover:border-gold'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredFacilities.map((facility) => (
              <div 
                key={facility.id} 
                id={facility.id}
                className="bg-white border border-gold/30 p-6 sm:p-8 shadow-card-subtle hover:border-gold hover:shadow-2xl transition duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="p-3.5 bg-[#FAF8F5] inline-block border border-gold/40 mb-6 group-hover:bg-gold group-hover:text-dark transition duration-300">
                    {getIcon(facility.iconName)}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-dark mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gold/20 flex items-center justify-between text-xs text-gold font-bold uppercase tracking-luxury">
                  <span>Standard Resident Amenity</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights: Lift, Transfers & Banquet with Photos */}
      <section className="py-20 bg-white border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-2">
              Signature Property Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark">
              Key Conveniences at Hotel Madurai
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Lift & Accessibility */}
            <div className="border border-gold/30 p-8 bg-[#FAF8F5] shadow-luxury flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-2">
                  Accessibility
                </span>
                <h3 className="font-serif text-2xl font-bold text-dark mb-3">
                  Modern Lift / Elevator
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-sans">
                  Hotel Madurai offers a dedicated passenger lift serving all floors, making room access comfortable for elders, families, and travelers with heavy luggage.
                </p>
              </div>
              <div className="p-4 bg-white border-l-2 border-gold text-xs text-gray-700 italic font-serif">
                Guest review: "had lift facility, luxurious rooms, restaurant is also available there..."
              </div>
            </div>

            {/* Card 2: Railway & Airport Transfers */}
            <div className="border border-gold/30 p-8 bg-[#FAF8F5] shadow-luxury flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-2">
                  Connectivity
                </span>
                <h3 className="font-serif text-2xl font-bold text-dark mb-3">
                  Station & Airport Transfers
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-sans">
                  We are just minutes from Udaipur City Railway Station and Udaipole Bus Stand. Our travel desk coordinates airport and station transfers to ensure smooth arrivals and departures.
                </p>
              </div>
              <div className="p-4 bg-white border-l-2 border-gold text-xs text-gray-700 italic font-serif">
                Guest review: "Location of hotel is approvable and it's near both bus stand and railway station"
              </div>
            </div>

            {/* Card 3: Party Hall & Events */}
            <div className="border border-gold/30 p-8 bg-[#FAF8F5] shadow-luxury flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-2">
                  Celebrations
                </span>
                <h3 className="font-serif text-2xl font-bold text-dark mb-3">
                  Party Hall Near Bus Stand
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-sans">
                  Our on-site party and banquet hall provides a practical venue for family functions, birthday gatherings, tour group meals, and celebrations right in central Udaipur.
                </p>
              </div>
              <div className="p-4 bg-white border-l-2 border-gold text-xs text-gray-700 italic font-serif">
                Original update: "Party Hall Near Udaipur Bus Stand Restaurant Mad..."
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Book CTA Banner */}
      <section className="py-20 bg-[#141414] text-white border-t border-gold/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold">
            Experience 3-Star Business Hospitality in Udaipur
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
            Book your room directly through our secure eGlobe reservation system or message us on WhatsApp.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-badge px-9 py-4 bg-gold hover:bg-gold-light text-[#141414] font-bold text-xs uppercase tracking-luxury shadow-xl transition"
            >
              <Calendar className="w-4 h-4 inline mr-2 -mt-0.5" />
              Book Online Now
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-emerald-500 text-emerald-400 hover:bg-emerald-600 hover:text-white font-semibold text-xs uppercase tracking-luxury transition"
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

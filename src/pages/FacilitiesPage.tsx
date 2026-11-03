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

  const getIcon = (name: string, category: string) => {
    let gradient = 'from-amber-400 to-yellow-600';
    if (category === 'comfort') gradient = 'from-cyan-400 to-blue-600';
    else if (category === 'dining') gradient = 'from-rose-500 to-red-600';
    else if (category === 'convenience') gradient = 'from-indigo-500 to-purple-600';
    else if (category === 'service') gradient = 'from-emerald-500 to-teal-700';

    const iconClass = "w-7 h-7 text-white";
    let iconEl = <Check className={iconClass} />;

    switch (name) {
      case 'Wind': iconEl = <Wind className={iconClass} />; break;
      case 'Wifi': iconEl = <Wifi className={iconClass} />; break;
      case 'Tv': iconEl = <Tv className={iconClass} />; break;
      case 'Bath': iconEl = <Bath className={iconClass} />; break;
      case 'ArrowUpDown': iconEl = <ArrowUpDown className={iconClass} />; break;
      case 'Utensils': iconEl = <Utensils className={iconClass} />; break;
      case 'Wine': iconEl = <Wine className={iconClass} />; break;
      case 'Users': iconEl = <Users className={iconClass} />; break;
      case 'Car': iconEl = <Car className={iconClass} />; break;
      case 'Shirt': iconEl = <Shirt className={iconClass} />; break;
      case 'Bell': iconEl = <Bell className={iconClass} />; break;
      case 'Compass': iconEl = <Compass className={iconClass} />; break;
    }

    return (
      <div className={`p-3.5 bg-gradient-to-br ${gradient} inline-block shadow-lg group-hover:scale-110 transition duration-300`}>
        {iconEl}
      </div>
    );
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'comfort':
        return <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-sky-50 text-sky-800 border border-sky-200">Room Comfort</span>;
      case 'dining':
        return <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-rose-50 text-rose-800 border border-rose-200">Dining & Lounge</span>;
      case 'convenience':
        return <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-indigo-50 text-indigo-800 border border-indigo-200">Accessibility & Events</span>;
      case 'service':
        return <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200">Travel & Service</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="bg-[#141414] text-white py-24 relative overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/hotel-reception-lobby.jpg" 
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
                className="bg-white border-2 border-gold/30 p-6 sm:p-8 shadow-card-subtle hover:border-gold hover:shadow-2xl transition duration-300 flex flex-col justify-between group hover:-translate-y-2 card-elevated"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {getIcon(facility.iconName, facility.category)}
                    {getCategoryBadge(facility.category)}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-dark mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gold/20 flex items-center justify-between text-xs text-gold-dark font-bold uppercase tracking-luxury">
                  <span>Verified Hotel Amenity</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Lift & Accessibility */}
            <div className="border border-gold/30 bg-[#FAF8F5] shadow-luxury flex flex-col justify-between overflow-hidden group hover:border-gold transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-dark">
                <img 
                  src="/images/hotel-elevator-lift.jpg" 
                  alt="Passenger Elevator Lift Hotel Madurai" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-1">
                    Accessibility
                  </span>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">
                    Modern Lift / Elevator
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 font-sans">
                    Dedicated passenger elevator serving all guestroom floors, ensuring seamless accessibility for elders, families, and travelers with luggage.
                  </p>
                </div>
                <div className="p-3 bg-white border-l-2 border-gold text-[11px] text-gray-700 italic font-serif">
                  "Had lift facility, luxurious rooms, restaurant is also available..."
                </div>
              </div>
            </div>

            {/* Card 2: 24/7 Front Desk & Transfers */}
            <div className="border border-gold/30 bg-[#FAF8F5] shadow-luxury flex flex-col justify-between overflow-hidden group hover:border-gold transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-dark">
                <img 
                  src="/images/hotel-front-desk.jpg" 
                  alt="24/7 Reception Desk Hotel Madurai" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-1">
                    24/7 Hospitality
                  </span>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">
                    Front Desk & Transfers
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 font-sans">
                    Minutes from Udaipur City Railway Station and Udaipole Bus Stand. Our 24-hour reception desk coordinates station and airport transfers.
                  </p>
                </div>
                <div className="p-3 bg-white border-l-2 border-gold text-[11px] text-gray-700 italic font-serif">
                  "Location is approvable and it's near both bus stand and railway station"
                </div>
              </div>
            </div>

            {/* Card 3: In-House Dining Hall */}
            <div className="border border-gold/30 bg-[#FAF8F5] shadow-luxury flex flex-col justify-between overflow-hidden group hover:border-gold transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-dark">
                <img 
                  src="/images/restaurant-dining-hall.jpg" 
                  alt="Multi-Cuisine Restaurant Hotel Madurai" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-1">
                    Dining & Thalis
                  </span>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">
                    Multi-Cuisine Restaurant
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 font-sans">
                    Cozy breakfast room serving continental breakfasts, authentic Rajasthani family thalis, and banquet catering for groups.
                  </p>
                </div>
                <div className="p-3 bg-white border-l-2 border-gold text-[11px] text-gray-700 italic font-serif">
                  "Food was tasty and within budget. Loved staying in this hotel..."
                </div>
              </div>
            </div>

            {/* Card 4: Soaking Bathtub & En-Suite Bath */}
            <div className="border border-gold/30 bg-[#FAF8F5] shadow-luxury flex flex-col justify-between overflow-hidden group hover:border-gold transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-dark">
                <img 
                  src="/images/bathroom-bathtub.jpg" 
                  alt="Marble Bathtub Hotel Madurai" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-1">
                    Room Luxury
                  </span>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2">
                    Marble Soaking Bathtub
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 font-sans">
                    Deep marble soaking bathtubs with telephone showers, 24/7 hot/cold running water, and fresh essential toiletries.
                  </p>
                </div>
                <div className="p-3 bg-white border-l-2 border-gold text-[11px] text-gray-700 italic font-serif">
                  "Spacious bathrooms with separate shower and luxurious amenities..."
                </div>
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

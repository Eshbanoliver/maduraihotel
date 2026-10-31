import React from 'react';
import { 
  Navigation, 
  Car, 
  Train, 
  Bus, 
  MessageCircle, 
  ExternalLink, 
  Sparkles, 
  Compass, 
  MapPin 
} from 'lucide-react';
import { HOTEL_INFO, NEARBY_PLACES, getWhatsAppUrl } from '../data/hotelData';

export const LocationPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="bg-[#141414] text-white py-24 relative overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/madurai-station-5bb0833ea4b9050001a66857.jpg" 
            alt="Udaipole Location" 
            className="w-full h-full object-cover animate-kenburns"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark/80 px-4 py-1.5 border border-gold/40 text-gold text-xs uppercase tracking-luxury mb-4 font-serif font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Central Connectivity</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Location & Getting Here
          </h1>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Centrally situated at Udaipole in Shrinath Market, right behind State Bank of Indore, offering unbeatable proximity to transit points.
          </p>
        </div>
      </section>

      {/* Primary Coordinates & Directions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Address & Connectivity Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-6 sm:p-8 lg:p-10 border border-gold/30 shadow-luxury space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-2">
                    Official Property Address
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark mb-4">
                    Hotel Madurai, Udaipur
                  </h2>
                  <div className="p-4 sm:p-5 bg-[#FAF8F5] border-l-4 border-gold text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                    {HOTEL_INFO.address}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
                  <div className="p-3 sm:p-3.5 bg-[#FAF8F5] border border-gold/25">
                    <span className="text-gray-500 block">Latitude:</span>
                    <span className="font-mono font-bold text-dark text-xs sm:text-sm">24.5771753° N</span>
                  </div>
                  <div className="p-3 sm:p-3.5 bg-[#FAF8F5] border border-gold/25">
                    <span className="text-gray-500 block">Longitude:</span>
                    <span className="font-mono font-bold text-dark text-xs sm:text-sm">73.7012260° E</span>
                  </div>
                </div>

                {/* Transit Access */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-xs uppercase tracking-luxury font-bold text-dark flex items-center">
                    <span className="w-1.5 h-1.5 bg-gold mr-2" />
                    Verified Transport Proximity:
                  </h4>

                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-700">
                    <Bus className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-dark block">Udaipole Central Bus Stand:</strong>
                      Walking distance (&lt; 500m) from the hotel.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-700">
                    <Train className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-dark block">Udaipur City Railway Station:</strong>
                      Less than 1 km away. Pick-up and drop transfers arranged.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-gray-700">
                    <Car className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-dark block">Maharana Pratap Airport (UDR):</strong>
                      Approx. 21 km via direct highway connection.
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
                  <a
                    href={HOTEL_INFO.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-badge flex-1 py-3.5 px-4 bg-gold hover:bg-gold-light text-[#141414] font-bold text-xs uppercase tracking-luxury text-center flex items-center justify-center transition shadow-md"
                  >
                    <Navigation className="w-3.5 h-3.5 mr-2" />
                    Get Directions
                  </a>

                  <a
                    href={getWhatsAppUrl("Location Directions & Pick-up Assistance")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-4 border border-emerald-600 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 font-semibold text-xs uppercase tracking-luxury text-center flex items-center justify-center transition shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-2" />
                    WhatsApp Location
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="lg:col-span-7 bg-white p-3 border border-gold/30 shadow-2xl">
              <div className="relative aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <iframe
                  title="Hotel Madurai Udaipur Google Map"
                  src={HOTEL_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-600 gap-2">
                <span>Behind State Bank of Indore, Shrinath Market, Udaipole, Udaipur</span>
                <a
                  href={HOTEL_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-bold uppercase tracking-wider hover:underline flex items-center"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Verified Nearby Places */}
      <section className="py-20 bg-white border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-2">
              Sightseeing & Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark">
              Nearby Attractions Mentioned in Source
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
            <p className="text-sm text-gray-600 font-sans">
              Easily accessible destinations documented from the official hotel records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEARBY_PLACES.map((place) => (
              <div key={place.id} className="bg-[#FAF8F5] border border-gold/30 shadow-luxury overflow-hidden hover:border-gold transition duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-106"
                  />
                  <div className="absolute top-3 right-3 bg-[#141414]/90 text-gold text-xs uppercase tracking-luxury px-3.5 py-1 font-bold border border-gold/40 shadow">
                    {place.distanceInfo}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-dark mb-1">
                    {place.name}
                  </h3>
                  <span className="text-xs text-gold uppercase tracking-luxury font-bold block mb-3">
                    {place.locationText}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 font-sans">
                    {place.description}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' Udaipur')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-dark hover:text-gold font-bold uppercase tracking-luxury inline-flex items-center"
                  >
                    <span>View on Map</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1 text-gold" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

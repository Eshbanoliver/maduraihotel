import React, { useState } from 'react';
import { 
  Play, 
  Maximize2, 
  Sparkles, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { GALLERY_ITEMS, HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';
import { LightboxModal } from '../components/LightboxModal';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Rooms', 'Property', 'Events', 'Dining', 'Sightseeing'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="bg-[#141414] text-white py-24 relative overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/room-super-deluxe-large.jpg" 
            alt="Hotel Madurai Gallery" 
            className="w-full h-full object-cover animate-kenburns"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark/80 px-4 py-1.5 border border-gold/40 text-gold text-xs uppercase tracking-luxury mb-4 font-serif font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Photo & Video Gallery
          </h1>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Explore authentic photographs of Hotel Madurai's guestrooms, dining facilities, and prime Udaipur surroundings.
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 text-xs uppercase tracking-luxury font-bold transition duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-gold border-gold text-[#141414] shadow-md'
                    : 'bg-white border-gold/30 text-gray-700 hover:border-gold hover:text-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="bg-white border border-gold/30 shadow-card-subtle overflow-hidden cursor-pointer group hover:border-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-dark">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3.5 bg-white/95 text-dark rounded-full shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition duration-300">
                      <Maximize2 className="w-5 h-5 text-gold" />
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#141414]/90 text-gold text-[10px] uppercase tracking-luxury px-3 py-1 font-bold border border-gold/40 shadow">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-dark group-hover:text-gold transition mb-1.5">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-sans">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-24 bg-white border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-2">
              Motion Media
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark">
              Video Gallery & Property Tour
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
            <p className="text-sm text-gray-600 font-sans">
              Immerse yourself in the ambient atmosphere of Hotel Madurai and our prime Lakecity location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Video Showcase 1 */}
            <div className="bg-[#FAF8F5] border border-gold/30 shadow-luxury overflow-hidden hover:border-gold transition">
              <div className="relative aspect-video bg-dark flex items-center justify-center group overflow-hidden">
                <img
                  src="/images/room-super-deluxe-large.jpg"
                  alt="Hotel Madurai Tour"
                  className="w-full h-full object-cover opacity-65 transition duration-700 group-hover:scale-106"
                />
                <a
                  href={getWhatsAppUrl("Property Video Walkthrough Request")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition"
                  aria-label="Request video walkthrough"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/90 text-dark flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition">
                    <Play className="w-7 h-7 fill-dark ml-1" />
                  </div>
                </a>
                <div className="absolute bottom-3 left-3 bg-[#141414]/90 px-3 py-1 text-gold text-[10px] uppercase tracking-luxury font-bold border border-gold/40">
                  Guest Suites Tour
                </div>
              </div>
              <div className="p-7">
                <h4 className="font-serif text-xl font-bold text-dark mb-2">
                  Hotel Madurai Room Walkthrough
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 font-sans">
                  Experience the spacious high-ceiling layouts, wood finishings, and bathroom amenities of our Super Deluxe and Triple Bed guestrooms.
                </p>
                <a
                  href={getWhatsAppUrl("Property Video Walkthrough Request")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-luxury text-gold font-bold hover:underline inline-flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  Request Full Video on WhatsApp
                </a>
              </div>
            </div>

            {/* Video Showcase 2 */}
            <div className="bg-[#FAF8F5] border border-gold/30 shadow-luxury overflow-hidden hover:border-gold transition">
              <div className="relative aspect-video bg-dark flex items-center justify-center group overflow-hidden">
                <img
                  src="/images/fathesagar-madurai-5bb0848c492e1200012bca9d.jpg"
                  alt="Udaipur Sightseeing Highlights"
                  className="w-full h-full object-cover opacity-65 transition duration-700 group-hover:scale-106"
                />
                <a
                  href={getWhatsAppUrl("Udaipur Sightseeing Guide Video")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition"
                  aria-label="Request sightseeing video"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/90 text-dark flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition">
                    <Play className="w-7 h-7 fill-dark ml-1" />
                  </div>
                </a>
                <div className="absolute bottom-3 left-3 bg-[#141414]/90 px-3 py-1 text-gold text-[10px] uppercase tracking-luxury font-bold border border-gold/40">
                  Udaipur Highlights
                </div>
              </div>
              <div className="p-7">
                <h4 className="font-serif text-xl font-bold text-dark mb-2">
                  Nearby Udaipur Attractions
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 font-sans">
                  A visual glimpse of Fateh Sagar Lake, Sahelion Ki Bari, and Udaipole transport links just minutes from Hotel Madurai.
                </p>
                <a
                  href={getWhatsAppUrl("Udaipur Sightseeing Guide Video")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-luxury text-gold font-bold hover:underline inline-flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  Ask Travel Desk on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal Component */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredItems}
        currentIndex={currentImageIndex}
        onNavigate={(newIdx) => setCurrentImageIndex(newIdx)}
      />
    </div>
  );
};

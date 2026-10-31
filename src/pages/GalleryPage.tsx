import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Video, 
  Eye, 
  Calendar, 
  MessageCircle, 
  Play, 
  Maximize2 
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
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/room-super-deluxe-large.jpg" 
            alt="Hotel Madurai Gallery" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-3">
            Visual Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Photo & Video Gallery
          </h1>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Explore authentic photographs of Hotel Madurai's guestrooms, dining facilities, and prime Udaipur surroundings.
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-luxury font-medium transition duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-gold border-gold text-dark font-semibold shadow-md'
                    : 'bg-white border-gold/30 text-gray-700 hover:border-gold hover:text-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="bg-white border border-gold/25 shadow-card-subtle overflow-hidden cursor-pointer group hover:border-gold/80 transition duration-300"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 bg-white/90 text-dark rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                      <Maximize2 className="w-5 h-5 text-gold" />
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-dark/80 text-gold text-[10px] uppercase tracking-widest px-2.5 py-1 border border-gold/30">
                    {item.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-base font-bold text-dark group-hover:text-gold transition mb-1">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
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
      <section className="py-20 bg-white border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-luxury text-gold font-semibold block mb-2">
              Motion Media
            </span>
            <h2 className="text-3xl font-serif font-bold text-dark">
              Video Gallery & Property Tour
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto my-3" />
            <p className="text-sm text-gray-600">
              Immerse yourself in the ambient atmosphere of Hotel Madurai and our prime Lakecity location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Video Showcase 1 */}
            <div className="bg-ivory border border-gold/30 shadow-luxury overflow-hidden">
              <div className="relative aspect-video bg-dark flex items-center justify-center group overflow-hidden">
                <img
                  src="/images/room-super-deluxe-large.jpg"
                  alt="Hotel Madurai Tour"
                  className="w-full h-full object-cover opacity-60 transition duration-500 group-hover:scale-105"
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
                <div className="absolute bottom-3 left-3 bg-dark/80 px-2.5 py-1 text-gold text-[10px] uppercase tracking-widest font-medium border border-gold/40">
                  Guest Suites Tour
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-lg font-bold text-dark mb-1">
                  Hotel Madurai Room Walkthrough
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Experience the spacious high-ceiling layouts, wood finishings, and bathroom amenities of our Super Deluxe and Triple Bed guestrooms.
                </p>
                <a
                  href={getWhatsAppUrl("Property Video Walkthrough Request")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-gold font-semibold hover:underline inline-flex items-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  Request Full Video on WhatsApp
                </a>
              </div>
            </div>

            {/* Video Showcase 2 */}
            <div className="bg-ivory border border-gold/30 shadow-luxury overflow-hidden">
              <div className="relative aspect-video bg-dark flex items-center justify-center group overflow-hidden">
                <img
                  src="/images/fathesagar-madurai-5bb0848c492e1200012bca9d.jpg"
                  alt="Udaipur Sightseeing Highlights"
                  className="w-full h-full object-cover opacity-60 transition duration-500 group-hover:scale-105"
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
                <div className="absolute bottom-3 left-3 bg-dark/80 px-2.5 py-1 text-gold text-[10px] uppercase tracking-widest font-medium border border-gold/40">
                  Udaipur Highlights
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-lg font-bold text-dark mb-1">
                  Nearby Udaipur Attractions
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  A visual glimpse of Fateh Sagar Lake, Sahelion Ki Bari, and Udaipole transport links just minutes from Hotel Madurai.
                </p>
                <a
                  href={getWhatsAppUrl("Udaipur Sightseeing Guide Video")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-gold font-semibold hover:underline inline-flex items-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
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

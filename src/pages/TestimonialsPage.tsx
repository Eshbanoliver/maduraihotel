import React from 'react';
import { Star, Quote, CheckCircle, Calendar, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';

export const TestimonialsPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="bg-[#141414] text-white py-24 relative overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/hotel-reception-lobby.jpg" 
            alt="Hotel Madurai Guest Reviews" 
            className="w-full h-full object-cover animate-kenburns"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark/80 px-4 py-1.5 border border-gold/40 text-gold text-xs uppercase tracking-luxury mb-4 font-serif font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guest Impressions</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Guest Testimonials
          </h1>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Read unedited reviews from guests who stayed with us at Hotel Madurai, Udaipur.
          </p>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="bg-white p-7 border-l-4 border-gold shadow-md flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-luxury text-gold font-bold block mb-1">
                Authentic Guest Feedback
              </span>
              <p className="text-xs sm:text-sm text-gray-700 font-sans">
                In strict adherence to truth in advertising, all reviews displayed below are original, verbatim testimonials from past guests preserved from the official website backup.
              </p>
            </div>
            <ShieldCheck className="w-8 h-8 text-emerald-600 flex-shrink-0 ml-4 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 gap-8">
            {TESTIMONIALS.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-8 sm:p-12 border border-gold/30 shadow-luxury relative hover:border-gold transition duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-gold/25" />
                </div>

                <p className="text-gray-800 text-lg sm:text-xl leading-relaxed font-serif italic mb-8">
                  "{item.quote}"
                </p>

                <div className="flex items-center space-x-4 pt-6 border-t border-gold/20">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold/60 shadow-md"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-[#181818] text-gold font-serif font-bold text-xl flex items-center justify-center border-2 border-gold/50 shadow-md">
                      {item.author[0]}
                    </div>
                  )}

                  <div>
                    <h4 className="font-serif font-bold text-dark text-xl">
                      {item.author}
                    </h4>
                    <span className="text-xs uppercase tracking-luxury text-gold font-bold block">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-[#141414] text-white border-t border-gold/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs uppercase tracking-luxury text-gold font-bold">
            Ready to Experience Our Hospitality?
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold">
            Book Your Stay at Hotel Madurai Today
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
            Enjoy clean, spacious rooms, courteous staff, delicious dining, and our convenient central location.
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
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

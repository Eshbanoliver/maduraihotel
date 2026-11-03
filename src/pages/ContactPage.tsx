import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Send, 
  CheckCircle, 
  ExternalLink, 
  Sparkles, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { HOTEL_INFO, ROOMS, getWhatsAppUrl } from '../data/hotelData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: 'Super Deluxe Room',
    dates: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hello Hotel Madurai, enquiry from website:
Name: ${formData.name || 'Guest'}
Phone: ${formData.phone || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Room: ${formData.roomType}
Dates: ${formData.dates || 'Flexible'}
Message: ${formData.message || 'I would like to enquire about room availability.'}`;

    const url = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="bg-[#141414] text-white py-24 relative overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/hotel-front-desk.jpg" 
            alt="Hotel Madurai Contact Desk" 
            className="w-full h-full object-cover animate-kenburns"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark/80 px-4 py-1.5 border border-gold/40 text-gold text-xs uppercase tracking-luxury mb-4 font-serif font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect Directly</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4">
            Contact Hotel Madurai
          </h1>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Our polite and welcoming family-run front desk team is ready to answer questions, arrange room bookings, or plan transfers.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Phone Card */}
              <div className="bg-white p-5 sm:p-7 border-2 border-amber-200/80 shadow-card-subtle flex items-start space-x-4 sm:space-x-5 hover:border-gold transition card-elevated">
                <div className="p-3.5 sm:p-4 bg-gradient-to-br from-amber-400 to-yellow-600 text-dark flex-shrink-0 shadow-md">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-luxury text-amber-800 font-bold block mb-1">
                    Call Direct
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark mb-1">
                    Phone Inquiries
                  </h3>
                  <a 
                    href={`tel:${HOTEL_INFO.phone}`} 
                    className="text-base sm:text-lg text-gray-800 hover:text-gold transition font-bold block"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                  <span className="text-xs text-gray-500 mt-1 block">
                    Available 24 hours daily for guest support
                  </span>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white p-5 sm:p-7 border-2 border-emerald-300 shadow-card-subtle flex items-start space-x-4 sm:space-x-5 hover:border-emerald-500 transition card-elevated">
                <div className="p-3.5 sm:p-4 bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex-shrink-0 shadow-md">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-luxury text-emerald-700 font-bold block mb-1">
                    Instant Messaging
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark mb-1">
                    WhatsApp Enquiry
                  </h3>
                  <a 
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg text-gray-800 hover:text-emerald-600 transition font-bold block"
                  >
                    +91 87419 14825
                  </a>
                  <span className="text-xs text-gray-500 mt-1 block">
                    Fast replies for live availability & pickup
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-5 sm:p-7 border-2 border-indigo-200/80 shadow-card-subtle flex items-start space-x-4 sm:space-x-5 hover:border-indigo-400 transition card-elevated">
                <div className="p-3.5 sm:p-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-luxury text-indigo-800 font-bold block mb-1">
                    Email Correspondence
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark mb-1">
                    Official Email
                  </h3>
                  <a 
                    href={`mailto:${HOTEL_INFO.email}`} 
                    className="text-sm sm:text-base text-gray-800 hover:text-gold transition font-bold block break-all"
                  >
                    {HOTEL_INFO.email}
                  </a>
                  <span className="text-xs text-gray-500 mt-1 block">
                    For corporate & travel agent bookings
                  </span>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-5 sm:p-7 border-2 border-blue-200/80 shadow-card-subtle flex items-start space-x-4 sm:space-x-5 hover:border-blue-400 transition card-elevated">
                <div className="p-3.5 sm:p-4 bg-gradient-to-br from-blue-500 to-cyan-600 text-white flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-luxury text-blue-800 font-bold block mb-1">
                    Property Location
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark mb-1">
                    Physical Address
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                    {HOTEL_INFO.address}
                  </p>
                  <a 
                    href={HOTEL_INFO.mapDirectionsUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 font-bold uppercase tracking-luxury mt-2 inline-flex items-center hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 lg:p-14 border border-gold/30 shadow-2xl">
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-8 h-[1px] bg-gold" />
                  <span className="text-xs uppercase tracking-luxury text-gold font-bold">
                    Direct Inquiry Form
                  </span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-dark">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-sans">
                  Fill in your details below and our team will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#FAF8F5] border border-gold/40 text-center space-y-4 animate-fadeIn">
                  <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark">
                    Thank You, {formData.name || 'Guest'}!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto font-sans leading-relaxed">
                    Your enquiry regarding <strong>{formData.roomType}</strong> has been received. You can also send this inquiry directly to our WhatsApp front desk for an instant response.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-luxury flex items-center transition shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Forward Directly via WhatsApp
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-7 py-3.5 border-2 border-dark text-dark text-xs uppercase tracking-luxury font-bold hover:bg-dark hover:text-white transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-luxury font-bold text-gray-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-gold/30 px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-luxury font-bold text-gray-700 mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-gold/30 px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-luxury font-bold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-gold/30 px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-luxury font-bold text-gray-700 mb-2">
                        Interested Room Category
                      </label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-gold/30 px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
                      >
                        {ROOMS.map((r) => (
                          <option key={r.id} value={r.name}>{r.name}</option>
                        ))}
                        <option value="Family Thali / Dining Enquiry">Family Thali / Dining</option>
                        <option value="Party Hall / Event Booking">Party Hall / Event</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury font-bold text-gray-700 mb-2">
                      Intended Stay Dates or Check-In
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 15th to 18th November (2 adults)"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-gold/30 px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury font-bold text-gray-700 mb-2">
                      Your Message or Special Request
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your requirements, airport/station transfer needs, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-gold/30 px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="gold-glow-button shimmer-badge flex-1 py-4 px-6 text-[#121212] font-bold text-xs uppercase tracking-luxury flex items-center justify-center transition shadow-lg cursor-pointer"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Enquiry
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="emerald-glow-button flex-1 py-4 px-6 text-white font-bold text-xs uppercase tracking-luxury flex items-center justify-center transition shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Google Maps */}
      <section className="bg-white border-t border-gold/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="border border-gold/30 shadow-2xl overflow-hidden p-2 bg-[#FAF8F5]">
            <iframe
              title="Hotel Madurai Udaipur Map Location"
              src={HOTEL_INFO.googleMapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { image: string; title: string; caption?: string; category?: string }[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (filmstripRef.current) {
      const activeThumb = filmstripRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [currentIndex]);

  if (!isOpen || !images[currentIndex]) return null;

  const current = images[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      onNavigate((currentIndex + 1) % images.length);
    } else if (diff < -50) {
      onNavigate((currentIndex - 1 + images.length) % images.length);
    }
    setTouchStart(null);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0A0A0A]/95 flex flex-col justify-between items-center p-3 sm:p-6 backdrop-blur-xl animate-fadeIn select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center text-white pb-3 border-b border-white/10 z-20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold">
            <ImageIcon className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] uppercase tracking-widest text-gold font-serif font-bold">
                Hotel Madurai Visual Portfolio
              </span>
              <span className="bg-white/10 px-2 py-0.5 text-[10px] text-gray-300 font-mono rounded">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-serif font-bold text-white truncate max-w-[280px] sm:max-w-md">
              {current.title}
            </h4>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 w-full flex items-center justify-center my-2 sm:my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-2 sm:left-6 z-20 p-3 sm:p-4 bg-black/60 hover:bg-gold text-white hover:text-dark transition rounded-full shadow-2xl backdrop-blur-md cursor-pointer border border-white/10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Photograph */}
        <div className="max-h-[72vh] max-w-[90vw] sm:max-w-[85vw] flex items-center justify-center relative">
          <img
            src={current.image}
            alt={current.title}
            className="max-h-[70vh] max-w-full object-contain shadow-2xl transition-all duration-300 border border-white/10"
          />
          {current.category && (
            <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-gold text-[10px] uppercase font-bold tracking-luxury px-3 py-1 border border-gold/30">
              {current.category}
            </div>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-2 sm:right-6 z-20 p-3 sm:p-4 bg-black/60 hover:bg-gold text-white hover:text-dark transition rounded-full shadow-2xl backdrop-blur-md cursor-pointer border border-white/10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Area: Caption & Thumbnail Filmstrip */}
      <div className="w-full max-w-4xl flex flex-col items-center space-y-3 z-20">
        {current.caption && (
          <div className="text-center text-gray-200 text-xs sm:text-sm max-w-2xl px-4 py-1.5 bg-black/75 backdrop-blur-md border border-white/10 font-sans">
            {current.caption}
          </div>
        )}

        {/* Thumbnail Filmstrip */}
        <div 
          ref={filmstripRef}
          className="w-full flex items-center space-x-2 overflow-x-auto py-1 px-2 no-scrollbar max-w-3xl"
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(idx)}
              className={`flex-shrink-0 w-14 h-10 sm:w-16 sm:h-12 overflow-hidden border-2 transition cursor-pointer ${
                idx === currentIndex
                  ? 'border-gold ring-2 ring-gold/40 scale-105 opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-90'
              }`}
              aria-label={`Jump to photo ${idx + 1}`}
            >
              <img src={img.image} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

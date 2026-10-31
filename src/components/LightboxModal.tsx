import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { image: string; title: string; caption?: string }[];
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

  if (!isOpen || !images[currentIndex]) return null;

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between items-center p-4 sm:p-8 backdrop-blur-md animate-fadeIn">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center text-white pb-4 border-b border-white/10">
        <div>
          <span className="text-xs uppercase tracking-widest text-gold font-serif">
            Hotel Madurai Gallery • {currentIndex + 1} / {images.length}
          </span>
          <h4 className="text-sm sm:text-base font-serif font-semibold">{current.title}</h4>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 w-full flex items-center justify-center my-4 overflow-hidden">
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-2 sm:left-6 z-10 p-3 bg-black/60 hover:bg-gold text-white hover:text-dark transition rounded-full"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={current.image}
          alt={current.title}
          className="max-h-[78vh] max-w-full object-contain shadow-2xl transition duration-300"
        />

        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-2 sm:right-6 z-10 p-3 bg-black/60 hover:bg-gold text-white hover:text-dark transition rounded-full"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      {current.caption && (
        <div className="text-center text-gray-300 text-xs sm:text-sm max-w-2xl px-4 py-2 bg-dark/80 border border-gold/20">
          {current.caption}
        </div>
      )}
    </div>
  );
};

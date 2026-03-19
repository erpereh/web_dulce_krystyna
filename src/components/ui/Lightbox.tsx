import { useEffect, useCallback } from 'react';
import { m, AnimatePresence } from 'motion/react';
import type { LightboxProps } from '@/types';

export const Lightbox = ({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) => {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <m.div
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imagen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Cerrar visor"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 text-cream/70 hover:text-cream transition-colors z-10 w-12 h-12 flex items-center justify-center"
              aria-label="Imagen anterior"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <m.img
            key={currentImage.id}
            src={currentImage.src}
            alt={currentImage.alt}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 text-cream/70 hover:text-cream transition-colors z-10 w-12 h-12 flex items-center justify-center"
              aria-label="Imagen siguiente"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-warm-gray text-xs tracking-[0.15em]">
            {currentIndex + 1} / {images.length}
          </p>
        </m.div>
      )}
    </AnimatePresence>
  );
};

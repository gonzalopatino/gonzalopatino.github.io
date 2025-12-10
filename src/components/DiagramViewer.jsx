import { useState, useEffect, useCallback } from 'react';
import './DiagramViewer.css';

/**
 * DiagramViewer - A modern, accessible image viewer with lightbox functionality
 * Features:
 * - Click to expand to fullscreen modal
 * - Keyboard navigation (Escape to close)
 * - Smooth animations
 * - Responsive design
 * - Accessibility support
 */
export default function DiagramViewer({ 
  src, 
  alt, 
  caption,
  className = '' 
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, closeModal]);

  return (
    <>
      {/* Thumbnail Container */}
      <figure className={`diagram-figure ${className}`}>
        <div className="diagram-wrapper">
          <button
            className="diagram-button"
            onClick={openModal}
            aria-label={`View ${alt} in fullscreen`}
            type="button"
          >
            <img 
              src={src} 
              alt={alt} 
              className="diagram-thumbnail"
              loading="lazy"
            />
            <div className="diagram-overlay">
              <span className="diagram-zoom-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </span>
              <span className="diagram-zoom-text">Click to enlarge</span>
            </div>
          </button>
        </div>
        {caption && (
          <figcaption className="diagram-figcaption">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div 
          className="modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            className="modal-close-btn"
            onClick={closeModal}
            aria-label="Close fullscreen view"
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={src} 
              alt={alt} 
              className="modal-image"
            />
            {caption && (
              <p className="modal-caption">{caption}</p>
            )}
          </div>
          
          <p className="modal-hint">Press ESC or click outside to close</p>
        </div>
      )}
    </>
  );
}

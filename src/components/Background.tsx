// src/components/Background.tsx
import React, { useEffect, useState } from 'react';
import ProtectedImage from './common/ProtectedImage';

type Props = {
  children: React.ReactNode;
};

const Background: React.FC<Props> = ({ children }) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Disable heavy background video on mobile, reduced motion or data saver.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobileViewport = window.matchMedia('(max-width: 1024px)').matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveDataEnabled = Boolean(connection?.saveData);

    setShowVideo(!prefersReducedMotion && !isMobileViewport && !saveDataEnabled);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Image de fallback pour les mobiles */}
      <picture className="fixed inset-0 w-full h-full object-cover">
        <source media="(max-width: 768px)" srcSet="/images/circuit1.jpg" />
        <ProtectedImage 
          src="/images/circuit1.jpg" 
          alt="Développeur d'applications" 
          className="fixed inset-0 w-full h-full object-cover" 
        />
      </picture>

      {/* Video is only enabled on devices likely to handle it smoothly. */}
      {showVideo && (
        <video
          className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay
          muted
          playsInline
          loop
          preload="none"
          poster="/images/circuit1.jpg"
          style={{
            transform: 'scale(1.01)',
            willChange: 'transform',
            contain: 'content',
            objectFit: 'cover',
          }}
        >
          <source src="/videos/circuit1.mp4" type="video/mp4" />
          <source src="/videos/circuit1.webm" type="video/webm" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      )}

      {/* Voile noir transparent par-dessus la vidéo */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Contenu par-dessus */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default Background;

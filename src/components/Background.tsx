// src/components/Background.tsx
import React from 'react';
import ProtectedImage from './common/ProtectedImage';

type Props = {
  children: React.ReactNode;
};

const Background: React.FC<Props> = ({ children }) => {
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

      {/* Vidéo optimisée */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        autoPlay
        muted
        playsInline
        loop
        style={{
          filter: 'blur(0.2px)',
          transform: 'scale(1.01)',
          willChange: 'transform',
          contain: 'content',
          objectFit: 'cover',
          imageRendering: 'crisp-edges'
        }}
      >
        <source src="/videos/circuit1.mp4" type="video/mp4" />
        <source src="/videos/circuit1.webm" type="video/webm" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* Voile noir transparent par-dessus la vidéo */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Contenu par-dessus */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default Background;

import React from 'react';

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const ProtectedImage: React.FC<ProtectedImageProps> = ({ src, alt, className, ...props }) => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="relative inline-block" style={{ userSelect: 'none' }}>
      <img
        src={src}
        alt={alt}
        className={className}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        {...props}
      />
      {/* Overlay transparent pour empêcher le téléchargement par glisser-déposer */}
      <div 
        className="absolute inset-0"
        style={{
          pointerEvents: 'none', // Permet les clics à travers
          background: 'transparent',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default ProtectedImage;

import React from 'react';
import Image, { StaticImageData } from 'next/image'; // or your preferred image handling library
import '@/app/artCard.css'

interface ArtCardProps {
  title: string;
  imageUrl: string | StaticImageData;
  onClick: () => void;
}

const ArtCard: React.FC<ArtCardProps> = ({ title, imageUrl, onClick }) => {
  return (
    <div className="art-card" onClick={onClick}>
      {typeof imageUrl === 'string' ? (
        <img className="object-contain" src={imageUrl} alt={title} />
      ) : (
        <Image className="object-contain" src={imageUrl} alt={title} />
      )}
      <h2>{title}</h2>
    </div>
  );
};

export default ArtCard;
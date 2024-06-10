import React from 'react';
import Image, { StaticImageData } from 'next/image'; // or your preferred image handling library
import '@/app/projects/artCard.css'
import {motion} from 'framer-motion';

interface ArtCardProps {
  title: string;
  imageUrl: string | StaticImageData;
  onClick: () => void;
}

const ArtCard: React.FC<ArtCardProps> = ({ title, imageUrl, onClick }) => {
  return (
    <motion.div 
    className="art-card" 
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    whileHover={{ scale: 1.02 }}
    >
      <div className="art-card-image-wrapper">
      {typeof imageUrl === 'string' ? (
        <img className="art-card-image" src={imageUrl} alt={title} />
      ) : (
        <Image className="art-card-image" src={imageUrl} alt={title} />
      )}
      <h2>{title}</h2>
      </div>
    </motion.div>
  );
};

export default ArtCard;
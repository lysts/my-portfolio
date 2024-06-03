"use client"

import Desc from "@/components/desc";
import React, { useState } from 'react';
import ArtCard from '@/components/artCard';
import Modal from '@/components/modal';
import { artImages } from "@/lib/data";
import '@/app/artGallery.css';
import { StaticImageData } from 'next/image'; // or your appropriate image data type import
interface Art {
    title: string;
    description: string;
    tags?: readonly string[]; // Change from string[] to readonly string[]
    imageUrl: string | StaticImageData;
  }
  
  const ArtGallery: React.FC = () => {
    const [selectedArt, setSelectedArt] = useState<Art | null>(null);
  
    const handleCardClick = (art: Art) => {
      setSelectedArt(art); // Update the state with the selected art piece
    };
  
    const handleCloseModal = () => {
      setSelectedArt(null); // Close the modal by setting the state to null
    };
  
    return (
      <main>
      <h1 className="px-10 pb-10 artdesc">Explorations in art, sound, and wood.</h1>
      <div className="art-gallery py-10 px-5">
        <div className="grid">
          {artImages.map((art, index) => (
            <ArtCard
              key={index}
              title={art.title}
              imageUrl={art.imageUrl} // Adjust path as needed
              onClick={() => handleCardClick(art)} // Handle the card click
            />
          ))}
        </div>
        {selectedArt && (
          <Modal
            isOpen={!!selectedArt}
            onClose={handleCloseModal}
            title={selectedArt.title}
            imageUrl={selectedArt.imageUrl} // Adjust path as needed
            description={selectedArt.description}
          />
        )}
      </div>
      </main>
    );
  };
  




              {/*<div className="gallery">
      {Object.keys(creativeImages).map((key) => (
        <img key={key} src={creativeImages[key]} alt={key} />
      ))}
      </div>*/}
         
      export default ArtGallery;


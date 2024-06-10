"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArtCard from '@/components/artCard';
import Modal from '@/components/modal';
import { artImages } from "@/lib/data";
import '@/app/projects/artGallery.css';
import { StaticImageData } from 'next/image'; 

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
      <h1 className="px-10 py-5 md:px-20 text-2xl md:text-3xl flex flex-col"><span className="text-5xl md:text-6xl font-extrabold">Explorations in </span> <span>art, sound, wood, and technology.</span></h1>
      <div className="art-gallery px-5 md:px-10">
        <motion.div 
          className="grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {artImages.map((art, index) => (
            <motion.div key={index} variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0}
            }}>
            <ArtCard
              key={index}
              title={art.title}
              imageUrl={art.imageUrl} // Adjust path as needed
              onClick={() => handleCardClick(art)} // Handle the card click
            />
            </motion.div>
          ))}
        </motion.div>
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
      

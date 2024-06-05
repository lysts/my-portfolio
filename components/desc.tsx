"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "@/components/section-heading";
import { descWords } from "@/lib/data";
import { motion } from "framer-motion";
import artImg from "@/public/portfolioart.png"
import Image from "next/image";
export default function Desc() {
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % descWords.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []); // Run once on component mount

  return (
    <motion.section
      className="mb-28 text-right sm:mb-40 scroll-mt-28 sm:text-2xl flex flex-col relative w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="pt-5 pb-10 px-8 flex">
        <div className="flex flex-grow"></div>
        <h1 className="font-bold sm:text-6xl text-5xl h-[10rem]">{descWords[currentWordIndex]} design.</h1>
      </div>
 
      <div className="flex px-10 pt-10 pb-10 flex-col lg:flex-row ">
        <div className="flex-1 pb-4">
      <Image
              src={artImg}
              width={600}
              height={400}
              layout="responsive"
              quality="95"
              priority={true}
              alt="Portfolio Art"
            />
         </div>   
        <div className="flex-1 px-3">
        <p className="mb-3">
          London-based aspiring full-stack engineer. My background sits at the intersection of {" "}
          <span className="font-medium">cognition and perceptual sciences, art and music,</span>{" "}and<span className="font-medium"> full-stack web development</span>.{" "}
          <span className="italic">Passionate about pushing boundaries to create innovative designs and software solutions.</span> My designs prioritise <span className="underline">impact</span> through functionality and artistry.
          
          <br></br><br></br>
          <span className="italic">When I'm not coding</span>, I enjoy crafting experiences that are degustated, musical, or visual, wood carving and pyrography, or climbing and going on extensive walks. I am currently learning about fermentation techniques, book-binding, and needlework. 
        </p>
        </div>
      </div>
    </motion.section>
  )
}

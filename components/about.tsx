"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-right leading-8 sm:mb-40 scroll-mt-28 sm:text-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <p className="mb-3">
        After graduating with a{" "}
        <span className="font-medium">Neuroscience</span>{" "}degree, I decided to pursue my passion for programming and enrolled in a <span className="font-medium">full-stack web development</span> coding bootcamp.{" "}
        <span className="italic">I am passionate about pushing boundaries to create innovative designs and software solutions.</span> My designs prioritise <span className="underline">impact</span> through functionality and artistry. <br></br><br></br>My core tech-stack
        is{" "}
        <span className="font-medium">
          React, TypeScript, Node.js, PostgreSQL, Framer Motion, Python, and Figma.</span>{" "}I am always open to learning new technologies.
        <br></br><br></br>
        <span className="italic">When I'm not coding</span>, I enjoy crafting experiences that are degustated, musical, or visual, wood carving and pyrography, or climbing and going on extensive walks. I am currently learning about fermentation techniques, book-binding, and needlework. 
      </p>
    </motion.section>
  )
}

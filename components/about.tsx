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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a{" "}
        <span className="font-medium">Neuroscience</span>{" "}degree, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. <br></br><br></br>My core tech-stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL</span>{" "}as well as<span className="font-medium">{" "}TypeScript, Framer Motion, and Python.</span>{" "}I am always looking to
        learn new technologies and am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
        <br></br><br></br>
        <span className="italic">When I'm not coding</span>, I enjoy playing the violin and composing music, whittling and drawing, climbing, and going on extensive walks. I am currently learning about{" "}
        <span className="font-medium">crack-climbing</span>, as well as  fermentation techniques, book-binding, and needlework. 
      </p>
    </motion.section>
  )
}

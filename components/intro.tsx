"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profileImg from "@/public/profile.jpg"

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <section className="flex flex-col lg:flex-row justify-center items-center">
      <div className="lg:flex-1 lg:w-1/2">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              width="400"
              height="800"
              quality="95"
              priority={true}
              alt="Lyla's portrait"
              className="h-300 w-200 rounded-full object-cover border-[0.4rem] border-white/20 shadow-xl"
            />
          </motion.div>

          {/*<motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>*/}
        </div>
      </div>
      <div className="lg:flex-1 lg:w-1/2 justify-center items-center">
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-normal !leading-[1.5] sm:text-4xl sm:text-right lg:text-left"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
          <span className="text-xl">Hi, I'm </span><span className="font-bold text-xl">Lyla,</span><br></br>a{" "}
          <span className="font-bold">London-based designer </span>and <span className="font-bold"> software developer</span> with a background in{" "} 
          <span className="font-bold">neuroscience.</span>
        </motion.h1>
        <motion.p
        className="mb-10 mt-2 px-4 text-xl font-normal !leading-[1.0] lg:text-left sm:text-right"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
          <span className="italic text-xl !leading-[0.9]">I enjoy breathing life into innovative solutions.</span>
        </motion.p>

        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white text-sm px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-teal-100/30"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in touch{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white text-sm px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="linkedin.com/in/lyla-taguma-0503361b0"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/lysts"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
      </div>
      </section>
    </section>
  );
}
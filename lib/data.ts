import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nommablesHPImg from "@/public/nommableshp.png";
import portfolioImg from "@/public/portfoliocode.png";
import pelicanBlogImg from "@/public/pelicanblog.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Works",
    hash: "#works",
  }
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Development Bootcamp",
    location: "London, UK",
    description:
      "I received a certification from Udemy. I am currently working on personal projects and looking for a full-time role with a focus on Front-end engineering.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Graduated with a BSc in Biomedical Sciences & Honours in Neuroscience from the University of Edinburgh",
    location: "Edinburgh, UK",
    description:
      "My interests in perceptual coherence led me to pursue neuroscience. I was introduced to programming as a result of building data analysis skills throughout the degree, in Python and R.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Undergraduate Neuroscience Researcher",
    location: "Edinburgh, UK",
    description:
      "Self-taught Python to work on a data analysis pipeline in the Rochefort Lab at the Centre for Discovery Brain Sciences. My research was focused primarily on monitoring Hippocampal acivity in mice throughout their Oestrous cycle stages.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Nommables",
    description:
      "A minimalistic recipe app for archiving recipes. It can estimate cost per meal based off of your specified location. Coming soon...",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Langchain"],
    link: "https://github.com/lysts/nommables",
    imageUrl: nommablesHPImg,
  },
  {
    title: "My Portfolio Website",
    description:
      "Deployed using Vercel, I used this opportunity of needing a dynamic website portfolio to learn Next.js and Tailwind CSS.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Vercel"],
    link: "https://lysts.vercel.app/",
    imageUrl: portfolioImg,
  },
  {
    title: "Personal Blog",
    description:
      "Deployed using Pelican & GitHub Pages. Follow my programming journey, other delights of life, and my growing knowledge garden...",
    tags: ["HTML", "CSS", "reStructuredText", "Pelican", "GitHub"],
    link: "https://lysts.xyz/",
    imageUrl: pelicanBlogImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "SQL",
  "R",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
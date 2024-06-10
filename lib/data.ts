import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nommablesHPImg from "@/public/nommableshp.png";
import portfolioImg from "@/public/portfoliocode.png";
import pelicanBlogImg from "@/public/pelicanblog.png";
import glassyEyeImg from "@/public/art/glassyeye.jpeg";
import poemImg from "@/public/art/allsketch.jpeg";
import dreamImg from "@/public/art/dreamhands.jpeg";
import enaImg from "@/public/art/ena.jpeg";
import ericImg from "@/public/art/ericcard.jpeg";
import faustImg from "@/public/art/faust.jpeg";
import cfaviconImg from "@/public/art/cfavicon.jpeg";
import slaveImg from "@/public/art/oilpaint.jpeg";
import giftImg from "@/public/art/gift.png";
import gamebgImg from "@/public/art/gamebg.png";
import neonImg from "@/public/art/neonportrait.png";
import cicadaImg from "@/public/art/cicada.png";

export const links = [
  {
    name: "Home",
    hash: "/",
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

export const mainLinks = [
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Creative Projects",
    path: "/projects",
  },
  {
    name: "Thesis",
    path: "/thesis",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
] as const;

export const descWords = ["human-centered", "iterative", "accessible", "inclusive"] as const;

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


export const artImages = [
  {
    title: "Dream Translations",
    description:
      "A recreation of a dream a colleague had using gold foil, pencil sketches, and a large canvas.",
    tags: ["multimedia"],
    imageUrl: dreamImg,
  },
  {
    title: "Metroidvania Game",
    description:
      "Parallax background layers built in Procreate for a metroidvania game.",
    tags: ["Procreate"],
    imageUrl: gamebgImg,      
  },
  {
    title: "Play on Colour",
    description:
      "A jazzy portrait bursting with bright neon tones and contemporary textures.",
    tags: ["Procreate"],
    imageUrl: neonImg,      
  },
  {
    title: "Cicada",
    description:
      "A winter themed illustration of a Japanese cicada for a seasonal card.",
    tags: ["Procreate"],
    imageUrl: cicadaImg,      
  },
  {
    title: "Realism in Digital Art",
    description:
      "A glassy-eyed experimentation of realistic textures that can be achieved within digital illustration.",
    tags: ["Procreate"],
    imageUrl: glassyEyeImg,
  },
  {
    title: "A Gift",
    description:
      "Digital storytelling piece in Procreate.",
    tags: ["Procreate"],
    imageUrl: giftImg,      
  },
  {
    title: "Unfree in Oil",
    description:
      "Oil painting of a bronze sculpture depicting a female slave.",
    tags: ["Oil paint"],
    imageUrl: slaveImg,      
  },
  {
    title: "Elegie",
    description:
      "Stravinsky's 'Elegie', is a delight to play on the violin. It also draws out a very delicate textural landscape. This piece is a raw reflection of my experience of this meditative composition performed by Faust.",
    tags: ["Procreate"],
    imageUrl: faustImg, 
  },
  {
    title: "Storytelling",
    description:
      "Pen drawings to accompany poetic shorts.",
    tags: ["ballpoint pen"],
    imageUrl: poemImg,
  },
  {
    title: "Portrait Collage",
    description:
      "A multimedia portrait of Ena, a textile designer. Etching away parts of a complete portrait with a boxcutter was both terrifying and liberating, revealing avenues of exploration with washi and marbled paper as backdrops to fill the newfound spaces.",
    tags: ["multimedia"],
    imageUrl: enaImg, 
  },
  {
    title: "Birthday Card",
    description:
      "Birthday Card designed using poster markers.",
    tags: ["multimedia"],
    imageUrl: ericImg, 
  },
  {
    title: "Favicon",
    description:
      "A commissioned favicon for a chamber orchestra's publicity website.",
    tags: ["Procreate"],
    imageUrl: cfaviconImg, 
  }, 
] as const;
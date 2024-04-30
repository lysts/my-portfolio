"use client"

import React, {useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { mainLinks } from "@/lib/data";
import { IoClose, IoMenu } from "react-icons/io5";
import "@/app/header.css"

function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false); //false by default

        // click outside nav, closes nav
        const ref = useRef<HTMLDivElement>(null)
        useEffect(()=> {
            const handler =(e: Event)=> {
                if (menuOpen && ref.current && !ref.current.contains(e.target as Node)){
                    setMenuOpen(false)
                }
            }
            document.addEventListener('mousedown', handler)
            return() => {
    
                // cleanup event listener
                document.removeEventListener('mousedown', handler)
            }
        },[menuOpen])

    return(
        <nav className="z-[999] relative pb-10 flex" id="mainNav" ref={ref}>
                <Link href="/" className="header_logo flex px-10 h-3/4 py-2 font-bold text-3xl justify-start">
                    Lyla Taguma
                </Link>
                <div className="flex-grow"></div>
                <button className="menu">
                    { menuOpen ? <IoClose className="flex w-32px h-32px" onClick={() => setMenuOpen(!menuOpen)}/> : <IoMenu className="flex w-32px h-32px" onClick={() => setMenuOpen(!menuOpen)}/> }
                </button>
                <motion.ul className={"px-10 w-[22rem] justify-center gap-y-1 text-[0.9rem] font-medium text-charcoal sm:w-[initial] sm:flex-nowrap sm:gap-5 " + (menuOpen ? 'open' : '')}
                > 
                        {mainLinks.map((link) => (
                            <motion.li
                                className="h-3/4 flex items-center justify-center relative"
                                key={link.path}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                >
                                <Link
                                    className=
                                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 hover:overline transition dark:text-gray-500 dark:hover:text-gray-300"
                                    href={link.path}
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
            </nav>

    )
}

export default Navbar;
import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center"> {/* adds div to center div in */}
            <div>
                <Image src="https://images.unsplash.com/photos/brown-and-green-insect-on-brown-wooden-stick-hKtRoX9le7s" alt="Lyla portrait"
                width="250"
                height="250"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
                <span className="text-4x1" >👋🏼</span>
            </div>
        </div>
    </section>
  )
}

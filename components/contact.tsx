import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import SectionHeading from './section-heading'

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-gray-700 -mt-6">Please contact me directly at{" "}<a className="underline" href="mailto:lyla.taguma@gmail.com">lyla.taguma@gmail.com</a>{" "}or through this form.</p>

        <form className="mt-10 flex flex-col">
            <input type="email" className="h-14 px-4 rounded-lg borderBlack" placeholder="Your email"></input>
            <textarea className="h-52 my-3 rounded-lg borderBlack p-4" placeholder="Your message"/>
            <button type="submit" className="group flex items-center justify-center gap-2 h-[3-rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105">
              Submit <FaPaperPlane className="text-cs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>{" "}
            </button>
        
        </form>
    </section>
  )
}

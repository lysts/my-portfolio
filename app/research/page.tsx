import Desc from "@/components/desc";
import Contact from "@/components/contact";
import Image from "next/image";
import GiorgioImg from "@/public/GiorgioVasariAllegoryofJusticeandTruth.jpg";
import { HiDownload } from "react-icons/hi";

var sectionStyle = {
  width: "100%",
  height: "80vh",
  backgroundImage: `url(${GiorgioImg.src})`, // Use .src to get the URL of the imported image
  backgroundSize: 'cover', // Optional: cover the entire area
  backgroundPosition: 'center' // Optional: center the image
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/*Title*/}
    <section className="researchTitle py-5 max-w-7xl" style={sectionStyle}>
        <div className="text-white py-10 px-10 md:px-20 bg-black/[0.4] max-w-[70vw]"> {/* Adjust padding for responsive design */}
        <h1 className="left-align text-2xl sm:text-3xl md:text-4xl font-extrabold sm:pb-5 py-3 max-w-[60vw]">Does the Brain Ebb and Flow with our Hormonal Cycles?</h1>

        </div>
    </section>
    <div className="researchContent bg-gray-50 dark:bg-black/[0.6] w-[90vw] max-w-6xl px-4 py-15 md:px-10 pt-10"> {/*edit max width?*/}
      <div className="flex flex-col sm:flex-row sm:gap-5 md:gap-10 pb-10">
        {/*left column desc*/}
      <div className="flex flex-col px-5 md:px-2">
          <h2 className="text-sm sm:text-base md:text-base font-bold pb-1">Project Type</h2> 
          <div className="text-sm sm:text-base md:text-base pb-3 sm:pb-1">Clinical Laboratory Project</div>
          <h2 className="text-sm sm:text-base md:text-base font-bold sm:pt-4 md:pt-3 pt-2">Tags</h2> 
          <div className="mt-2 pb-5 flex flex-wrap gap-2"> {/* Added tags section */}
            <span className="bg-black/[0.1] dark:bg-black/[0.6] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white/[0.7]">neuroscience</span>
            <span className="bg-black/[0.1] dark:bg-black/[0.6] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white/[0.7]">brain</span>
            <span className="bg-black/[0.1] dark:bg-black/[0.6] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white/[0.7]">health</span>
          </div>
          <h2 className="text-sm sm:text-base md:text-base font-bold pb-1 pt-2 md:pt-0">Project Title</h2> 
          <p className="left-align italic text-sm sm:text-base md:text-base  pb-4">
"Oestrous Cycle-Dependent Modulation of Cortical & Hippocampal Neuronal Activity"</p>
<h2 className="text-sm sm:text-base md:text-base font-bold pb-1 pt-2 md:pt-3">Data Acquisition</h2> 
          <p className="left-align text-sm sm:text-base md:text-base  pb-3">
Brain activity recorded using chronic Neuropixels probe implants in the visual cortex and hippocampus of female mouse models. Monitored cycle stages using vaginal cell sample histologies.</p>
          <div className="flex-1"></div>
          <div className="py-4">
          <a
          className="bg-slate-500 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-500 text-white text-center dark:text-white py-2 px-4 rounded-sm md:max-w-[40%] lg:max-w-[38%] text-sm items-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          href="/thesis.pdf"
          download
        >
          Read Thesis
        </a>
          </div>
        </div>
        {/*right column desc: intro*/}
        <div className="flex-col px-5 pt-4 sm:pt-0 md:px-1 w-[100%] sm:w-[200%]">
        <h2 className="text-base md:text-md font-bold pb-2">An Overview</h2>
        <p>Plato believed that pre-menstrual distress experienced by those assigned female at birth (AFAB) was caused by the “mourning womb”.
          <br/>
          <br/>
          Historically, case studies have reported monthly occurring symptoms in females such as intensified seizures in epileptic patients. Similarly, reproductive cycles in females from other mammalian species, such as mice and their oestrous cycle, have been found to induce changes in appetite and sociosexual behaviours. 
          <br/>
          <br/>
          <span className="italic">Unfortunately, such variability in behaviour and cognitive function has become a reason to <span className="font-bold">exclude females from neuroscience research.</span></span>
          <br/>
          <br/>
          There is a large knowledge gap regarding how these cycles may affect neuronal mechanisms and activity that underlie information processing in the brain. In this study, we presented visual stimuli to female mice and assessed how neuronal activity in the brain related to oestrous cycle stages. 
          <br/>
          <br/>
          There were no oestrous cycle-dependent changes in brain activity. Differences in brain activity were primarily due to individual variability. Such findings motivate scientists to question if the oestrous cycle impacts brain activity in specific behavioural contexts. It also encourages future studies to include females in research, whilst accounting for mouse-to-mouse variability and what aspects of individuality may be giving rise to such differences in brain activity.</p> 
        </div>
      </div>
    </div>

      <div className="researchContent bg-white/[0.6] dark:bg-black/[0.6] max-w-5xl px-4 py-30 md:px-10">
        <div>
        
        </div>
      </div>
  </main>
);
}


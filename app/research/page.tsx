import Desc from "@/components/desc";
import Contact from "@/components/contact";
import Image from "next/image";
import GiorgioImg from "@/public/GiorgioVasariAllegoryofJusticeandTruth.jpg";

var sectionStyle = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${GiorgioImg.src})`, // Use .src to get the URL of the imported image
  backgroundSize: 'cover', // Optional: cover the entire area
  backgroundPosition: 'center' // Optional: center the image
};

export default function Home() {
  return (
    <main className="flex flex-col w-[100vw] items-center px-4">
    <div className="researchContent bg-white/[0.6] dark:bg-black/[0.6] max-w-5xl px-4 py-15 md:px-10 pt-10"> {/* Adjust the max-width to control the width of rContent */}
      <div className="flex flex-col sm:flex-row sm:gap-20 pb-10">
        <div className="flex-col">
          <h1 className="left-align text-3xl sm:text-4xl md:text-5xl font-extrabold sm:pb-5 py-3">Does the Brain Ebb and Flow with our Hormonal Cycles?</h1>
          <h2 className="text-base md:text-md font-bold">Project Title</h2> 
          <p className="left-align italic text-base md:text-md pb-2">Oestrous Cycle-Dependent Modulation of Cortical & Hippocampal Neuronal Activity</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm sm:text-base md:text-md font-bold">Project Type</h2> 
          <div className="text-sm sm:text-base md:text-md">Clinical Laboratory Project</div>
          <h2 className="text-sm sm:text-base md:text-md font-bold sm:pt-4 pt-2">Tags</h2> 
          <div className="mt-2 flex flex-wrap gap-2"> {/* Added tags section */}
            <span className="bg-black/[0.1] dark:bg-black/[0.6] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white/[0.7]">neuroscience</span>
            <span className="bg-black/[0.1] dark:bg-black/[0.6] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white/[0.7]">brain</span>
            <span className="bg-black/[0.1] dark:bg-black/[0.6] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white/[0.7]">health</span>
          </div>
        </div>
      </div>
    </div>
    <section className="abstract py-5 max-w-7xl" style={sectionStyle}>
        <div className="text-white py-10 px-10 md:px-20 bg-black/[0.4]"> {/* Adjust padding for responsive design */}
          <p><span className="text-lg md:text-xl">Plato believed that pre-menstrual distress that those assigned female at birth (AFAB) <br /> often experience was caused by the “mourning womb”.</span> 
          <br/>
          <br/>
          <span className="text-base md:text-lg">Historically, case studies have reported monthly occurring symptoms in females such as intensified seizures in epileptic patients. Similarly, reproductive cycles in females from other mammalian species, such as mice and their oestrous cycle, have been found to induce changes in appetite and sociosexual behaviours.</span> 
          <br/>
          <br/>
          <span className="italic bg-black/[0.7]">Unfortunately, such variability in behaviour and cognitive function has become a reason to <span className="font-bold">exclude females from neuroscience research.</span></span></p>
          <br />
          <p className="text-base md:text-lg">There is a large knowledge gap regarding how these cycles may affect neuronal mechanisms and activity that underlie information processing in the brain.</p>
        </div>
      </section>
      <div className="researchContent bg-white/[0.6] dark:bg-black/[0.6] max-w-5xl px-4 py-15 md:px-10 py-10"> 
      <p></p>
      </div>
  </main>
);
}


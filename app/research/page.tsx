import Desc from "@/components/desc";
import Contact from "@/components/contact";
import Image from "next/image";
import GiorgioImg from "@/public/GiorgioVasariAllegoryofJusticeandTruth.jpg";

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { GiorgioImg } + ")"
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="rContent px-10">
        <div className="flex-1">
        <h1>Clinical Study: Oestrous Cycle-Dependent Modulation of Cortical & Hippocampal Neuronal Activity</h1>
        </div>
        <section style={ sectionStyle }>
          {/*<Image
              src={GiorgioImg}
              layout="responsive"
              quality="95"
              priority={true}
              alt="Painting: Giorgio Vasari's Allegory of Justice"
              className="flex-1"
  />*/}
        </section>
      </div>
      
    </main>
  );
}
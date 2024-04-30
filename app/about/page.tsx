import About from "@/components/resume/about";
import Contact from "@/components/contact";
import Experience from "@/components/resume/experience";
import Intro from "@/components/resume/intro";
import Projects from "@/components/resume/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/resume/skills";
import Layout from "./layout";

 const Identity = () => {
  return (
    <Layout>
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
    </Layout>
  );
}

Identity.noLayout = true;
export default Identity
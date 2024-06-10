import Desc from "@/components/desc";
import Contact from "@/components/contact";
import Projects from "@/components/resume/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="h-[2rem]"></div>
      
      <Projects />
      <div className="py-7">more coming soon...</div>
      <div className="h-[15rem]"></div>
    </main>
  );
}
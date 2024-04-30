import Layout from "@/app/layout"
import Contact from "@/components/contact";

export default function Home() {
  return (
    <Layout>
    <main className="flex flex-col items-center px-4">
      <Contact />
    </main>
    </Layout>
  );
}
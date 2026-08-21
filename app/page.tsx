import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <CaseStudy />
        <Projects />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
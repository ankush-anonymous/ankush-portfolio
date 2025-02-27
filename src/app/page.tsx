import Image from "next/image";
import Hero from "../components/hero-section";
import Navbar from "@/components/navbar";
import Work from "@/components/work-section";
import Education from "@/components/education-section";
import Superpowers from "@/components/superpower-section";
import Projects from "@/components/projects-section";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      <Hero/>
      <Work/>
      <Education/>
      <Superpowers/>
      <Projects/>
  </main>
  );
}

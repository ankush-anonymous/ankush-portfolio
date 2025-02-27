import Image from "next/image";
import Hero from "../components/hero-section";
import Navbar from "@/components/navbar";
import Work from "@/components/work-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      <Hero/>
      <Work/>
  </main>
  );
}

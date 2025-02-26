import Image from "next/image";
import Hero from "../components/hero-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      <Hero/>
  </main>
  );
}

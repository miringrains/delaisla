import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import SoulSection from "@/components/sections/SoulSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Manifesto />
      <SoulSection />
    </main>
  );
}

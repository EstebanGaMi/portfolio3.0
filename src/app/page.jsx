import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import SocialNetworks from "./components/SocialBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4 z-40">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SocialNetworks />
      </div>
    </main>
  );
}

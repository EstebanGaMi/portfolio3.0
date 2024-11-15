import { HeroSection } from "./components/HeroSection";
import Cover from "./components/Cover";
import SocialNetworks from "./components/SocialBar";

export default function Home({ darkMode }) {
  return (
    <main
      className={`flex min-h-screen flex-col ${darkMode ? "bg-[#121212]" : ""}`}
    >
      <div className="container mx-auto px-12 z-40">
        <HeroSection />
        <SocialNetworks />
      </div>
      <Cover />
    </main>
  );
}

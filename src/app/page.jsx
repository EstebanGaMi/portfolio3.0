import { HeroSection } from "./components/HeroSection";
import Cover from "./components/Cover";
// import { Navbar } from "./components/Navbar";
import SocialNetworks from "./components/SocialBar";
// import AchievementsSection from "./components/AchivimentSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 z-40">
        {/* <Navbar /> */}
        <HeroSection />
        {/* <AchievementsSection /> */}
        <SocialNetworks />
      </div>
      <Cover />
    </main>
  );
}

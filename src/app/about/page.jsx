import React from "react";
import { AboutSection } from "../components/AboutSection";
import { Navbar } from "../components/Navbar";
import SocialNetworks from "../components/SocialBar";

const page = () => {
  return (
    <section className="flex min-h-screen flex-col bg-[#121212] pt-20 z-40">
      <Navbar />
      <AboutSection />
      <SocialNetworks />
    </section>
  );
};

export default page;

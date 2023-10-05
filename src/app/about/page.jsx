import React from "react";
import { AboutSection } from "../components/AboutSection";
import { Navbar } from "../components/Navbar";

const page = () => {
  return (
    <section className="flex min-h-screen flex-col bg-[#121212] pt-20 z-40">
      <Navbar />
      <AboutSection />
    </section>
  );
};

export default page;

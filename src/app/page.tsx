"use client";

import { useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  useEffect(() => {
    // Cursor glow
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Intersection observer for reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      glow.remove();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

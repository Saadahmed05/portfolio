import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Recognition } from "@/components/sections/Recognition";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}

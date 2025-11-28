import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import GitHub from "@/components/GitHub";
import Ventures from "@/components/Ventures";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Portfolio />
      <GitHub />
      <Ventures />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

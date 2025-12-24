import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import SideProjects from "@/components/SideProjects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Portfolio />
      <SideProjects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

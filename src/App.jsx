import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AISection from "./components/AISection";
import Projects from "./components/Projects";
import WhyChooseMe from "./components/WhyChooseMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#080b14] text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AISection />
        <Projects />
      <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
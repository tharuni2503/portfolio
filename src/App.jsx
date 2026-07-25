import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyChooseMe from "./components/WhyChooseMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#030712] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyChooseMe />
      <Contact/>
      <Footer />
    </div>
  );
}
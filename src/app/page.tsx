import About from "@/components/about";
import Companies from "@/components/caraousel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection/>
      <Companies/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

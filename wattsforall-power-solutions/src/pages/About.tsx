import { Navbar } from "@/components/layout/Navbar";
import { About as AboutSection } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
};

export default About;

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HomeFeatures } from "@/components/sections/HomeFeatures";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <HomeFeatures />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;

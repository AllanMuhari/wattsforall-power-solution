import { Navbar } from "@/components/layout/Navbar";
import { Solution as SolutionSection } from "@/components/sections/Solution";
import { Footer } from "@/components/layout/Footer";

const Solution = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <SolutionSection />
      </div>
      <Footer />
    </main>
  );
};

export default Solution;

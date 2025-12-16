import { Navbar } from "@/components/layout/Navbar";
import { Problem as ProblemSection } from "@/components/sections/Problem";
import { Footer } from "@/components/layout/Footer";

const Problem = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ProblemSection />
      </div>
      <Footer />
    </main>
  );
};

export default Problem;

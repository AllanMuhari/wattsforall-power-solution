import { Navbar } from "@/components/layout/Navbar";
import { Impact as ImpactSection } from "@/components/sections/Impact";
import { Footer } from "@/components/layout/Footer";

const Impact = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ImpactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Impact;

import { Navbar } from "@/components/layout/Navbar";
import { Team as TeamSection } from "@/components/sections/Team";
import { Footer } from "@/components/layout/Footer";

const Team = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <TeamSection />
      </div>
      <Footer />
    </main>
  );
};

export default Team;

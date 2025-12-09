import { Navbar } from "@/components/layout/Navbar";
import { Contact as ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const Contact = () => {
  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;

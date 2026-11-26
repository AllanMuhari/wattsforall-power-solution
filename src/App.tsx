import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Solution from "./pages/Solution";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: "start" });
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function SiteLayout() {
  const { pathname } = useLocation();

  return <><Link className="skip-link" to={`${pathname}#main-content`}>Skip to content</Link><Navbar /><main id="main-content"><Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<About />} />
    <Route path="/how-it-works" element={<HowItWorks />} />
    <Route path="/solution" element={<Solution />} />
    <Route path="/impact" element={<Impact />} />
    <Route path="/get-involved" element={<Team />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/problem" element={<Navigate to="/how-it-works" replace />} />
    <Route path="/team" element={<Navigate to="/about" replace />} />
    <Route path="*" element={<NotFound />} />
  </Routes></main><Footer /></>;
}

const App = () => <QueryClientProvider client={queryClient}><TooltipProvider><Toaster /><Sonner /><HashRouter><ScrollToTop /><SiteLayout /></HashRouter></TooltipProvider></QueryClientProvider>;

export default App;

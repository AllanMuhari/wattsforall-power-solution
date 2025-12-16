import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/wattsforall-logo.jpeg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Problem", href: "/problem" },
  { name: "Solution", href: "/solution" },
  { name: "Impact", href: "/impact" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50"
    >
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="WattsForAll Logo" className="h-12 w-auto rounded-lg" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <Link
                  to={link.href}
                  className={`transition-colors font-medium ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <Link to="/contact">
              <Button variant="hero">Partner With Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-6 pb-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`transition-colors font-medium text-lg ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" className="mt-4">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

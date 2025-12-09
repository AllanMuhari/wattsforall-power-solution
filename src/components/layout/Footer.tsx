import { motion } from "framer-motion";
import { Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/wattsforall-logo.jpeg";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Solution", href: "/solution" },
      { name: "Impact", href: "/impact" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Partner With Us", href: "/contact" },
      { name: "Invest", href: "/contact" },
      { name: "Pilot Program", href: "/contact" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container-custom section-padding py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div className="inline-block mb-6" whileHover={{ scale: 1.02 }}>
              <Link to="/">
                <img src={logo} alt="WattsForAll Logo" className="h-16 w-auto rounded-lg" />
              </Link>
            </motion.div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Transforming electronic waste into clean, affordable power solutions for 
              off-grid and underserved communities. Energy. Reimagined.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:wattsforall.ke@gmail.com"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://linkedin.com/company/wattsforall"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WattsForAll. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
};

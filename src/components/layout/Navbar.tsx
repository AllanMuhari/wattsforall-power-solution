import { useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BrandMark } from "@/components/SitePrimitives";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/about" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Solutions", href: "/solution" },
  { name: "Impact", href: "/impact" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => document.documentElement.dataset.theme === "light" ? "light" : "dark");
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, "") || "/";
  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", nextTheme === "light" ? "#f7f8f3" : "#09160f");
    const secureCookie = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `wattsforall-theme=${nextTheme}; Max-Age=31536000; Path=/; SameSite=Lax${secureCookie}`;
    setTheme(nextTheme);
  };

  return (
    <header className="site-header">
      <nav className="site-width nav-shell" aria-label="Main navigation">
        <Link to="/" className="brand-lockup" onClick={closeMenu} aria-label="WattsForAll home">
          <BrandMark />
          <span className="brand-lockup__text"><strong>WattsForAll</strong><small>Power in a second life</small></span>
        </Link>
        <div id="primary-navigation" className={`nav-content${isOpen ? " nav-content--open" : ""}`}>
          <div className="nav-links">
            {navLinks.map((link) => {
              const active = currentPath === link.href;
              return <Link key={link.href} to={link.href} onClick={closeMenu} aria-current={active ? "page" : undefined} className={active ? "nav-link nav-link--active" : "nav-link"}>{link.name}</Link>;
            })}
          </div>
          <Link to="/get-involved" className="button button--primary nav-cta" onClick={closeMenu}>Support our mission <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="nav-tools">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "light"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
          </button>
          <button className="mobile-menu-button" type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen((open) => !open)}>
            {isOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

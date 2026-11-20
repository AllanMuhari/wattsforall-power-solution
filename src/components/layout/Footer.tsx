import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { BrandMark } from "@/components/SitePrimitives";
import { NewsletterForm } from "@/components/SiteForms";

const footerGroups = [
  { title: "Explore", links: [{ label: "Our Story", to: "/about" }, { label: "How It Works", to: "/how-it-works" }, { label: "Solutions", to: "/solution" }, { label: "Impact", to: "/impact" }] },
  { title: "Take part", links: [{ label: "Donate batteries", to: "/get-involved#recycle" }, { label: "Partner with us", to: "/get-involved#partner" }, { label: "Volunteer", to: "/get-involved#volunteer" }, { label: "Contact", to: "/contact" }] },
];

export const Footer = () => (
  <footer className="site-footer">
    <div className="site-width">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand-lockup brand-lockup--footer">
            <BrandMark inverse />
            <span className="brand-lockup__text"><strong>WattsForAll</strong><small>Power in a second life</small></span>
          </Link>
          <p>Turning e-waste into clean power for off-grid communities. Clean energy access for everyone, powered by circular innovation.</p>
          <div className="footer-socials" aria-label="Contact and social profiles">
            <a className="icon-link" href="mailto:wattsforall.ke@gmail.com" aria-label="Email WattsForAll"><Mail size={19} /></a>
            <span className="footer-social-note">Official social profiles coming soon</span>
          </div>
        </div>
        <div className="footer-links-wrap">
          {footerGroups.map((group) => <div className="footer-link-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.links.map((link) => <li key={link.label}><Link to={link.to}>{link.label}</Link></li>)}</ul>
          </div>)}
        </div>
        <div className="footer-newsletter">
          <p className="eyebrow">Letters from the field</p>
          <h3>Good things are growing.</h3>
          <p>Get an occasional update from WattsForAll.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} WattsForAll</span>
        <span>Turning e-waste into clean power for off-grid communities.</span>
        <Link to="/contact">Say hello <ArrowRight size={14} aria-hidden="true" /></Link>
      </div>
    </div>
  </footer>
);

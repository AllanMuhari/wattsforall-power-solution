import type { ReactNode } from "react";
import { ArrowRight, Image as ImageIcon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-mark${inverse ? " brand-mark--inverse" : ""}`} aria-hidden="true">
      <Sun size={22} strokeWidth={1.8} />
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="section-heading">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export function PageIntro({ eyebrow, title, copy, aside }: { eyebrow: string; title: string; copy: string; aside?: ReactNode }) {
  return (
    <section className="page-intro">
      <div className="site-width">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{eyebrow}</span>
        </nav>
      </div>
      <div className="site-width page-intro__grid">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p className="page-intro__copy">{copy}</p>
        </div>
        {aside ? <div className="page-intro__aside">{aside}</div> : null}
      </div>
    </section>
  );
}

export function ActionLink({ to, children, variant = "primary", className = "" }: { to: string; children: ReactNode; variant?: "primary" | "secondary" | "outline" | "light" | "text"; className?: string }) {
  const classes = `button button--${variant}${className ? ` ${className}` : ""}`;
  const content = <>{children}<ArrowRight size={17} aria-hidden="true" /></>;
  return to.startsWith("/") ? <Link className={classes} to={to}>{content}</Link> : <a className={classes} href={to}>{content}</a>;
}

export function PhotoFigure({ src, alt, caption, note }: { src: string; alt: string; caption: string; note?: string }) {
  return (
    <figure>
      <div className="photo-frame photo-frame--soft">
        <img src={src} alt={alt} loading="lazy" />
        {note ? <span className="photo-tag">{note}</span> : null}
      </div>
      <figcaption className="photo-caption"><ImageIcon size={15} aria-hidden="true" /><span><strong>{caption}</strong></span></figcaption>
    </figure>
  );
}

export function PlaceholderLabel({ children }: { children: ReactNode }) {
  return <span className="placeholder-note"><Sun size={14} aria-hidden="true" />{children}</span>;
}

export function CalloutBand({ title, copy, action = "Get Involved", to = "/get-involved" }: { title: string; copy: string; action?: string; to?: string }) {
  return (
    <div className="callout-band">
      <Eyebrow>Make room for more light</Eyebrow>
      <h2>{title}</h2>
      <p>{copy}</p>
      <ActionLink to={to} variant="primary">{action}</ActionLink>
    </div>
  );
}

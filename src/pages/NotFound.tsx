import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/SitePrimitives";

export default function NotFound() {
  return <section className="section"><div className="site-width not-found"><Eyebrow>Page not found</Eyebrow><h1>Looks like this path wandered off.</h1><p>The page may have moved, but there’s still a way forward.</p><Link className="button button--secondary" to="/">Back to the home page</Link></div></section>;
}

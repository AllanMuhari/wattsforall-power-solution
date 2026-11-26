import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const legacyRoute = window.location.hash.startsWith("#/") ? window.location.hash.slice(1) : null;

if (legacyRoute) {
  window.history.replaceState(window.history.state, "", legacyRoute);
}

createRoot(document.getElementById("root")!).render(<App />);

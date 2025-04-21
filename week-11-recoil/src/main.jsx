import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2_recoil_atoms from "./App2-recoil-atoms.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App2_recoil_atoms />
  </StrictMode>
);

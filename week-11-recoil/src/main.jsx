import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2_recoil_atoms from "./App2-recoil-atoms.jsx";
import App3_memo from "./App3_memo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App3_memo />
  </StrictMode>
);

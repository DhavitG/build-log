import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2_recoil_atoms from "./App2-recoil-atoms.jsx";
import App3_memo from "./App3_memo.jsx";
import App4_recoil_selector from "./App4_recoil_selector.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App4_recoil_selector />
  </StrictMode>
);

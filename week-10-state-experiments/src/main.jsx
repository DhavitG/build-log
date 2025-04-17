import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2_context from "./App2_context.jsx";
import App3_context_clean from "./App3_context_clean.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App3_context_clean />
  </StrictMode>
);

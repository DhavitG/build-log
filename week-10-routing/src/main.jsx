import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2_useRef from "./App2.jsx";
import App3_useRef from "./App3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App3_useRef />
  </StrictMode>
);

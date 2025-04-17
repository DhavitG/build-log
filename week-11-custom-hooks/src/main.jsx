import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2_useFetch from "./App2_useFetch.jsx";
import App3_usePrev from "./App3_usePrev.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App3_usePrev />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "./components/providers/index.p";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);

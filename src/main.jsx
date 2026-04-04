import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Shell from "./Shell.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Shell>
      <App />
    </Shell>
  </StrictMode>
);

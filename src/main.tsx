import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import AppRouter from "@/router/AppRouter.tsx";
import { BrowserRouter } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollAnimation />
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
);

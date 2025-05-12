import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Sekiro from "./pages/Sekiro.jsx";
import AboutSekiro from "./pages/aboutSekiro.jsx";
import Elden from "./pages/Elden.jsx";
import AboutElden from "./pages/aboutElden.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/sekiro" element={<Sekiro />} />
      <Route path="/sekiro/about" element={<AboutSekiro />} />
      <Route path="/elden" element={<Elden />} />
      <Route path="elden/about" element={<AboutElden />} />
    </Routes>
  </BrowserRouter>
);

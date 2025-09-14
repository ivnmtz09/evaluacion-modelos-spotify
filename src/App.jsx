import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import McCallPage from "./pages/McCallPage";
import BoehmPage from "./pages/BoehmPage";
import FurpsPage from "./pages/FurpsPage";
import Conclusions from "./pages/Conclusions";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/mccall" element={<McCallPage />} />
          <Route path="/boehm" element={<BoehmPage />} />
          <Route path="/furps" element={<FurpsPage />} />
          <Route path="/conclusiones" element={<Conclusions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Team from "./pages/Team"
import McCallPage from "./pages/McCallPage"
import BoehmPage from "./pages/BoehmPage"
import FurpsPage from "./pages/FurpsPage"
import Conclusions from "./pages/Conclusions"
import Referencias from "./pages/Referencias"
import Visor from "./pages/Visor"

function App() {
  return (
    <Router basename="/evaluacion-modelos-spotify">
      <div className="min-h-screen flex flex-col bg-spotify-gray-light">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipo" element={<Team />} />
            <Route path="/mccall" element={<McCallPage />} />
            <Route path="/boehm" element={<BoehmPage />} />
            <Route path="/furps" element={<FurpsPage />} />
            <Route path="/conclusiones" element={<Conclusions />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/visor/:archivo" element={<Visor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

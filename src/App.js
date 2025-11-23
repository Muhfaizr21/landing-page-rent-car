import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import Kendaraan from './pages/Kendaraan';
import Layanan from './pages/Layanan';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';

function App() {
  return (
    <Router>
      <div className="App relative min-h-screen">
        <ParticleBackground />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/kendaraan" element={<Kendaraan />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
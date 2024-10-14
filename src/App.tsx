import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VehicleService from './pages/VehicleService';
import ApartmentService from './pages/ApartmentService';
import YachtService from './pages/YachtService';
import JetService from './pages/JetService';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/vehicules" element={<VehicleService />} />
            <Route path="/services/appartements" element={<ApartmentService />} />
            <Route path="/services/yachts" element={<YachtService />} />
            <Route path="/services/jets" element={<JetService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
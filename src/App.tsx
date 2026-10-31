import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPage } from './pages/RoomsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { RestaurantMenuPage } from './pages/RestaurantMenuPage';
import { UndergroundBarPage } from './pages/UndergroundBarPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-ivory text-dark font-sans selection:bg-gold selection:text-white">
        <Navbar />

        <main className="flex-1 pb-16 sm:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/restaurant-menu" element={<RestaurantMenuPage />} />
            <Route path="/underground-bar" element={<UndergroundBarPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

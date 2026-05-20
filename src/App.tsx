import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AvailablePuppies } from './pages/AvailablePuppies';
import { AboutUs } from './pages/AboutUs';
import { HealthGuarantee } from './pages/HealthGuarantee';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
export function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cuccioli-disponibili" element={<AvailablePuppies />} />
            <Route path="chi-siamo" element={<AboutUs />} />
            <Route path="garanzia-salute" element={<HealthGuarantee />} />
            <Route path="testimonianze" element={<Testimonials />} />
            <Route path="contatti" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>);

}
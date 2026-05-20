import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
export function Header() {
  const { t } = useT();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
  {
    path: '/',
    label: t('nav.home')
  },
  {
    path: '/cuccioli-disponibili',
    label: t('nav.puppies')
  },
  {
    path: '/chi-siamo',
    label: t('nav.about')
  },
  {
    path: '/garanzia-salute',
    label: t('nav.health')
  },
  {
    path: '/testimonianze',
    label: t('nav.testimonials')
  },
  {
    path: '/contatti',
    label: t('nav.contact')
  }];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F0E6D2]/95 backdrop-blur-sm border-b border-golden-brown/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 z-50">
              <img
                src="/pasted-image.jpg"
                alt="Casa Puppy Logo"
                className="h-12 w-12 object-cover rounded-full border-2 border-golden-brown" />
              
              <span className="font-playfair font-bold text-2xl text-dark-brown hidden sm:block">
                Casa Puppy
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) =>
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-golden-brown ${location.pathname === link.path ? 'text-golden-brown font-semibold' : 'text-dark-brown'}`}>
                
                  {link.label}
                </Link>
              )}
              <div className="pl-4 border-l border-dark-brown/20">
                <LanguageSwitcher />
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center space-x-4 lg:hidden z-50">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-dark-brown hover:bg-golden-brown/10 rounded-md transition-colors"
                aria-label="Toggle menu">
                
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#FAF5EC] z-40 lg:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          top: '80px'
        }} // Below header
      >
        <nav className="flex flex-col p-6 space-y-6 overflow-y-auto h-full pb-24">
          {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={`text-2xl font-playfair transition-colors ${location.pathname === link.path ? 'text-golden-brown font-bold' : 'text-dark-brown'}`}>
            
              {link.label}
            </Link>
          )}
        </nav>
      </div>
    </>);

}
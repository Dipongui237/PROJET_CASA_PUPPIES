import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useT } from '../contexts/LanguageContext';
export function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-dark-brown text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-lg inline-flex">
              <img
                src="/pasted-image.jpg"
                alt="Casa Puppy Logo"
                className="h-10 w-10 object-cover rounded-full" />
              
              <span className="font-playfair font-bold text-xl">
                Casa Puppy
              </span>
            </div>
            <p className="text-cream/80 text-sm">{t('footer.tagline')}</p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-cream/80 hover:text-golden-brown transition-colors">
                
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-cream/80 hover:text-golden-brown transition-colors">
                
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/393331234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-whatsapp transition-colors"
                aria-label="WhatsApp">
                
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4 text-warm-tan">
              {t('footer.links')}
            </h3>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <Link
                  to="/"
                  className="hover:text-golden-brown transition-colors">
                  
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/cuccioli-disponibili"
                  className="hover:text-golden-brown transition-colors">
                  
                  {t('nav.puppies')}
                </Link>
              </li>
              <li>
                <Link
                  to="/chi-siamo"
                  className="hover:text-golden-brown transition-colors">
                  
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/garanzia-salute"
                  className="hover:text-golden-brown transition-colors">
                  
                  {t('nav.health')}
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonianze"
                  className="hover:text-golden-brown transition-colors">
                  
                  {t('nav.testimonials')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contatti"
                  className="hover:text-golden-brown transition-colors">
                  
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4 text-warm-tan">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="shrink-0 mt-0.5 text-golden-brown" />
                
                <span>Via Roma 123, 20100 Milano, Italia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0 text-golden-brown" />
                <span>+39 333 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="shrink-0 text-golden-brown" />
                <span>info@casapuppy.it</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Hours */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4 text-warm-tan">
              {t('footer.hours')}
            </h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start space-x-3">
                <Clock
                  size={18}
                  className="shrink-0 mt-0.5 text-golden-brown" />
                
                <div className="space-y-1">
                  <p>{t('footer.hours.week')}</p>
                  <p>{t('footer.hours.sat')}</p>
                  <p>{t('footer.hours.sun')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-cream/60">
          <p>© 2026 Casa Puppy. {t('footer.rights')}</p>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-cream transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="#" className="hover:text-cream transition-colors">
              {t('footer.cookie')}
            </Link>
            <Link to="#" className="hover:text-cream transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}
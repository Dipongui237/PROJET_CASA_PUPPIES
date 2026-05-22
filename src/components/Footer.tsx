import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useT } from '../contexts/LanguageContext';
export function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-dark-brown pb-8 pt-16 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex inline-flex items-center space-x-3 rounded-lg bg-white/10 p-2">
              <img
                src={`${import.meta.env.BASE_URL}pasted-image.jpg`}
                alt="Casa Puppy Logo"
                className="h-10 w-10 rounded-full object-cover" />
              
              <span className="font-playfair text-xl font-bold">
                Casa Puppy
              </span>
            </div>
            <p className="text-cream/80 text-sm">{t('footer.tagline')}</p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-cream/80 transition-colors hover:text-golden-brown">
                
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-cream/80 transition-colors hover:text-golden-brown">
                
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/393331234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 transition-colors hover:text-whatsapp"
                aria-label="WhatsApp">
                
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Links */}
          <div>
            <h3 className="mb-4 font-playfair text-lg font-semibold text-warm-tan">
              {t('footer.links')}
            </h3>
            <ul className="text-cream/80 space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-golden-brown">
                  
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/cuccioli-disponibili"
                  className="transition-colors hover:text-golden-brown">
                  
                  {t('nav.puppies')}
                </Link>
              </li>
              <li>
                <Link
                  to="/chi-siamo"
                  className="transition-colors hover:text-golden-brown">
                  
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/garanzia-salute"
                  className="transition-colors hover:text-golden-brown">
                  
                  {t('nav.health')}
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonianze"
                  className="transition-colors hover:text-golden-brown">
                  
                  {t('nav.testimonials')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contatti"
                  className="transition-colors hover:text-golden-brown">
                  
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="mb-4 font-playfair text-lg font-semibold text-warm-tan">
              {t('footer.contact')}
            </h3>
            <ul className="text-cream/80 space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-golden-brown" />
                
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
            <h3 className="mb-4 font-playfair text-lg font-semibold text-warm-tan">
              {t('footer.hours')}
            </h3>
            <ul className="text-cream/80 space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Clock
                  size={18}
                  className="mt-0.5 shrink-0 text-golden-brown" />
                
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
        <div className="border-cream/10 text-cream/60 flex flex-col items-center justify-between space-y-4 border-t pt-8 text-xs md:flex-row md:space-y-0">
          <p>© 2026 Casa Puppy. {t('footer.rights')}</p>
          <div className="flex space-x-4">
            <Link to="#" className="transition-colors hover:text-cream">
              {t('footer.privacy')}
            </Link>
            <Link to="#" className="transition-colors hover:text-cream">
              {t('footer.cookie')}
            </Link>
            <Link to="#" className="transition-colors hover:text-cream">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}
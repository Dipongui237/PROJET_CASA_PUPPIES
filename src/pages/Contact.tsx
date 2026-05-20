import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Toaster, toast } from 'sonner';
import { useT } from '../contexts/LanguageContext';
// Fix Leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});
export function Contact() {
  const { t } = useT();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(t('contact.form.success'));
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };
  const position: [number, number] = [45.4642, 9.19]; // Milan coordinates
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Toaster position="top-center" richColors />

      <div className="text-center mb-16">
        <h1 className="text-4xl font-playfair font-bold text-dark-brown mb-4">
          {t('contact.title')}
        </h1>
        <div className="w-24 h-1 bg-golden-brown mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        {/* Contact Info */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6
          }}>
          
          <h2 className="text-2xl font-playfair font-bold text-dark-brown mb-8">
            {t('contact.info')}
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-beige p-3 rounded-full text-golden-brown shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-dark-brown mb-1">Indirizzo</h3>
                <p className="text-dark-brown/80">
                  Via Roma 123
                  <br />
                  20100 Milano, Italia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-beige p-3 rounded-full text-golden-brown shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-dark-brown mb-1">
                  Telefono / WhatsApp
                </h3>
                <p className="text-dark-brown/80">+39 333 123 4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-beige p-3 rounded-full text-golden-brown shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-dark-brown mb-1">Email</h3>
                <p className="text-dark-brown/80">info@casapuppy.it</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-beige p-3 rounded-full text-golden-brown shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-dark-brown mb-1">
                  {t('footer.hours')}
                </h3>
                <p className="text-dark-brown/80">
                  {t('footer.hours.week')}
                  <br />
                  {t('footer.hours.sat')}
                  <br />
                  {t('footer.hours.sun')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{
            opacity: 0,
            x: 20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-beige">
          
          <h2 className="text-2xl font-playfair font-bold text-dark-brown mb-6">
            {t('contact.form.title')}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-brown mb-1">
                {t('contact.form.name')}
              </label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 border border-beige rounded-xl focus:ring-2 focus:ring-golden-brown focus:border-transparent outline-none transition-all" />
              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark-brown mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-2 border border-beige rounded-xl focus:ring-2 focus:ring-golden-brown focus:border-transparent outline-none transition-all" />
                
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-brown mb-1">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-beige rounded-xl focus:ring-2 focus:ring-golden-brown focus:border-transparent outline-none transition-all" />
                
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-brown mb-1">
                {t('contact.form.breed')}
              </label>
              <select className="w-full px-4 py-2 border border-beige rounded-xl focus:ring-2 focus:ring-golden-brown focus:border-transparent outline-none transition-all bg-white">
                <option value="">-- Seleziona --</option>
                <option value="pom">Pomerania</option>
                <option value="chi">Chihuahua</option>
                <option value="poo">Barboncino Nano</option>
                <option value="fre">Bulldog Francese</option>
                <option value="mal">Maltipoo</option>
                <option value="dac">Bassotto</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-brown mb-1">
                {t('contact.form.msg')}
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 border border-beige rounded-xl focus:ring-2 focus:ring-golden-brown focus:border-transparent outline-none transition-all resize-none">
              </textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-dark-brown text-cream py-3 rounded-xl font-medium hover:bg-golden-brown transition-colors disabled:opacity-70">
              
              {isSubmitting ? '...' : t('contact.form.submit')}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          delay: 0.4
        }}
        className="h-[400px] w-full rounded-3xl overflow-hidden shadow-lg border border-beige z-0 relative">
        
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            height: '100%',
            width: '100%'
          }}>
          
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
          <Marker position={position}>
            <Popup>
              <div className="font-playfair font-bold text-dark-brown">
                Casa Puppy
              </div>
              <div className="text-sm">Via Roma 123, Milano</div>
            </Popup>
          </Marker>
        </MapContainer>
      </motion.div>
    </div>);

}
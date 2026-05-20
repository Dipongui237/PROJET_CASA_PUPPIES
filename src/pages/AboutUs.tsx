import React from 'react';
import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext';
export function AboutUs() {
  const { t } = useT();
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
          
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-6">
            {t('about.title')}
          </h1>
          <div className="w-20 h-1 bg-golden-brown mb-8 rounded-full"></div>

          <div className="space-y-6 text-lg text-dark-brown/80 leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="relative">
          
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Casa Puppy Family"
              className="w-full h-full object-cover" />
            
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-warm-tan rounded-full -z-10 opacity-50"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-golden-brown rounded-full -z-10 opacity-30"></div>
        </motion.div>
      </div>
    </div>);

}
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
export function HealthGuarantee() {
  const { t } = useT();
  const items = [
  'health.i1',
  'health.i2',
  'health.i3',
  'health.i4',
  'health.i5'];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
          duration: 0.6
        }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-beige">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-dark-brown mb-4">
            {t('health.title')}
          </h1>
          <p className="text-lg text-golden-brown font-medium">
            {t('health.subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {items.map((item, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.4,
              delay: idx * 0.1
            }}
            className="flex items-start space-x-4 p-4 rounded-2xl bg-beige/30">
            
              <CheckCircle2
              className="text-golden-brown shrink-0 mt-1"
              size={24} />
            
              <p className="text-lg text-dark-brown font-medium">{t(item)}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>);

}
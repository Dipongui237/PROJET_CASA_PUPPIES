import React from 'react';
import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext';
export function StatsSection() {
  const { t } = useT();
  const stats = [
  {
    value: '150+',
    label: t('stats.clients')
  },
  {
    value: '15',
    label: t('stats.years')
  },
  {
    value: '6',
    label: t('stats.breeds')
  },
  {
    value: '100%',
    label: t('stats.guarantee')
  }];

  return (
    <section className="py-12 bg-golden-brown text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="flex flex-col items-center">
            
              <span className="text-4xl md:text-5xl font-playfair font-bold mb-2">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-cream/90 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
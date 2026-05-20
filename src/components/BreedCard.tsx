import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
interface BreedCardProps {
  id: string;
  image: string;
  delay?: number;
}
export function BreedCard({ id, image, delay = 0 }: BreedCardProps) {
  const { t } = useT();
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="flex flex-col items-center group">
      
      {/* Image Container */}
      <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-[-60px] relative z-0 shadow-xl">
        <motion.img
          whileHover={{
            scale: 1.08
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
          src={image}
          alt={t(`breed.${id}.name`)}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to a generic puppy image if the breed photo fails
            ;(e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80';
          }} />
        
        <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/20 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Info Card */}
      <div className="bg-white rounded-2xl px-7 py-7 w-[88%] relative z-10 shadow-xl border border-beige text-center flex flex-col items-center">
        <div className="w-10 h-0.5 bg-golden-brown mb-4 rounded-full"></div>
        <h3 className="font-playfair text-2xl font-bold text-dark-brown mb-3">
          {t(`breed.${id}.name`)}
        </h3>
        <p className="text-dark-brown/70 text-sm mb-6 leading-relaxed">
          {t(`breed.${id}.desc`)}
        </p>
        <Link
          to="/cuccioli-disponibili"
          className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-dark-brown text-cream rounded-full text-sm font-medium hover:bg-golden-brown transition-all">
          
          <span>{t('breeds.discover')}</span>
          <ArrowRight
            size={14}
            className="group-hover/btn:translate-x-1 transition-transform" />
          
        </Link>
      </div>
    </motion.div>);

}
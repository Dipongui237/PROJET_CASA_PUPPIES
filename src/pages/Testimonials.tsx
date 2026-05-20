import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
export function Testimonials() {
  const { t } = useT();
  const testimonials = [
  {
    id: 1,
    name: 'Giulia B.',
    breed: 'Pomerania',
    text: 'Il nostro piccolo Leo ha portato tanta gioia. Allevamento serissimo e sempre disponibile per consigli.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marco T.',
    breed: 'Bulldog Francese',
    text: 'Cucciolo sanissimo e dal carattere stupendo. Si vede che sono cresciuti in famiglia con amore.',
    rating: 5
  },
  {
    id: 3,
    name: 'Elena R.',
    breed: 'Barboncino Nano',
    text: "Esperienza fantastica. Ci hanno seguito passo passo dalla scelta fino all'arrivo a casa.",
    rating: 5
  },
  {
    id: 4,
    name: 'Sofia M.',
    breed: 'Maltipoo',
    text: "La nostra Bella è perfetta. Grazie a Casa Puppy per la professionalità e l'affetto che mettete nel vostro lavoro.",
    rating: 5
  },
  {
    id: 5,
    name: 'Luca D.',
    breed: 'Chihuahua',
    text: 'Piccolo ma con un cuore gigante. Allevamento pulitissimo e cani tenuti in modo impeccabile.',
    rating: 5
  },
  {
    id: 6,
    name: 'Anna P.',
    breed: 'Bassotto',
    text: 'Consiglio vivamente! Il nostro cucciolo era già abituato alla traversina e super socievole.',
    rating: 5
  }];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-playfair font-bold text-dark-brown mb-4">
          {t('testi.title')}
        </h1>
        <div className="w-24 h-1 bg-golden-brown mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testi, idx) =>
        <motion.div
          key={testi.id}
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1
          }}
          className="bg-white p-8 rounded-3xl shadow-sm border border-beige relative">
          
            <div className="flex space-x-1 mb-4 text-warm-tan">
              {[...Array(testi.rating)].map((_, i) =>
            <Star key={i} size={18} fill="currentColor" />
            )}
            </div>
            <p className="text-dark-brown/80 mb-6 italic">"{testi.text}"</p>
            <div className="mt-auto">
              <p className="font-bold text-dark-brown">{testi.name}</p>
              <p className="text-sm text-golden-brown">{testi.breed}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>);

}
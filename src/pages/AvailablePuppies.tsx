import React, { useState, Component } from 'react';
import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
export function AvailablePuppies() {
  const { t } = useT();
  const [filter, setFilter] = useState('all');
  const breeds = ['pom', 'chi', 'poo', 'fre', 'mal', 'dac'];
  // Mock data
  const puppies = [
  {
    id: 1,
    name: 'Luna',
    breedId: 'pom',
    age: '3 mesi',
    gender: 'F',
    price: '€1.200',
    image:
    'https://images.pexels.com/photos/1750140/pexels-photo-1750140.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Leo',
    breedId: 'fre',
    age: '2.5 mesi',
    gender: 'M',
    price: '€1.500',
    image:
    'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Mia',
    breedId: 'poo',
    age: '3 mesi',
    gender: 'F',
    price: '€1.300',
    image:
    'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Oliver',
    breedId: 'chi',
    age: '4 mesi',
    gender: 'M',
    price: '€1.100',
    image:
    'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    name: 'Bella',
    breedId: 'mal',
    age: '2 mesi',
    gender: 'F',
    price: '€1.400',
    image:
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 6,
    name: 'Max',
    breedId: 'dac',
    age: '3.5 mesi',
    gender: 'M',
    price: '€1.250',
    image:
    'https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=600'
  }];

  const filteredPuppies =
  filter === 'all' ? puppies : puppies.filter((p) => p.breedId === filter);
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold text-dark-brown mb-4">
          {t('puppies.title')}
        </h1>
        <div className="w-24 h-1 bg-golden-brown mx-auto rounded-full mb-8"></div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-golden-brown text-white' : 'bg-white text-dark-brown border border-beige hover:bg-beige'}`}>
            
            {t('puppies.filter.all')}
          </button>
          {breeds.map((b) =>
          <button
            key={b}
            onClick={() => setFilter(b)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === b ? 'bg-golden-brown text-white' : 'bg-white text-dark-brown border border-beige hover:bg-beige'}`}>
            
              {t(`breed.${b}.name`)}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPuppies.map((puppy, idx) =>
        <motion.div
          key={puppy.id}
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.4,
            delay: idx * 0.1
          }}
          className="bg-white rounded-2xl overflow-hidden shadow-md border border-beige group">
          
            <div className="aspect-[4/3] overflow-hidden">
              <img
              src={puppy.image}
              alt={puppy.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-dark-brown">
                    {puppy.name}
                  </h3>
                  <p className="text-golden-brown font-medium">
                    {t(`breed.${puppy.breedId}.name`)}
                  </p>
                </div>
                <span className="bg-beige text-dark-brown px-3 py-1 rounded-full text-sm font-semibold">
                  {puppy.price}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-dark-brown/70">
                <div>
                  <span className="block text-xs uppercase tracking-wider opacity-70">
                    {t('puppies.age')}
                  </span>
                  <span className="font-medium">{puppy.age}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider opacity-70">
                    {t('puppies.gender')}
                  </span>
                  <span className="font-medium">
                    {puppy.gender === 'M' ? 'Maschio' : 'Femmina'}
                  </span>
                </div>
              </div>

              <a
              href={`https://wa.me/393331234567?text=${encodeURIComponent(`Ciao! Vorrei informazioni su ${puppy.name} (${t(`breed.${puppy.breedId}.name`)})`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-whatsapp text-white py-3 rounded-xl font-medium hover:bg-[#20bd5a] transition-colors">
              
                <WhatsAppIcon size={20} />
                <span>{t('puppies.ask')}</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>);

}
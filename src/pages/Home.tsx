import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Users, Star } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { StatsSection } from '../components/StatsSection';
import { BreedCard } from '../components/BreedCard';
export function Home() {
  const { t } = useT();
  const breeds = [
  {
    id: 'pom',
    image:
    'https://images.unsplash.com/photo-1583511655802-41a73f5d05a1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chi',
    image:
    'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'poo',
    image:
    'https://images.unsplash.com/photo-1616190264687-b7ebf8d0e75a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fre',
    image:
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mal',
    image:
    'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dac',
    image:
    'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&w=800&q=80'
  }];

  const features = [
  {
    icon: ShieldCheck,
    title: 'feat.health.title',
    desc: 'feat.health.desc'
  },
  {
    icon: Heart,
    title: 'feat.ethic.title',
    desc: 'feat.ethic.desc'
  },
  {
    icon: Users,
    title: 'feat.support.title',
    desc: 'feat.support.desc'
  }];

  const testimonialPreview = [
  {
    name: 'Giulia B.',
    breed: 'Pomerania',
    text: 'Il nostro piccolo Leo ha portato tanta gioia. Allevamento serissimo e sempre disponibile per consigli.'
  },
  {
    name: 'Marco T.',
    breed: 'Bulldog Francese',
    text: 'Cucciolo sanissimo e dal carattere stupendo. Si vede che sono cresciuti in famiglia con amore.'
  }];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-cream overflow-hidden py-20 md:py-32">
        {/* Decorative paw pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath fill='%234A2C1A' d='M30 20c-2 0-3.5 1.5-3.5 3.5S28 27 30 27s3.5-1.5 3.5-3.5S32 20 30 20zm-8 4c-1.5 0-2.5 1-2.5 2.5S20.5 29 22 29s2.5-1 2.5-2.5S23.5 24 22 24zm16 0c-1.5 0-2.5 1-2.5 2.5S36.5 29 38 29s2.5-1 2.5-2.5S39.5 24 38 24zm-13 6c-2 1.5-3 4-2 6 1 1.5 3 2 5 2s4-.5 5-2c1-2 0-4.5-2-6-1-.5-2-.5-3-.5s-2 0-3 .5z'/%3E%3C/svg%3E")`
          }}>
        </div>

        {/* Soft radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-warm-tan/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                duration: 0.8
              }}
              className="max-w-xl">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 mb-6">
                <span className="h-px w-8 bg-golden-brown"></span>
                <span className="text-xs uppercase tracking-[0.3em] text-golden-brown font-medium">
                  Allevamento Italiano
                </span>
              </div>

              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-dark-brown leading-[1.05] mb-8 tracking-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-dark-brown/70 mb-10 leading-relaxed max-w-lg">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/393331234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-8 py-3.5 text-base font-medium rounded-full text-white bg-golden-brown hover:bg-dark-brown transition-all shadow-md hover:shadow-xl">
                  
                  <WhatsAppIcon size={18} />
                  {t('hero.cta.primary')}
                </a>
                <Link
                  to="/cuccioli-disponibili"
                  className="inline-flex justify-center items-center px-8 py-3.5 text-base font-medium rounded-full text-dark-brown border-2 border-dark-brown/20 hover:border-dark-brown hover:bg-dark-brown hover:text-cream transition-all">
                  
                  {t('hero.cta.secondary')}
                </Link>
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
                duration: 0.8,
                delay: 0.2
              }}
              className="hidden md:block relative">
              
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80"
                  alt="Happy puppy"
                  className="w-full h-full object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/30 via-transparent to-transparent"></div>
              </div>
              {/* Floating badge */}
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
                  delay: 0.8
                }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-beige max-w-[220px]">
                
                <div className="flex items-center space-x-1 mb-2 text-warm-tan">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} size={14} fill="currentColor" />
                  )}
                </div>
                <p className="text-sm text-dark-brown font-medium leading-snug">
                  "Cuccioli sani e felici, allevati con vero amore."
                </p>
              </motion.div>
              {/* Decorative blob */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-warm-tan/30 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Breeds Section */}
      <section className="py-24 bg-beige relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-px w-8 bg-golden-brown"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-golden-brown font-medium">
                Le Nostre Razze
              </span>
              <span className="h-px w-8 bg-golden-brown"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-4">
              {t('breeds.title')}
            </h2>
            <p className="text-dark-brown/70 leading-relaxed">
              Sei razze selezionate, allevate con dedizione e cresciute in
              famiglia per offrirti un compagno equilibrato e felice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {breeds.map((breed, index) =>
            <BreedCard
              key={breed.id}
              id={breed.id}
              image={breed.image}
              delay={index * 0.1} />

            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-px w-8 bg-golden-brown"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-golden-brown font-medium">
                Perché Sceglierci
              </span>
              <span className="h-px w-8 bg-golden-brown"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown">
              I nostri valori
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) =>
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: idx * 0.15,
                duration: 0.6
              }}
              className="group flex flex-col items-center text-center p-10 rounded-3xl bg-white shadow-sm hover:shadow-xl border border-beige transition-all duration-500 hover:-translate-y-1">
              
                <div className="w-20 h-20 bg-gradient-to-br from-warm-tan/20 to-golden-brown/20 rounded-2xl flex items-center justify-center text-golden-brown mb-8 group-hover:scale-110 transition-transform duration-500">
                  <feat.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-dark-brown mb-4">
                  {t(feat.title)}
                </h3>
                <p className="text-dark-brown/70 leading-relaxed">
                  {t(feat.desc)}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-24 bg-beige">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-px w-8 bg-golden-brown"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-golden-brown font-medium">
                {t('nav.testimonials')}
              </span>
              <span className="h-px w-8 bg-golden-brown"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown">
              Famiglie felici
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialPreview.map((testi, idx) =>
            <motion.div
              key={idx}
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
                delay: idx * 0.2
              }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-white/50 relative">
              
                <div className="absolute -top-5 left-10 w-10 h-10 bg-golden-brown rounded-full flex items-center justify-center text-white text-2xl font-playfair">
                  "
                </div>
                <div className="flex space-x-1 mb-4 text-warm-tan">
                  {[...Array(5)].map((_, i) =>
                <Star key={i} size={16} fill="currentColor" />
                )}
                </div>
                <p className="text-dark-brown/80 mb-6 italic leading-relaxed">
                  {testi.text}
                </p>
                <div>
                  <p className="font-bold text-dark-brown">{testi.name}</p>
                  <p className="text-sm text-golden-brown">{testi.breed}</p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonianze"
              className="inline-flex items-center text-golden-brown font-medium hover:text-dark-brown transition-colors group">
              
              <span>Vedi tutte le testimonianze</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-dark-brown relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath fill='%23FAF5EC' d='M30 20c-2 0-3.5 1.5-3.5 3.5S28 27 30 27s3.5-1.5 3.5-3.5S32 20 30 20zm-8 4c-1.5 0-2.5 1-2.5 2.5S20.5 29 22 29s2.5-1 2.5-2.5S23.5 24 22 24zm16 0c-1.5 0-2.5 1-2.5 2.5S36.5 29 38 29s2.5-1 2.5-2.5S39.5 24 38 24zm-13 6c-2 1.5-3 4-2 6 1 1.5 3 2 5 2s4-.5 5-2c1-2 0-4.5-2-6-1-.5-2-.5-3-.5s-2 0-3 .5z'/%3E%3C/svg%3E")`
          }}>
        </div>
        <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="h-px w-8 bg-warm-tan"></span>
            <span className="text-xs uppercase tracking-[0.3em] text-warm-tan font-medium">
              Inizia il viaggio
            </span>
            <span className="h-px w-8 bg-warm-tan"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-cream mb-8 leading-tight">
            {t('cta.final.title')}
          </h2>
          <p className="text-cream/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Contattaci direttamente su WhatsApp per scoprire i cuccioli
            disponibili e iniziare un viaggio pieno d'amore.
          </p>
          <a
            href="https://wa.me/393331234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-3 px-10 py-4 text-lg font-medium rounded-full shadow-xl text-dark-brown bg-warm-tan hover:bg-cream transition-all hover:scale-105">
            
            <WhatsAppIcon size={22} />
            {t('hero.cta.primary')}
          </a>
        </div>
      </section>
    </div>);

}
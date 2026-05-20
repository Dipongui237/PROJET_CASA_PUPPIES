import React, { useState, createContext, useContext } from 'react';
type Language = 'it' | 'fr' | 'en';
interface Translations {
  [key: string]: {
    it: string;
    fr: string;
    en: string;
  };
}
const translations: Translations = {
  // Nav
  'nav.home': {
    it: 'Home',
    fr: 'Accueil',
    en: 'Home'
  },
  'nav.puppies': {
    it: 'Cuccioli Disponibili',
    fr: 'Chiots Disponibles',
    en: 'Available Puppies'
  },
  'nav.about': {
    it: 'Chi Siamo',
    fr: 'Qui Sommes Nous',
    en: 'About Us'
  },
  'nav.health': {
    it: 'Garanzia Salute',
    fr: 'Garantie de Santé',
    en: 'Health Guarantee'
  },
  'nav.testimonials': {
    it: 'Testimonianze',
    fr: 'Témoignages',
    en: 'Testimonials'
  },
  'nav.contact': {
    it: 'Contatti',
    fr: 'Contact',
    en: 'Contact'
  },
  // Hero
  'hero.title': {
    it: 'Il tuo compagno ideale ti aspetta',
    fr: 'Votre compagnon idéal vous attend',
    en: 'Your ideal companion awaits'
  },
  'hero.subtitle': {
    it: 'Allevamento amatoriale di cuccioli sani e felici. Cresciuti con amore, pronti per la tua famiglia.',
    fr: 'Élevage amateur de chiots sains et heureux. Élevés avec amour, prêts pour votre famille.',
    en: 'Amateur breeding of healthy and happy puppies. Raised with love, ready for your family.'
  },
  'hero.cta.primary': {
    it: 'Contattaci su WhatsApp',
    fr: 'Contactez-nous sur WhatsApp',
    en: 'Contact us on WhatsApp'
  },
  'hero.cta.secondary': {
    it: 'Vedi i Cuccioli',
    fr: 'Voir les Chiots',
    en: 'See Puppies'
  },
  // Stats
  'stats.clients': {
    it: 'Clienti soddisfatti',
    fr: 'Clients satisfaits',
    en: 'Satisfied clients'
  },
  'stats.years': {
    it: 'Anni di esperienza',
    fr: "Années d'expérience",
    en: 'Years of experience'
  },
  'stats.breeds': {
    it: 'Razze disponibili',
    fr: 'Races disponibles',
    en: 'Available breeds'
  },
  'stats.guarantee': {
    it: 'Cuccioli garantiti',
    fr: 'Chiots garantis',
    en: 'Guaranteed puppies'
  },
  // Breeds Section
  'breeds.title': {
    it: 'Le Nostre Razze',
    fr: 'Nos Races',
    en: 'Our Breeds'
  },
  'breeds.discover': {
    it: 'Scopri di più',
    fr: 'En savoir plus',
    en: 'Discover more'
  },
  // Breed Descriptions
  'breed.pom.name': {
    it: 'Pomerania',
    fr: 'Spitz Nain',
    en: 'Pomeranian'
  },
  'breed.pom.desc': {
    it: 'Vivaci, intelligenti e affettuosi. Perfetti per la vita in appartamento.',
    fr: 'Vifs, intelligents et affectueux. Parfaits pour la vie en appartement.',
    en: 'Lively, intelligent, and affectionate. Perfect for apartment living.'
  },
  'breed.chi.name': {
    it: 'Chihuahua',
    fr: 'Chihuahua',
    en: 'Chihuahua'
  },
  'breed.chi.desc': {
    it: 'Piccoli ma coraggiosi, leali e pieni di energia. Ottimi compagni di vita.',
    fr: "Petits mais courageux, loyaux et pleins d'énergie. Excellents compagnons.",
    en: 'Small but brave, loyal, and energetic. Excellent life companions.'
  },
  'breed.poo.name': {
    it: 'Barboncino Nano',
    fr: 'Caniche Nain',
    en: 'Mini Poodle'
  },
  'breed.poo.desc': {
    it: 'Eleganti, ipoallergenici e facilissimi da addestrare. Molto socievoli.',
    fr: 'Élégants, hypoallergéniques et faciles à dresser. Très sociables.',
    en: 'Elegant, hypoallergenic, and easy to train. Very sociable.'
  },
  'breed.fre.name': {
    it: 'Bulldog Francese',
    fr: 'Bouledogue Français',
    en: 'French Bulldog'
  },
  'breed.fre.desc': {
    it: 'Giocosi, adattabili e tranquilli. Ideali per famiglie e bambini.',
    fr: 'Joueurs, adaptables et calmes. Idéaux pour les familles et les enfants.',
    en: 'Playful, adaptable, and calm. Ideal for families and children.'
  },
  'breed.mal.name': {
    it: 'Maltipoo',
    fr: 'Maltipoo',
    en: 'Maltipoo'
  },
  'breed.mal.desc': {
    it: 'Dolci, affettuosi e dal pelo morbido. Un incrocio perfetto e amorevole.',
    fr: 'Doux, affectueux et au pelage doux. Un croisement parfait et aimant.',
    en: 'Sweet, affectionate, and soft-coated. A perfect and loving crossbreed.'
  },
  'breed.dac.name': {
    it: 'Bassotto',
    fr: 'Teckel',
    en: 'Dachshund'
  },
  'breed.dac.desc': {
    it: 'Curiosi, vivaci e devoti. Un grande carattere in un piccolo corpo.',
    fr: 'Curieux, vifs et dévoués. Un grand caractère dans un petit corps.',
    en: 'Curious, lively, and devoted. A big character in a small body.'
  },
  // Footer
  'footer.tagline': {
    it: 'Il tuo compagno ideale ti aspetta.',
    fr: 'Votre compagnon idéal vous attend.',
    en: 'Your ideal companion awaits.'
  },
  'footer.links': {
    it: 'Link Rapidi',
    fr: 'Liens Rapides',
    en: 'Quick Links'
  },
  'footer.contact': {
    it: 'Contatti',
    fr: 'Contact',
    en: 'Contact'
  },
  'footer.hours': {
    it: 'Orari di apertura',
    fr: "Heures d'ouverture",
    en: 'Opening Hours'
  },
  'footer.hours.week': {
    it: 'Lun-Ven: 9:00 - 18:00',
    fr: 'Lun-Ven: 9:00 - 18:00',
    en: 'Mon-Fri: 9:00 - 18:00'
  },
  'footer.hours.sat': {
    it: 'Sab: 10:00 - 16:00',
    fr: 'Sam: 10:00 - 16:00',
    en: 'Sat: 10:00 - 16:00'
  },
  'footer.hours.sun': {
    it: 'Dom: Chiuso',
    fr: 'Dim: Fermé',
    en: 'Sun: Closed'
  },
  'footer.rights': {
    it: 'Tutti i diritti riservati.',
    fr: 'Tous droits réservés.',
    en: 'All rights reserved.'
  },
  'footer.privacy': {
    it: 'Privacy',
    fr: 'Confidentialité',
    en: 'Privacy'
  },
  'footer.cookie': {
    it: 'Cookie',
    fr: 'Cookies',
    en: 'Cookies'
  },
  'footer.terms': {
    it: 'Termini',
    fr: 'Conditions',
    en: 'Terms'
  },
  // Features
  'feat.health.title': {
    it: 'Salute Garantita',
    fr: 'Santé Garantie',
    en: 'Guaranteed Health'
  },
  'feat.health.desc': {
    it: 'Tutti i cuccioli sono vaccinati e sverminati.',
    fr: 'Tous les chiots sont vaccinés et vermifugés.',
    en: 'All puppies are vaccinated and dewormed.'
  },
  'feat.ethic.title': {
    it: 'Allevamento Etico',
    fr: 'Élevage Éthique',
    en: 'Ethical Breeding'
  },
  'feat.ethic.desc': {
    it: 'Cresciuti in ambiente familiare con amore.',
    fr: 'Élevés dans un environnement familial avec amour.',
    en: 'Raised in a family environment with love.'
  },
  'feat.support.title': {
    it: 'Supporto a Vita',
    fr: 'Support à Vie',
    en: 'Lifetime Support'
  },
  'feat.support.desc': {
    it: 'Siamo sempre qui per consigli e aiuto.',
    fr: "Nous sommes toujours là pour des conseils et de l'aide.",
    en: 'We are always here for advice and help.'
  },
  // Final CTA
  'cta.final.title': {
    it: 'Trova il tuo cucciolo oggi',
    fr: "Trouvez votre chiot aujourd'hui",
    en: 'Find your puppy today'
  },
  // Puppies Page
  'puppies.title': {
    it: 'Cuccioli Disponibili',
    fr: 'Chiots Disponibles',
    en: 'Available Puppies'
  },
  'puppies.filter.all': {
    it: 'Tutte le razze',
    fr: 'Toutes les races',
    en: 'All breeds'
  },
  'puppies.age': {
    it: 'Età',
    fr: 'Âge',
    en: 'Age'
  },
  'puppies.gender': {
    it: 'Sesso',
    fr: 'Sexe',
    en: 'Gender'
  },
  'puppies.price': {
    it: 'Prezzo',
    fr: 'Prix',
    en: 'Price'
  },
  'puppies.ask': {
    it: 'Richiedi info',
    fr: 'Demander des infos',
    en: 'Request info'
  },
  // About Page
  'about.title': {
    it: 'La Nostra Storia',
    fr: 'Notre Histoire',
    en: 'Our Story'
  },
  'about.p1': {
    it: "Casa Puppy nasce dalla passione per i cani e dal desiderio di portare gioia nelle famiglie. Da oltre 15 anni ci dedichiamo all'allevamento etico e responsabile.",
    fr: "Casa Puppy est née de la passion pour les chiens et du désir d'apporter de la joie aux familles. Depuis plus de 15 ans, nous nous consacrons à l'élevage éthique et responsable.",
    en: 'Casa Puppy was born from a passion for dogs and a desire to bring joy to families. For over 15 years we have been dedicated to ethical and responsible breeding.'
  },
  'about.p2': {
    it: 'I nostri cuccioli crescono in un ambiente familiare, circondati da affetto e attenzioni, per garantire un carattere socievole ed equilibrato.',
    fr: "Nos chiots grandissent dans un environnement familial, entourés d'affection et d'attention, pour garantir un caractère sociable et équilibré.",
    en: 'Our puppies grow up in a family environment, surrounded by affection and attention, to ensure a sociable and balanced character.'
  },
  // Health Page
  'health.title': {
    it: 'La Nostra Garanzia di Salute',
    fr: 'Notre Garantie de Santé',
    en: 'Our Health Guarantee'
  },
  'health.subtitle': {
    it: 'La salute dei nostri cuccioli è la nostra priorità assoluta.',
    fr: 'La santé de nos chiots est notre priorité absolue.',
    en: 'The health of our puppies is our absolute priority.'
  },
  'health.i1': {
    it: "Vaccinazioni complete per l'età",
    fr: "Vaccinations complètes pour l'âge",
    en: 'Complete vaccinations for age'
  },
  'health.i2': {
    it: 'Visita veterinaria certificata',
    fr: 'Visite vétérinaire certifiée',
    en: 'Certified veterinary check'
  },
  'health.i3': {
    it: 'Microchip inserito e registrato',
    fr: 'Micro-puce insérée et enregistrée',
    en: 'Microchip inserted and registered'
  },
  'health.i4': {
    it: 'Contratto di vendita trasparente',
    fr: 'Contrat de vente transparent',
    en: 'Transparent sales contract'
  },
  'health.i5': {
    it: 'Garanzia di salute di 1 anno per malattie genetiche',
    fr: "Garantie de santé d'un an pour les maladies génétiques",
    en: '1-year health guarantee for genetic diseases'
  },
  // Testimonials Page
  'testi.title': {
    it: 'Cosa Dicono di Noi',
    fr: "Ce Qu'ils Disent de Nous",
    en: 'What They Say About Us'
  },
  // Contact Page
  'contact.title': {
    it: 'Contattaci',
    fr: 'Contactez-nous',
    en: 'Contact Us'
  },
  'contact.info': {
    it: 'Informazioni di Contatto',
    fr: 'Informations de Contact',
    en: 'Contact Information'
  },
  'contact.form.title': {
    it: 'Inviaci un Messaggio',
    fr: 'Envoyez-nous un Message',
    en: 'Send Us a Message'
  },
  'contact.form.name': {
    it: 'Nome',
    fr: 'Nom',
    en: 'Name'
  },
  'contact.form.email': {
    it: 'Email',
    fr: 'Email',
    en: 'Email'
  },
  'contact.form.phone': {
    it: 'Telefono',
    fr: 'Téléphone',
    en: 'Phone'
  },
  'contact.form.breed': {
    it: 'Razza di interesse',
    fr: "Race d'intérêt",
    en: 'Breed of interest'
  },
  'contact.form.msg': {
    it: 'Messaggio',
    fr: 'Message',
    en: 'Message'
  },
  'contact.form.submit': {
    it: 'Invia Messaggio',
    fr: 'Envoyer le Message',
    en: 'Send Message'
  },
  'contact.form.success': {
    it: 'Messaggio inviato con successo!',
    fr: 'Message envoyé avec succès!',
    en: 'Message sent successfully!'
  }
};
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
export const LanguageProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('it');
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t
      }}>
      
      {children}
    </LanguageContext.Provider>);

};
export const useT = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useT must be used within a LanguageProvider');
  }
  return context;
};
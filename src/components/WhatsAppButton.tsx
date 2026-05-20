import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
export function WhatsAppButton() {
  const message = encodeURIComponent(
    'Ciao Casa Puppy! Vorrei avere informazioni sui vostri cuccioli disponibili.'
  );
  const whatsappUrl = `https://wa.me/393331234567?text=${message}`;
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{
        delay: 0.5,
        type: 'spring',
        stiffness: 200
      }}
      whileHover={{
        scale: 1.08
      }}
      whileTap={{
        scale: 0.95
      }}
      className="fixed bottom-6 right-6 z-40 bg-whatsapp text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Contattaci su WhatsApp">
      
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30"></span>
      <span className="absolute inset-0 rounded-full ring-4 ring-whatsapp/20"></span>
      <WhatsAppIcon size={28} className="relative z-10" />
    </motion.a>);

}
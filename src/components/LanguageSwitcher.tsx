import React from 'react';
import { useT } from '../contexts/LanguageContext';
export function LanguageSwitcher() {
  const { language, setLanguage } = useT();
  const langs: ('it' | 'fr' | 'en')[] = ['it', 'fr', 'en'];
  return (
    <div className="flex items-center space-x-1 bg-white/50 rounded-full p-1 border border-golden-brown/20">
      {langs.map((lang) =>
      <button
        key={lang}
        onClick={() => setLanguage(lang)}
        className={`px-2 py-1 text-xs font-medium rounded-full transition-colors uppercase ${language === lang ? 'bg-golden-brown text-white' : 'text-dark-brown hover:bg-beige'}`}>
        
          {lang}
        </button>
      )}
    </div>);

}
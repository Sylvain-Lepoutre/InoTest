// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importez les fichiers de traduction
import translationEN from '/src/locales/en.json';
import translationFR from '/src/locales/fr.json';

// Configurez les langues prises en charge et les traductions
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
  },
  lng: 'en', // Langue par défaut
  fallbackLng: 'en', // Langue de repli
  interpolation: {
    escapeValue: false, // Pas besoin d'échapper les valeurs
  },
});

export default i18n;

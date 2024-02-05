// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../public/locales/en.json';
import esTranslation from '../public/locales/es.json';
import loTranslation from '../public/locales/lo.json';

// Define translation resources interface
interface I18nResources {
  en: { translation: any };
  es: { translation: any };
  lo: { translation: any };
}

// Define i18n instance type
interface I18nInstance {
  use: (initReactI18next: any) => I18nInstance;
  init: (options: {
    resources: I18nResources;
    lng: string;
    keySeparator: boolean;
    interpolation: {
      escapeValue: boolean;
    };
  }) => void;
}

const resources: I18nResources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  lo: {
    translation: loTranslation,
  },
};

const i18nInstance = i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // Set default language
    keySeparator: false, // Allow the use of dots in keys (e.g., "navbar.signin")
    interpolation: {
      escapeValue: false, // React already escapes values, so no need to escape again
    },
  });

export default i18nInstance as unknown as I18nInstance; // Explicitly type the exported object
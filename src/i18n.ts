import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: true, // Activation du mode debug
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

// Log des ressources chargées
i18n.on('languageChanged', (lng) => {
  console.log(`Langue changée: ${lng}`);
  console.log('Ressources chargées:', i18n.getDataByLanguage(lng));
});

export default i18n;

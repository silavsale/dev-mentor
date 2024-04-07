import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationUA from '../locales/ua/translation.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  ua: { translation: translationUA },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources,
    // lng: 'en',
    keySeparator: false,
    interpolation: { escapeValue: false },
  });

export default i18n;

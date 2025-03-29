import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Bind with React
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our application",
          description: "This is a multi-language React app.",
          change_language: "Change Language",
        }
      },
      bn: {
        translation: {
          welcome: "আমাদের অ্যাপ্লিকেশনে স্বাগতম",
          description: "এটি একটি বহু-ভাষার রিঅ্যাক্ট অ্যাপ।",
          change_language: "ভাষা পরিবর্তন করুন",
        }
      }
    },
    lng: localStorage.getItem('language') || 'en', // Default language
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // Not needed for React
    }
  });

export default i18n;

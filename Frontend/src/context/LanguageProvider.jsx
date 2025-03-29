import React, { createContext, useState, useEffect } from 'react';
import i18n from '../i18n'; // Import i18n configuration

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Load initial language from localStorage or default to 'en'
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  // Function to change language
  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Persist language
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

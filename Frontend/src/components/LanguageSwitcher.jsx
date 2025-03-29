import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>🇬🇧 English</button>
      <button onClick={() => changeLanguage('bn')}>🇧🇩 বাংলা</button>
    </div>
  );
};

export default LanguageSwitcher;

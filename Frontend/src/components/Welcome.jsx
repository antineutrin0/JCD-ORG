import React from 'react';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const { t } = useTranslation(); // Hook to get translations

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-3">{t('welcome')}</h1>
      <p className="text-gray-700">{t('description')}</p>
    </div>
  );
};

export default Welcome;

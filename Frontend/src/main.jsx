import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
 import { LanguageProvider } from './context/LanguageProvider';
import Bd_map from './components/Bd_map';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <LanguageProvider>
    <App></App>
  </LanguageProvider>
</React.StrictMode>
);

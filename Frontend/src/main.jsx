import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import { LanguageProvider } from './context/LanguageProvider';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import ActivityPage from './components/Activities/ActivitesPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {/* This will render Home for the root route */}
          <Route index element={<Home />} />
          <Route path='/activity' element={<ActivityPage></ActivityPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);

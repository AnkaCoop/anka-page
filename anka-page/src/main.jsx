import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n";
import english from "./assets/translations/en.json";
import espanol from "./assets/translations/es.json";
import turkce from "./assets/translations/tr.json";


i18next.init({
  interpolation: { escapeValue: false },  
  lng: 'en',                              
  resources: {
      en: {
          common: english               
      },
      es: {
          common: espanol
      },
      tr: {
        common: turkce
    },
  },
});

const theme = createTheme({

});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <MantineProvider theme={theme} defaultColorScheme="light">
    <App />
    </MantineProvider>
    </I18nextProvider>
  </React.StrictMode>,
)


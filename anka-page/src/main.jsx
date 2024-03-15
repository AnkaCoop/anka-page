import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const theme = createTheme({

});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <MantineProvider theme={theme} defaultColorScheme="light">
    <App />
    </MantineProvider>
    </I18nextProvider>
  </React.StrictMode>,
)


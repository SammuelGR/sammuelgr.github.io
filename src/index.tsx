import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import './index.css';
import localeMessages from './locales/pt-BR.json';
import { Home } from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider
      defaultLocale="pt-BR"
      locale="pt-BR"
      messages={localeMessages}
    >
      <Home />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

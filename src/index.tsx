import './index.css';

import React from 'react';

import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';

import localeMessages from './locales/pt-BR.json';
import { Home } from './pages/Home';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1h
      cacheTime: 1000 * 60 * 60 * 24, // 24h
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider defaultLocale="pt-BR" locale="pt-BR" messages={localeMessages}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </IntlProvider>
  </React.StrictMode>,
);
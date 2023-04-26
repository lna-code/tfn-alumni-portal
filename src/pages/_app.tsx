import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Index from '@/components/layouts/Index';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <title>TFN Alumni Portal</title>
        <Index>
          <NextNProgress color="#6AD76C" />
          <Component {...pageProps} />
        </Index>
      </Provider>
    </PersistGate>
  );
}

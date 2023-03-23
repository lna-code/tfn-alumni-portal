import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Index from '@/components/layouts/Index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <title>TFN Alumni Portal</title>
    <Index>
      <Component {...pageProps} />
    </Index>
    </div>
  );
}

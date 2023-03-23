import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Index from '@/components/layouts/Index';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>TFN Alumni Portal</title>
      </Head>
      <Index>
        <Component {...pageProps} />
      </Index>
    </div>
  );
}

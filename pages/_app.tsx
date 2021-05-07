// NextJS
import { AppProps } from 'next/app';

// React
import React, { ReactElement } from 'react';

// Styles
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}


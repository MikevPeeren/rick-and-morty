// NextJS
import { AppProps } from 'next/app';

// React
import React, { ReactElement } from 'react';

// Styles
import '../styles/globals.scss';
import '../styles/tailwind.scss';

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

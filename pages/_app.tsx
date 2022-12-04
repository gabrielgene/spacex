import '@fontsource/inria-sans';
import theme from 'config/chakraTeme';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="SpaceX App" />
        <link rel="icon" href="/favicon.ico" />
        <title>SpaceX App</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

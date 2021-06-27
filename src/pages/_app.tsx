import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, Themed } from 'theme-ui';

import Layout from 'components/layout';
import theme from 'theme';

import { useEffect } from 'react';
import Router from 'next/router';
import 'swiper/swiper-bundle.min.css';
import '../styles/slick.min.css';
import analytics, { init } from 'analytics';
import 'typeface-dm-sans';

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   init({
  //     app: ''
  //   });
  //    logPageView();
  //    Router.events.on('routeChangeComplete', logPageView);
  //  }, []);
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;

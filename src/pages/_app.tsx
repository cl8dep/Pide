import * as React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";

import theme from "~/assets/theme";
import createEmotionCache from "~/utils/createEmotionCache";
import { Layout } from "~/components";
import { NextPage } from "next";

import store from "~/redux";

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {};

type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
  emotionCache: EmotionCache;
};

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;

  const isHomePage = React.useMemo(
    () => router.pathname === "/",
    [router.pathname]
  );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Pide</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout showFooter={isHomePage}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

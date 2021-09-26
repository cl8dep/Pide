import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";

import theme from "~/assets/theme";
import createEmotionCache from "~/utils/createEmotionCache";
import { Footer, Header } from "~/components";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

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
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        {isHomePage && <Footer />}
      </ThemeProvider>
    </CacheProvider>
  );
}

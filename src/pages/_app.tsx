import "@/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>StorybookTestProject</title>
        <link rel="mask-icon" href="/favicons/favicons.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;

import "@/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import store from "@/lib/store";

import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>StorybookTestProject</title>
        <link rel="mask-icon" href="/favicons/favicons.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

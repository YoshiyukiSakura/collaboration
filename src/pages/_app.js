import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Opensquare - voting</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

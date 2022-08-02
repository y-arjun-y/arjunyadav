import Head from "next/head";
import Navbar from "./components/Navbar";

function ArjunYadav({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Arjun Yadav</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default ArjunYadav;

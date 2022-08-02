import Head from "next/head";
import Navbar from "./components/Navbar";

function ArjunYadav({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Arjun Yadav</title>
        <script type="module">
          import renderMathInElement from
          "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.mjs";
          renderMathInElement(document.body);
        </script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default ArjunYadav;

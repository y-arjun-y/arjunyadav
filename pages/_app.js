import Head from "next/head";
import Navbar from "./components/Navbar";

function ArjunYadav({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:locale" content="en" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:url" content="https://arjunyadav.net" />
        <meta property="og:site_name" content="Arjun Yadav" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

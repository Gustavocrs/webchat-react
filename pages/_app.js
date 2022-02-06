function GlobalStyle() {
  return (
    <style global jsx>{`

      .plogin{
        color: #f1f1f1;
        font-size: 16px;
        padding: 0 0 10px 0;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

export default function MyApp({Component, pageProps}){
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps}/>
    </>
  );
}
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class AppDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render = () => (
    <html lang="en" dir="auto">
      <Head>
        <title>React Review</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="A simple flashcard application"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </html>
  );
}

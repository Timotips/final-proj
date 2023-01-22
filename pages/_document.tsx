import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@300;400&family=Inter:wght@300;400&family=Josefin+Sans:wght@300;400&family=Old+Standard+TT&family=Open+Sans:wght@300;400&family=Poppins:wght@300;400&family=Quicksand:wght@300;400&family=Slabo+13px&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

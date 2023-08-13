import { Html, Head, Main, NextScript } from 'next/document'
import {Header} from "@/components/Header";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="bg-gradient-to-r from-red-950 via-red-900 to-red-950">
        <Header/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

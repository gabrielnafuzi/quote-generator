import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import { Header } from '@/components'
import { QuoteProvider } from '@/hooks'
import { GlobalStyles } from '@/styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#f7df94" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>

      <GlobalStyles />

      <NextNprogress
        color="#333"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />

      <QuoteProvider>
        <Header />

        <Component {...pageProps} />
      </QuoteProvider>
    </>
  )
}

export default App

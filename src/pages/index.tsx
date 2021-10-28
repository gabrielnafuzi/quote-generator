import { useEffect } from 'react'
import { GetServerSideProps } from 'next'

import { SingleQuote, useQuote } from '@/hooks'
import { api } from '@/services'
import { Home } from '@/templates'
import { NextSeo } from 'next-seo'

type IndexProps = {
  quote: SingleQuote
}

const Index = ({ quote }: IndexProps) => {
  const { setQuote } = useQuote()

  useEffect(() => {
    setQuote(quote)
  }, [])

  return (
    <>
      <NextSeo
        title={`${quote.quoteAuthor}'s quote - Quote generator`}
        description={`A quote from ${quote.quoteAuthor} from the ${quote.quoteGenre} genre`}
        canonical={`https://gnquotegenerator/`}
        openGraph={{
          title: `${quote.quoteAuthor}'s quote - Quote generator`,
          description: `A quote from ${quote.quoteAuthor} from the ${quote.quoteGenre} genre`,
          url: `https://gnquotegenerator/`,
          images: [{ url: 'https://gnquotegenerator.vercel.app/img/cover.png' }]
        }}
      />

      <Home />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<{ data: SingleQuote[] }>('/random')

  return {
    props: {
      quote: data.data[0]
    }
  }
}

export default Index

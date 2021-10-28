import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'

import { Quote } from '@/components'
import { SingleQuote } from '@/hooks'
import { api } from '@/services'

import * as S from './styles'

type AuthorQuotesProps = {
  quotes: SingleQuote[]
}

const AuthorQuotes = ({ quotes }: AuthorQuotesProps) => (
  <>
    <NextSeo
      title={`${quotes?.[0]?.quoteAuthor}'s quotes - Quote generator`}
      description={`Ten quotes from ${quotes?.[0].quoteAuthor}`}
      canonical={`https://gnquotegenerator/author/${quotes?.[0]?.quoteAuthor}`}
      openGraph={{
        title: `${quotes?.[0]?.quoteAuthor}'s quotes - Quote generator`,
        url: `https://gnquotegenerator/author/${quotes?.[0]?.quoteAuthor}`,
        description: `Ten quotes from ${quotes?.[0].quoteAuthor}`,
        images: [{ url: 'https://gnquotegenerator.vercel.app/img/cover.png' }]
      }}
    />

    <S.Container>
      <S.AuthorNameBlock>
        <h1>{quotes?.[0]?.quoteAuthor}</h1>
      </S.AuthorNameBlock>

      {quotes.map((quote) => (
        <Quote key={quote._id} quote={quote} />
      ))}
    </S.Container>
  </>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.params

  const {
    data: { data }
  } = await api.get<{ data: SingleQuote[] }>(`?author=${name}`)

  if (!data?.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      quotes: data
    }
  }
}

export default AuthorQuotes

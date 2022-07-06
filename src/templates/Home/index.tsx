import Link from 'next/link'

import { MdArrowRightAlt } from 'react-icons/md'

import { Loading, Quote } from '@/components'
import { useQuote } from '@/hooks'

import * as S from './styles'

export const Home = () => {
  const { quote } = useQuote()

  if (!quote) return <Loading />

  return (
    <S.Container>
      <S.QuoteWrapper>
        <Quote quote={quote} />
      </S.QuoteWrapper>

      <Link href={`/author/${quote.quoteAuthor}`} passHref>
        <S.QuoteInfoWrapper>
          <div>
            <S.QuoteAuthor>{quote.quoteAuthor}</S.QuoteAuthor>
            <S.QuoteGenre>{quote.quoteGenre}</S.QuoteGenre>
          </div>

          <MdArrowRightAlt />
        </S.QuoteInfoWrapper>
      </Link>
    </S.Container>
  )
}

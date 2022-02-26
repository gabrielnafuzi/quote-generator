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
      <Quote quote={quote} />

      <Link href={`/author/${quote.quoteAuthor}`} passHref>
        <div className="person-block">
          <div>
            <h1>{quote.quoteAuthor}</h1>
            <span>{quote.quoteGenre}</span>
          </div>

          <MdArrowRightAlt />
        </div>
      </Link>
    </S.Container>
  )
}

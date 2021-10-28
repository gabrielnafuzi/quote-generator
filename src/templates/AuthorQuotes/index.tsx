import { Quote } from '@/components'
import { SingleQuote } from '@/hooks'

import * as S from './styles'

export type AuthorQuotesProps = {
  quotes: SingleQuote[]
}

export const AuthorQuotes = ({ quotes }: AuthorQuotesProps) => (
  <S.Container>
    <S.AuthorNameBlock>
      <h1>{quotes?.[0]?.quoteAuthor}</h1>
    </S.AuthorNameBlock>

    {quotes.map((quote) => (
      <Quote key={quote._id} quote={quote} />
    ))}
  </S.Container>
)

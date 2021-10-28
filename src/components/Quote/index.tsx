import { useState } from 'react'

import Clipboard from 'react-clipboard.js'
import ReactTooltip from 'react-tooltip'

import { SingleQuote } from '@/hooks'

import * as S from './styles'

type QuoteProps = {
  quote: SingleQuote
}

export const Quote = ({ quote }: QuoteProps) => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <S.Container
      data-for={quote._id}
      data-tip
      onClick={() => setIsCopied(true)}
      onMouseLeave={() => setIsCopied(false)}
    >
      <Clipboard
        data-clipboard-text={`“${quote.quoteText}”, ${quote.quoteAuthor}`}
      >
        <blockquote>
          <p>“{quote.quoteText}”</p>
        </blockquote>
      </Clipboard>

      <ReactTooltip
        id={quote._id}
        place="bottom"
        type="dark"
        effect="solid"
        getContent={() => (isCopied ? 'Copied!' : 'Click to copy')}
      />
    </S.Container>
  )
}

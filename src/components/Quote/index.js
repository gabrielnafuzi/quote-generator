import React from 'react'
import Clipboard from 'react-clipboard.js'
import ReactTooltip from 'react-tooltip'

import { Container } from './styles'

const Quote = ({ quote, quoteId, quoteAuthor }) => {
  const [isCopied, setIsCopied] = React.useState(false)

  return (
    <Container
      data-for={quoteId}
      data-tip
      onClick={() => setIsCopied(true)}
      onMouseLeave={() => setIsCopied(false)}
    >
      <Clipboard data-clipboard-text={`“${quote}”, ${quoteAuthor}`}>
        <blockquote>
          <p>“{quote}”</p>
        </blockquote>
      </Clipboard>

      <ReactTooltip
        id={quoteId}
        place="bottom"
        type="dark"
        effect="solid"
        getContent={() => (isCopied ? 'Copied!' : 'Click to copy')}
      />
    </Container>
  )
}

export default Quote

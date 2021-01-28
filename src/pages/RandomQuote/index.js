import React from 'react'
import { Link } from 'react-router-dom'

import Quote from '../../components/Quote'
import { QuoteContext } from '../../QuoteContext'
import Loading from '../../components/Loading'

import { Container, ArrowRightIcon } from './styles'

const RandomQuote = () => {
  const { quoteData } = React.useContext(QuoteContext)

  if (!quoteData) {
    return <Loading />
  }

  return (
    <Container>
      <Quote
        quote={quoteData.quoteText}
        quoteId={quoteData._id}
        quoteAuthor={quoteData.quoteAuthor}
      />

      <Link to={`/author/${quoteData.quoteAuthor}`} className="person-block">
        <div>
          <h1>{quoteData.quoteAuthor}</h1>
          <span>{quoteData.quoteGenre}</span>
        </div>

        <ArrowRightIcon />
      </Link>
    </Container>
  )
}

export default RandomQuote

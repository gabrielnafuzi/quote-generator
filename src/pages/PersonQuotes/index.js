import React from 'react'
import { useParams } from 'react-router-dom'

import Quote from '../../components/Quote'
import Loading from '../../components/Loading'

import { Container, AuthorNameBlock } from './styles'

const PersonQuotes = () => {
  const { name } = useParams()
  const [authorQuotes, setAuthorQuotes] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const response = await fetch(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${name}`
      )

      const json = await response.json()
      setAuthorQuotes(json.data)
    })()
  }, [name])

  if (!authorQuotes.length) {
    return <Loading />
  }

  return (
    <Container>
      <AuthorNameBlock>
        <h1>{name}</h1>
      </AuthorNameBlock>

      {authorQuotes.map(quote => (
        <Quote key={quote._id} quote={quote.quoteText} quoteId={quote._id} />
      ))}
    </Container>
  )
}

export default PersonQuotes

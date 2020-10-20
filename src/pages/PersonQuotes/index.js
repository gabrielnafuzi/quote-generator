import React from 'react';
import { useParams } from 'react-router-dom';

import Quote from '../../components/Quote';
import Loading from '../../components/Loading';

import { Container, AuthorNameBlock } from './styles';

const PersonQuotes = () => {
  const { name } = useParams();
  const [uniqueQuotes, setUniqueQuotes] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://quote-garden.herokuapp.com/api/v2/authors/${name}`
      );

      const json = await response.json();

      setUniqueQuotes(
        Object.values(
          json.quotes.reduce(
            (acc, cur) => Object.assign(acc, { [cur.quoteText]: cur }),
            {}
          )
        )
      );
    })();
  }, [name]);

  if (!uniqueQuotes.length) {
    return <Loading />;
  }

  return (
    <Container>
      <AuthorNameBlock>
        <h1>{name}</h1>
      </AuthorNameBlock>

      {uniqueQuotes.map(quote => (
        <Quote key={quote._id} quote={quote.quoteText} quoteId={quote._id} />
      ))}
    </Container>
  );
};

export default PersonQuotes;

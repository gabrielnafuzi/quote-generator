import React from 'react';
import { useNavigate } from 'react-router-dom';

import { QuoteContext } from '../../QuoteContext';
import { Container, ReloadIcon } from './styles';

const Header = () => {
  const { setQuoteData } = React.useContext(QuoteContext);
  const navigate = useNavigate();

  const handleFetchQuote = React.useCallback(async () => {
    setQuoteData(null);
    navigate('/');

    const response = await fetch(
      'https://quote-garden.herokuapp.com/api/v2/quotes/random'
    );

    const json = await response.json();

    setQuoteData(json.quote);
  }, [navigate, setQuoteData]);

  React.useEffect(() => {
    handleFetchQuote();
  }, [handleFetchQuote]);

  return (
    <Container>
      <p onClick={handleFetchQuote}>
        <span>random</span>
        <ReloadIcon />
      </p>
    </Container>
  );
};

export default Header;

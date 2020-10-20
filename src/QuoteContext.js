import React from 'react';

export const QuoteContext = React.createContext();

export const QuoteStorage = ({ children }) => {
  const [quoteData, setQuoteData] = React.useState(null);

  return (
    <QuoteContext.Provider value={{ quoteData, setQuoteData }}>
      {children}
    </QuoteContext.Provider>
  );
};

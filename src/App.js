import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RandomQuote from './pages/RandomQuote'
import PersonQuotes from './pages/PersonQuotes'
import Header from './components/Header'
import { QuoteStorage } from './QuoteContext'

import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <BrowserRouter>
      <QuoteStorage>
        <Header />
        <Routes>
          <Route path="/" element={<RandomQuote />} />
          <Route path="/author/:name" element={<PersonQuotes />} />
        </Routes>

        <GlobalStyles />
      </QuoteStorage>
    </BrowserRouter>
  )
}

export default App

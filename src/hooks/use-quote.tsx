import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useCallback
} from 'react'

import { api } from '@/services'

export type SingleQuote = {
  _id: string
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
}

export type QuoteProviderProps = {
  children: ReactNode
}

type QuoteContextData = {
  quote: SingleQuote | null
  getRandomQuote: () => Promise<void>
  setQuote: (quote: SingleQuote) => void
}

export const QuoteContext = createContext({} as QuoteContextData)

const QuoteProvider = ({ children }: QuoteProviderProps) => {
  const [quote, setQuote] = useState<SingleQuote | null>(null)

  const getRandomQuote = useCallback(async () => {
    setQuote(null)

    const { data } = await api.get<{ data: SingleQuote[] }>('/random')

    setQuote(data.data[0])
  }, [])

  const handleSetQuote = useCallback((quote: SingleQuote) => {
    setQuote(quote)
  }, [])

  return (
    <QuoteContext.Provider
      value={{ quote, getRandomQuote, setQuote: handleSetQuote }}
    >
      {children}
    </QuoteContext.Provider>
  )
}

const useQuote = () => useContext(QuoteContext)

export { useQuote, QuoteProvider }

import { useCallback } from 'react'

import { useRouter } from 'next/router'

import { MdAutorenew } from 'react-icons/md'

import { useQuote } from '@/hooks'

import * as S from './styles'

export const Header = () => {
  const router = useRouter()
  const { getRandomQuote } = useQuote()

  const handleFetchQuote = useCallback(async () => {
    await getRandomQuote()

    router.push('/')
  }, [getRandomQuote, router])

  return (
    <S.Container>
      <p onClick={handleFetchQuote}>
        <span>random</span>

        <MdAutorenew />
      </p>
    </S.Container>
  )
}

import { useCallback, useEffect } from 'react'

import { useRouter } from 'next/router'

import { MdAutorenew } from 'react-icons/md'
import ReactTooltip from 'react-tooltip'

import { useQuote } from '@/hooks'
import { useKeypress } from '@/hooks'

import * as S from './styles'

export const Header = () => {
  const router = useRouter()
  const { getRandomQuote, quote } = useQuote()

  const [, { onKeydown }] = useKeypress('r', { oncePerClick: true })

  const handleFetchQuote = useCallback(async () => {
    await getRandomQuote()

    if (router.pathname !== '/') {
      router.push('/')
    }
  }, [getRandomQuote, router])

  useEffect(() => {
    onKeydown(handleFetchQuote)
  }, [handleFetchQuote, onKeydown])

  return (
    <S.Header>
      <S.Container data-tip data-for="generate-random-quote">
        <p onClick={handleFetchQuote}>
          <span>random</span>

          <MdAutorenew />
        </p>

        {!!quote && (
          <ReactTooltip
            id="generate-random-quote"
            place="bottom"
            type="dark"
            effect="solid"
            getContent={() => (
              <p>
                or hit <S.Kbd>r</S.Kbd> to get a new quote
              </p>
            )}
          />
        )}
      </S.Container>
    </S.Header>
  )
}

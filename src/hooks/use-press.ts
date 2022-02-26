import { useCallback, useEffect, useRef, useState } from 'react'

type KeyCallback = (event?: KeyboardEvent) => void

type UseKeydownOptions = {
  oncePerClick?: boolean
}

export const useKeypress = (
  targetKey: string,
  { oncePerClick = false }: UseKeydownOptions
) => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false)
  const onKeydownCb = useRef<KeyCallback>()
  const onKeyupCb = useRef<KeyCallback>()

  const handleKeyup = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(false)

        onKeyupCb.current?.(event)
      }
    },
    [targetKey]
  )

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (oncePerClick && keyPressed) return

      if (event.ctrlKey || event.altKey || event.metaKey) return

      if (event.key === targetKey) {
        setKeyPressed(true)

        onKeydownCb.current?.(event)
      }
    },
    [keyPressed, oncePerClick, targetKey]
  )

  const onKeydown = useCallback((cb: KeyCallback) => {
    onKeydownCb.current = cb
  }, [])

  const onKeyup = useCallback((cb: KeyCallback) => {
    onKeyupCb.current = cb
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('keyup', handleKeyup)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [handleKeydown, handleKeyup])

  return [keyPressed, { onKeydown, onKeyup }] as const
}

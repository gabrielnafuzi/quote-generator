import styled, { keyframes } from 'styled-components'

const appear = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  padding: 3.2rem;
  max-width: 74.1rem;

  height: 100%;
  margin: 0 auto;
`

export const QuoteWrapper = styled.div`
  opacity: 0;
  animation: ${appear} 0.6s ease-in-out forwards;
  transform: translateX(120px);
`

export const QuoteAuthor = styled.h1`
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 2.8rem;
  color: #4f4f4f;
  margin-bottom: 0.6rem;
`

export const QuoteGenre = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: #828282;
`

export const QuoteInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 67.2rem;
  margin: 10.9rem auto 0;
  padding: 5rem 2.9rem;
  border-radius: 0.4rem;
  text-decoration: none;
  transition: 0.2s ease;
  cursor: pointer;
  animation: ${appear} 0.6s ease-in-out forwards;
  transform: translateX(-120px);

  svg {
    width: 4.5rem;
    height: 3.2rem;
    fill: #f2f2f2;
  }

  &:hover {
    background: #333333;

    ${QuoteAuthor} {
      color: #f2f2f2;
    }
  }

  @media (max-width: 48rem) {
    margin-top: 6rem;
  }
`

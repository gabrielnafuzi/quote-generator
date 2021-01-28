import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  padding: 3.2rem;

  max-width: 74.1rem;

  height: 100%;
  margin: 2.4rem auto 0;

  opacity: 0;
  animation: appear 0.6s forwards;
  transform: translateX(-40px);

  @keyframes appear {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`

export const AuthorNameBlock = styled.div`
  width: 100%;
  max-width: 71.3rem;

  h1 {
    font-weight: bold;
    font-size: 3.6rem;
    line-height: 4.2rem;

    color: #333;
    margin-left: 9.9rem;
  }

  @media (max-width: 48rem) {
    h1 {
      margin-left: 4rem;
      line-height: 3.4rem;
    }
  }
`

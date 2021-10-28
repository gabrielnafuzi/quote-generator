import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3.2rem;

  max-width: 74.1rem;

  height: 80vh;
  margin: 0 auto;
`

export const Loader = styled.div`
  width: 5rem;
  height: 5rem;
  border-top: 2px solid #333;
  border-right: 2px solid transparent;
  border-radius: 50%;

  animation: loading 0.8s linear infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`

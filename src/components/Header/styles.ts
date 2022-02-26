import styled from 'styled-components'

export const Header = styled.header`
  padding: 3.2rem 3.2rem 0;
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`
export const Container = styled.div`
  > p {
    display: flex;
    align-items: center;
    color: #4f4f4f;
    max-width: max-content;
    cursor: pointer;

    span {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.2rem;
      margin-right: 1.1rem;
    }

    svg {
      width: 1.7rem;
      height: 2.2rem;
    }

    &:hover {
      svg {
        animation: spin 1.3s forwards;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
`

export const Kbd = styled.kbd`
  font-family: monospace;
  font-size: 1.4rem;
  border-width: 1px 1px 10px;
  font-weight: bold;
  padding-inline: 0.4rem;
  background-color: #edf2f7;
  border-color: #e2e8f0;
  color: #2d3748;
  border-radius: 0.375rem;
`

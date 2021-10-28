import styled from 'styled-components'

export const Container = styled.header`
  padding: 3.2rem 3.2rem 0;
  max-width: 96rem;
  margin: 0 auto;

  display: flex;
  justify-content: flex-end;

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

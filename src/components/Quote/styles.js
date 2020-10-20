import styled from 'styled-components';

export const Container = styled.div`
  max-width: 74.1rem;
  margin-top: 12rem;

  blockquote {
    position: relative;

    p {
      font-weight: 500;
      font-size: 3.4rem;
      line-height: 4.3rem;
      text-align: left;

      color: #000;
      max-width: 61.4rem;

      margin-left: 9.9rem;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        width: 0.8rem;
        height: 100%;

        left: 0;
        top: 0;

        background: #f7df94;
      }
    }
  }

  @media (max-width: 48rem) {
    margin-top: 6rem;

    blockquote {
      p {
        font-size: 2.2rem;
        margin-left: 4rem;
        line-height: 2.6rem;
      }
    }
  }
`;

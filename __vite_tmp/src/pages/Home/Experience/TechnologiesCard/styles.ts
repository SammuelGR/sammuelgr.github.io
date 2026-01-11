import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 184px;
  padding: 24px;

  background: #030303;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 8px solid;
  border-bottom-color: ${({ color }) => color};

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 19.2px;
    color: #fff;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
  }

  section div ~ div {
    margin-left: -32px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 56px;
    width: 56px;

    background: #414141;
    border-radius: 36px;
    box-shadow: 1px 0 3px black;
    transition: 0.2s box-shadow;
    transition: 0.3s transform;

    img {
      max-width: 32px;
      max-height: 32px;
    }
  }

  div:hover {
    box-shadow: 0 0 7px white;
    transform: translateY(-8px);
  }

  @media (min-width: 420px) and (max-width: 599px) {
    width: 100%;

    div {
      width: 64px;
      height: 64px;

      img {
        max-width: 40px;
        max-height: 40px;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 1199px) {
    width: 70%;

    div {
      width: 64px;
      height: 64px;

      img {
        max-width: 40px;
        max-height: 40px;
      }
    }
  }

  @media (min-width: 1200px) {
    div {
      width: 72px;
      height: 72px;

      img {
        max-width: 48px;
        max-height: 48px;
      }
    }
  }
`;

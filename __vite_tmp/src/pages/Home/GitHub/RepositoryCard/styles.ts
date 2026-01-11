import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #1f1f1f;
  border-radius: 8px;

  width: 336px;
  min-height: 160px;
  padding: 24px 16px 12px 16px;

  color: #fff;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 21px;
    height: 21px;
  }

  img ~ span {
    font-weight: 700;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }

  @media (min-width: 769px) {
    width: 312px;
    min-height: 160px;
  }

  p {
    font-size: 14px;
  }

  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px #ff6e41;
  }
`;

export const Topics = styled.div`
  display: flex;
  gap: 6px 16px;
  flex-wrap: wrap;

  div > div {
    width: 14px;
    height: 14px;
    background: #ff6e41;
    border-radius: 7px;
    margin-right: 6px;
  }

  small {
    font-size: 11px;
    display: inline;
  }

  @media (min-width: 769px) {
    div > div {
      height: 10px;
      width: 10px;
      border-radius: 5px;
    }

    small {
      font-size: 12px;
    }
  }
`;

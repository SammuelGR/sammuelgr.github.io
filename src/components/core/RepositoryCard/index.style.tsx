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
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  img ~ span {
    font-weight: 700;
  }

  @media (max-width: 1192px) and (min-width: 769px) {
    width: 312px;
    min-height: 148px;

    img ~ span {
      font-size: 15px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 21px;
      height: 21px;
    }

    img ~ span {
      font-size: 15px;
    }

    p {
      font-size: 13px;
    }
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
    font-size: 12px;
    display: inline;
  }

  @media (max-width: 1192px) and (min-width: 769px) {
    div > div {
      height: 10px;
      width: 10px;
      border-radius: 5px;
    }

    small {
      font-size: 11px;
    }
  }

  @media (max-width: 425px) {
    div > div {
      height: 10px;
      width: 10px;
      border-radius: 5px;
    }

    small {
      font-size: 11px;
    }
  }
`;

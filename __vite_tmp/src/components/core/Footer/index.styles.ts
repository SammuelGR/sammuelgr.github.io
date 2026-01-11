import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  width: 100%;

  background: #1f1f1f;
  padding-top: 32px;
  padding-bottom: 8px;

  div {
    display: flex;
    gap: 32px;
  }

  small {
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    color: #fff;

    a {
      color: #ff6e41;
    }
  }

  @media (max-width: 720px) {
    gap: 24px;

    small {
      font-size: 12px;
    }
  }
`;

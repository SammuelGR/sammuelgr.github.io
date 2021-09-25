import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #1f1f1f;
  box-shadow: 0 3px 7px #1f1f1f;

  padding-top: 62px;
  padding-left: 112px;
  height: 100vh;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;

  a {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    line-height: 19.2px;

    &:hover {
      color: #ccc;

      transition: 0.2s color;
    }
  }
`;

export const Underline = styled.div`
  margin-top: 10px;
  width: 221px;
  height: 5px;

  border: 1px solid #ff6e41;
  border-radius: 4px;
  background-color: #ff6e41;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 57.6px;
  padding-bottom: 72px;
`;

export const Ellipse = styled.div`
  width: 79px;
  height: 79px;
  border-radius: 50%;

  position: absolute;
  bottom: -39.5px;
  left: 251px;

  background-color: #ff6e41;
  box-shadow: 0 3px 7px #1f1f1f;
`;

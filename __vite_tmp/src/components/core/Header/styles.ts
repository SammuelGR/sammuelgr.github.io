import styled, { css } from 'styled-components';

import LoboImage from '../../../assets/doming-a-noite.jpg';

interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  showSundayNight: boolean;
}

export const Container = styled.header<HeaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #1f1f1f;
  box-shadow: 0 3px 7px #1f1f1f;

  height: 100vh;
  padding-top: 62px;
  padding-left: 112px;
  padding-bottom: 72px;

  @media (max-width: 720px) {
    padding-left: 64px;
  }

  ${({ showSundayNight }: HeaderProps) =>
    showSundayNight &&
    css`
      background-image: url(${LoboImage});
      background-position: top;
      background-repeat: no-repeat;
      background-size: contain;

      @media (min-width: 1024px) {
        background-position: center;
        background-size: cover;
      }
    `}
`;

const fontSize = 16;

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  a {
    font-size: ${fontSize}px;
    font-weight: 700;
    color: #fff;
    line-height: 19.2px;

    position: relative;

    :after {
      content: '';
      position: absolute;
      top: calc(${fontSize}px + 10px);
      left: 0;

      width: 100%;
      border: 1px solid #ff6e41;
      background-color: #ff6e41;

      visibility: hidden;
    }

    &:hover {
      @media (min-width: 721px) {
        &:after {
          visibility: visible;
        }
      }
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 57.6px;
  max-width: 200px;

  @media (max-width: 720px) {
    font-size: 34px;
    line-height: 40.8px;
  }
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

  @media (max-width: 720px) {
    left: 70vw;
  }
`;

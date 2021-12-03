import styled from 'styled-components';
import ProfileImg from '../assets/profile_img.png';
import LeonImg from '../assets/leon_2_lines.jpg';

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 80px 96px;

  article {
    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 57.6px;

      padding-bottom: 32px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24.96px;
      color: #e5e5e5;
    }

    a {
      font-weight: 600;
      font-size: 16px;
      color: #e5e5e5;
      line-height: 19.2px;

      &:hover {
        color: #e41851;
        text-shadow: 1px 1px 1px #850026;

        transition: 0.2s color;
      }
    }

    + article {
      width: 240px;
      margin-left: 120px;
      margin-right: 64px;
    }

    h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19.2px;
      text-align: center;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 80px 32px;

    article ~ article {
      margin-left: 0;
      margin-right: 0;
    }

    div + h3 {
      margin-top: 16px;
    }
  }
`;

export const Avatar = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;

  box-shadow: 0 3px 7px #1f1f1f;

  background-color: #1f1f1f;
  background-image: url(${ProfileImg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 230px;

  ${AboutContainer}:hover & {
    background-image: url(${LeonImg});
    background-position: center;
  }

  transition: 1s background-image;
  @media (max-width: 720px) {
    width: 160px;
    height: 160px;

    margin-left: 40px;

    background-size: 150px;
  }
`;

export const Polygons = styled.div`
  z-index: -1;
  margin-bottom: -240px;

  position: relative;
  top: -280px;
  left: 50px;

  img {
    position: absolute;
  }

  img ~ img {
    z-index: -2;

    position: relative;
    top: 24px;
  }

  @media (max-width: 720px) {
    margin-bottom: -160px;
    margin-left: 40px;

    top: -180px;
    img {
      width: 154px;
      height: 154px;
    }
  }
`;

export const ExperienceContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 88px 64px;

  background: #1f1f1f;
  box-shadow: 0 3px 7px #1f1f1f;

  @media (max-width: 1076px) {
    flex-direction: column;
    padding: 24px 48px;
    gap: 24px;
  }
`;

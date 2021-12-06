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

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 80px 32px;

    article > h1 {
      font-size: 34px;
    }

    article > p {
      font-size: 14px;
      line-height: 21.84px;
      text-align: justify;
    }

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

  @media (max-width: 1023px) {
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

  @media (max-width: 1023px) {
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

export const GithubContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 40px;
  }
`;

export const ReposContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px;

  padding: 40px 20px 40px 100px;

  @media (max-width: 1440px) and (min-width: 769px) {
    padding: 40px 16px 40px 100px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    justify-content: center;
  }
`;

export const GithubProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-width: 360px;

  img {
    width: 200px;
    height: 200px;
  }

  a {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    color: #fff;

    transition: 0.2s color;
  }

  a:hover {
    color: #ccc;
  }

  p {
    font-size: 18px;
    font-weight: 400;
  }

  p::before {
    content: '';
    background: #ff4e16;

    display: inline-block;
    border-radius: 7px;
    height: 14px;
    width: 14px;

    margin-right: 5px;
  }

  @media (max-width: 1192px) and (min-width: 769px) {
    min-width: 320px;

    img {
      height: 160px;
      width: 160px;
    }

    a {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }

    p::before {
      height: 10px;
      width: 10px;
      border-radius: 5px;
    }
  }

  @media (max-width: 425px) {
    min-width: 302px;
    img {
      height: 140px;
      width: 140px;
    }

    a {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }

    p::before {
      height: 10px;
      width: 10px;
      border-radius: 5px;
    }
  }
`;

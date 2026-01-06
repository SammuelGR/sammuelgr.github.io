import styled from 'styled-components';

import LeonImg from '../../../assets/leon_2_lines.jpg';
import ProfileImg from '../../../assets/profile_img.png';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  padding: 80px 96px;

  article {
    h1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 57.6px;
      padding-bottom: 32px;
    }

    p {
      color: #e5e5e5;
      font-size: 16px;
      font-weight: 400;
      line-height: 24.96px;
    }

    + article {
      margin-left: 120px;
      margin-right: 64px;
      width: 240px;
    }

    h3 {
      font-size: 16px;
      font-weight: 400;
      line-height: 19.2px;
      text-align: center;
    }
  }

  @media (max-width: 1023px) {
    align-items: center;
    flex-direction: column;
    gap: 24px;
    padding: 48px;

    article > h1 {
      font-size: 34px;
    }

    article > p {
      font-size: 13px;
      line-height: 21.84px;
      text-align: left;
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
  background-color: #1f1f1f;
  background-image: url(${ProfileImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 230px;
  border-radius: 50%;
  box-shadow: 0 3px 7px #1f1f1f;
  height: 240px;
  transition: 1s background-image;
  width: 240px;

  ${Container} > article:hover & {
    background-image: url(${LeonImg});
  }

  @media (max-width: 1023px) {
    background-size: 150px;
    height: 160px;
    margin-left: 40px;
    width: 160px;
  }
`;

export const Polygons = styled.div`
  left: 50px;
  margin-bottom: -240px;
  position: relative;
  top: -280px;
  z-index: -1;

  img {
    position: absolute;
  }

  img ~ img {
    position: relative;
    top: 24px;
    z-index: -2;
  }

  @media (max-width: 1023px) {
    margin-bottom: -160px;
    margin-left: 40px;
    top: -180px;

    img {
      height: 154px;
      width: 154px;
    }
  }
`;

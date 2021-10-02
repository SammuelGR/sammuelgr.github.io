import styled from 'styled-components';

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
`;

export const Avatar = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: #1f1f1f;

  img {
    width: 230px;
    height: 230px; // remove these two lines after implementing the real img

    border-radius: 50%;
    overflow: hidden;
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
`;

import styled from 'styled-components';

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

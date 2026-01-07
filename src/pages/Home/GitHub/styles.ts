import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;
  padding-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0;
  }
`;

export const ReposContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px;
  justify-content: center;
  padding: 40px 20px;

  @media (min-width: 768px) {
    padding: 40px 16px 40px 100px;
    justify-content: unset;
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
    width: 160px;
    height: 160px;
  }

  a {
    font-size: 24px;
    font-weight: 700;
    color: #fff;

    transition: 0.2s color;
  }

  a:hover {
    color: #ccc;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  p::before {
    content: '';
    background: #ff4e16;
    border-radius: 5px;
    display: inline-block;
    height: 10px;
    margin-right: 5px;
    width: 10px;
  }

  @media (min-width: 769px) {
    min-width: 320px;

    img {
      height: 200px;
      width: 200px;
    }

    a {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }

    p::before {
      border-radius: 7px;
      height: 14px;
      width: 14px;
    }
  }
`;

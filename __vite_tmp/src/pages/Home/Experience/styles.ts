import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  background: #1f1f1f;
  box-shadow: 0 3px 7px #1f1f1f;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 48px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: none;
    padding: 88px 64px;
  }
`;

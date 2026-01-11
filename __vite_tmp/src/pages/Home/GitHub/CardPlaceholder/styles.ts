import styled, { css, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

const skeletonBg = css`
  background-image: linear-gradient(
    90deg,
    #1f1f1f 0%,
    rgba(255, 255, 255, 0.04) 25%,
    rgba(0, 0, 0, 0.07) 50%,
    rgba(255, 255, 255, 0.04) 75%
  );
  background-repeat: no-repeat;
  background-size: 1000px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
`;

export const StyledCardPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #1f1f1f;
  border-radius: 8px;

  width: 336px;
  min-height: 160px;
  padding: 24px 16px 12px 16px;

  @media (min-width: 769px) {
    width: 312px;
    min-height: 160px;
  }

  ${skeletonBg};
`;

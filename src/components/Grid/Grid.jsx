import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  background: #c6e4f3;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 667px;
  height: fit-content;
`;

export const MEDIASIZE = {
  xs: "320",
  md: "768",
  lg: "1024",
};

export const BREAKPOINT = {
  xs: `@media (min-width: ${MEDIASIZE.xs}px)`,
  md: `@media (min-width: ${MEDIASIZE.md}px)`,
  lg: `@media (min-width: ${MEDIASIZE.lg}px)`,
};


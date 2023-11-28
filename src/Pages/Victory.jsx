// library
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
// action
import { resetStore } from '../store/action/calc';
// components
import { LinkElement } from '../UI/LinkElement';

function Victory() {
  const dispatch = useDispatch();

  useEffect(() => {
    resetStore(dispatch);
  });
  return (
    <StyledVictoryScreen>
      <h1>Victory</h1>
      <LinkElement link='/'>Try again</LinkElement>
    </StyledVictoryScreen>
  );
}

export default Victory;

const StyledVictoryScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

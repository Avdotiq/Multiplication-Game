// library
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
// action
import { resetStore } from '../store/action/calc';
// components
import { MainContainer } from '../components/Grid/Grid';
import { LinkElement } from '../UI/LinkElement';
// hooks
import { useSound } from '../hooks/useSound';
// static
import VICTORY_MP3 from '../assets/sounds/bal_praise5.mp3';
import VICTORY from '../assets/image/win.gif';

function Victory() {
  const dispatch = useDispatch();

  useSound(VICTORY_MP3);

  useEffect(() => {
    resetStore(dispatch);
  }, []);

  return (
    <MainContainer>
      <StyledVictoryScreen>
        <LinkElement link='/'>Play again</LinkElement>
      </StyledVictoryScreen>
    </MainContainer>
  );
}

export default Victory;

const StyledVictoryScreen = styled.div`
  &:after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${VICTORY});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;
  }

  a {
    position: absolute;
    bottom: 20%;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`;

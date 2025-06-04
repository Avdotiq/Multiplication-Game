// library
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
// action
import { resetStore } from '../store/action/calc';
// components
import { LinkElement } from '../UI/LinkElement';
// hooks
import { useSound } from '../hooks/useSound';
// static
import FAILED_IMG from '../assets/image/error1.jpg';
import FAIL_MP3 from '../assets/sounds/bal_screech.mp3';

function Fail() {
  const dispatch = useDispatch();

  useSound(FAIL_MP3, true, 1);

  useEffect(() => {
    resetStore(dispatch);
  }, [])

  return (
    <StyledFailScreen>
      <LinkElement link='/'>Try again</LinkElement>
    </StyledFailScreen>
  );
}

export default Fail;

const StyledFailScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${FAILED_IMG});
  background-size: cover;
  background-position: center;
`;

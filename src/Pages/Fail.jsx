// library
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
// action
import { resetStore } from '../store/action/calc';
// components
import { LinkElement } from '../UI/LinkElement';
// static
import FAILED_IMG from '../image/error1.jpg';
import FAIL_MP3 from '../sounds/bal_screech.mp3';

function Fail() {
  const dispatch = useDispatch();

  useEffect(() => {
    resetStore(dispatch);
  })
  return (
    <StyledFailScreen>
      <audio autoPlay>
        <source src={FAIL_MP3} type='audio/mpeg' />
      </audio>
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

// library
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// action
import { updateProblem } from '../store/action/calc';
// components
import { MainContainer } from '../components/Grid/Grid';
import CalcButton from '../components/CalcButton/CalcButton';
// static
import STRAT_IMG from '../image/start.png';
import START_BG from '../image/confetti.png';
import MAIN_MP3 from '../sounds/main.mp3';
import BALMAIN_MP3 from '../sounds/bal_mainmenu.mp3';

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startGame = (item) => {
    updateProblem(dispatch, item);
    navigate('/game');
  };
  return (
    <MainContainer>
      <StyledGameScreen>
        <img src={STRAT_IMG} alt='' />
        <StyledBoard>
          <StyledTitle>Умножение на:</StyledTitle>
          <CalcButton startGame={startGame} />
        </StyledBoard>
        <audio autoPlay>
          <source src={MAIN_MP3} type='audio/mpeg' />
        </audio>
        <audio autoPlay>
          <source src={BALMAIN_MP3} type='audio/mpeg' />
        </audio>
      </StyledGameScreen>
    </MainContainer>
  );
}

export default Main;

const StyledGameScreen = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${START_BG});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: contain;
`;

const StyledBoard = styled.div`
  flex-grow: 2;
  align-self: center;
`;

const StyledTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #293450;
`;

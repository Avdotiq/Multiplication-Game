// library
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// action
import { updateProblem } from '../store/action/calc';
// components
import { BREAKPOINT, MainContainer } from '../components/Grid/Grid';
import CalcButton from '../components/CalcButton/CalcButton';
// static
import STRAT_IMG from '../image/start.png';
import START_BG from '../image/confetti.png';
import MAIN_MP3 from '../sounds/main.mp3';
import BALMAIN_MP3 from '../sounds/bal_mainmenu.mp3';

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedMode, setSelectedMode] = useState(null);

  const handleStart = (value) => {
    updateProblem(dispatch, value, selectedMode);
    navigate('/game');
  };

  return (
    <MainContainer>
      <StyledGameScreen>
        <StyledBoard>
          <StyledTitle>Choose a mode:</StyledTitle>
          <ModeButtons>
            <ModeButton
              selected={selectedMode === 'multiplication'}
              onClick={() => setSelectedMode('multiplication')}
            >
              x
            </ModeButton>
            <ModeButton
              selected={selectedMode === 'division'}
              onClick={() => setSelectedMode('division')}
            >
              ÷
            </ModeButton>
          </ModeButtons>

          {selectedMode && (
            <>
              <SectionTitle>Choose the number</SectionTitle>
              <CalcButton startGame={handleStart} />
            </>
          )}
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

  &::after {
    content: '';
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 0;
    background-image: url(${STRAT_IMG});
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: contain;

    ${BREAKPOINT.md} {
      height: 100%;
    }
  }
`;

const StyledBoard = styled.div`
  flex-grow: 1;
  align-self: baseline;
  z-index: 1;

  ${BREAKPOINT.md} {
    align-self: center;
  }
`;

const StyledTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #293450;
`;

const SectionTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #3e5170;
  font-size: 20px;
  margin-top: 20px;
`;

const ModeButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

const ModeButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 56px;
  padding: 10px 50px;
  border: 2px solid #3e5170;
  background-color: ${({ selected }) => (selected ? '#3e5170' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : '#3e5170')};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #3e5170;
    color: white;
  }
`;

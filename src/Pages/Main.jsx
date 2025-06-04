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
import STRAT_IMG from '../assets/image/start.png';
import START_BG from '../assets/image/confetti.png';
import MAIN_MP3 from '../assets/sounds/main.mp3';
import BALMAIN_MP3 from '../assets/sounds/bal_mainmenu.mp3';

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedMode, setSelectedMode] = useState(null);

  const handleStart = (value) => {
    updateProblem(dispatch, value, selectedMode);
    navigate('/game');
  };

  const playMainMusic = () => {
    const audio = new Audio(MAIN_MP3);
    const audio2 = new Audio(BALMAIN_MP3);
    audio2.play().catch((e) => {
      console.warn("Failed to play music:", e);
    });
    audio.play().catch((e) => {
      console.warn("Failed to play music:", e);
    });
  };

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    playMainMusic();
  };

  return (
    <MainContainer>
      <StyledGameScreen>
        <StyledBoard>
          <StyledTitle>Choose a mode:</StyledTitle>
          <ModeButtons>
            <ModeButton
              selected={selectedMode === 'multiplication'}
              onClick={() => handleModeSelect('multiplication')}
            >
              x
            </ModeButton>
            <ModeButton
              selected={selectedMode === 'division'}
              onClick={() => handleModeSelect('division')}
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
  padding: 10px 22px;
  border: none;
  background-color: ${({ selected }) => (selected ? '#caf989' : '#fffcb8')};
  color: #293450;
  border-radius: 5px;
  box-shadow: 0px 5px 15px 0px rgba(66, 82, 105, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
`;

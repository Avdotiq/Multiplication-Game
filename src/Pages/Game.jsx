// library
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// action
import { updateProblem, updateCurrentTask } from '../store/action/calc';
// components
import Calc from '../components/Calc/Calc';
import TaskStatus from '../components/TaskStatus/TaskStatus';
import { MainContainer } from '../components/Grid/Grid';
import AudioStart from '../components/TaskStatus/AudioStart';
// helpers
import { compareEqual } from '../helpers/calculation';
// static
import GAME_BG from '../image/play.png';

function Game() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.calc);
  const [currentTask, setCurrentTask] = useState(null);
  const [currentResult, setCurrentResult] = useState(null);
  const [isProblemSolving, setIsProblemSolving] = useState(null);
  const tasks = [0, 1, 2];

  const compareResult = () => {
    let isProblemSolve = compareEqual(data.problem.equal, currentResult);
    setIsProblemSolving(isProblemSolve);
    if (isProblemSolve) {
      updateProblem(dispatch, data.problem.multiplication);
      updateCurrentTask(dispatch);
      setCurrentTask(data.currentTask);
    }
    handleReset();
  };

  const handleReset = () => {
    setCurrentResult(null);
  };

  useEffect(() => {
    if (!isProblemSolving && isProblemSolving !== null) {
      navigate('/fail');
    }
    if (isProblemSolving && currentTask === 2) {
      navigate('/victory');
    }
  });

  return (
    <MainContainer>
      <StyledGame>
        <AudioStart data={data.currentTask} />
        <StyledTaskStatus>
          {tasks.map((task, index) => (
            <TaskStatus
              task={task}
              isProblemSolving={index <= currentTask ? isProblemSolving : null}
              key={index}
            />
          ))}
        </StyledTaskStatus>
        <StyledProblem>
          <input
            readOnly
            value={data.problem.equation ? ` ${data.problem.equation} =` : null}
          />
          <input
            value={currentResult === null ? ' ' : currentResult}
            key={currentResult}
            readOnly
            maxLength='3'
          />
        </StyledProblem>
        <Calc
          onHandleReset={handleReset}
          onHandleSubmit={compareResult}
          onHandleChanges={setCurrentResult}
          currentResult={currentResult}
          problem={data.problem}
        />
      </StyledGame>
    </MainContainer>
  );
}

export default Game;

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 20px;
  padding: 20px;
  margin: auto;
  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    width: 100%;
    max-width: 250px;
    height: 100%;
    max-height: 333px;
    background-image: url(${GAME_BG});
    background-size: contain;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
`;

const StyledProblem = styled.div`
  display: flex;

  input {
    border: none;
    background: none;
    color: #293450;
    font-family: Roboto;
    font-size: 48px;
    font-weight: 700;

    &:first-child {
      max-width: 165px;
    }

    &:last-child {
      max-width: 100px;
    }
  }
`;

const StyledTaskStatus = styled.div`
  width: fit-content;
  display: flex;
  gap: 15px;
  grid-column: span 2;
  padding: 10px 18px;
  border-radius: 10px;
  background: #fffcb8;
  box-shadow: 0px 5px 15px 0px rgba(66, 82, 105, 0.4);

  div {
    width: 34px;
    height: 34px;
    background-color: #c6e4f3;
    border-radius: 50%;

    img {
      display: block;
      margin: auto;
    }
  }
`;

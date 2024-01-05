// library
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// action
import { updateProblem, updateCurrentTask } from '../store/action/calc';
// components
import Calc from '../components/Calc/Calc';
import EquationScreen from '../components/EquationScreen/EquationScreen';
import TaskStatus from '../components/TaskStatus/TaskStatus';
import { Container, MainContainer } from '../components/Grid/Grid';
import AudioStart from '../components/TaskStatus/AudioStart';
// helpers
import { compareEqual } from '../helpers/calculation';
// static
import CALC_IMG from '../image/calc.svg';

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
      <Container>
        <AudioStart data={data.currentTask} />
        <CalcImage src={CALC_IMG} alt='' />
        <Calc
          onHandleReset={handleReset}
          onHandleSubmit={compareResult}
          onHandleChanges={setCurrentResult}
          currentResult={currentResult}
          problem={data.problem}
        />
        <EquationScreen equation={data.problem.equation} />
        <StyledResult>
          <input
            value={currentResult === null ? ' ' : currentResult}
            key={currentResult}
            readOnly
            maxLength='3'
          />
        </StyledResult>
        <StyledTaskStatus>
          {tasks.map((task, index) => (
            <TaskStatus
              task={task}
              isProblemSolving={index <= currentTask ? isProblemSolving : null}
              key={index}
            />
          ))}
        </StyledTaskStatus>
      </Container>
    </MainContainer>
  );
}

export default Game;

const CalcImage = styled.img`
  margin: auto;
  width: 100%;
`;

const StyledResult = styled.div`
  position: absolute;
  bottom: 80px;
  left: 220px;

  input {
    height: 60px;
    border: none;
    font-size: 20px;
    background: none;
  }
`;

const StyledTaskStatus = styled.div`
  position: absolute;
  top: 55px;
  left: 75px;
  display: flex;
  flex-direction: column;
  div:nth-of-type(1) {
    width: 40px;
    height: 30px;
  }

  div:nth-of-type(2) {
    width: 28px;
    height: 28px;
    margin-top: 24px;
  }
  div:nth-of-type(3) {
    width: 27px;
    height: 27px;
    margin-top: 31px;
  }
`;

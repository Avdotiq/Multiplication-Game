// library
import React from 'react';
import styled from 'styled-components';
// helpers
import { generateSequentialNumbers } from '../../helpers/base';


function CalcButton({ startGame }) {
  const calcNumbers = generateSequentialNumbers(1);

  return (
    <StyledCalcButton>
      {calcNumbers.map((item, index) => (
        <StyledButton
          key={index}
          value={item}
          type='button'
          readOnly
          onClick={() => startGame(item)}
        />
      ))}
    </StyledCalcButton>
  );
}

export default CalcButton;

const StyledCalcButton = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 55px);
  grid-template-rows: repeat(4, 55px);
  gap: 15px;
  width: fit-content;
  margin: 0 auto;
`;

const StyledButton = styled.input`
  padding: 10px;
  font-family: Roboto;
  font-size: 25px;
  color: #293450;
  border-radius: 5px;
  background: #fffcb8;
  box-shadow: 0px 5px 15px 0px rgba(66, 82, 105, 0.4);
`;

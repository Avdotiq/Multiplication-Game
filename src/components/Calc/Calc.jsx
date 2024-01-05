// library
import React from 'react';
import styled from 'styled-components';
// helpers
import { generateSequentialNumbers } from '../../helpers/base';

function Calc({
  onHandleChanges,
  onHandleSubmit,
  onHandleReset,
  currentResult,
}) {
  const calcNumbers = generateSequentialNumbers(0);

  const handleChange = (item) => {
    if (currentResult === null) {
      onHandleChanges(item);
    } else {
      let splitResult = String(currentResult).split(' ');
      splitResult.push(item);
      onHandleChanges(splitResult.join('') * 1);
    }
  };

  return (
    <StyledCalc>
      {calcNumbers.map((item, index) => (
        <input
          key={index}
          value={item}
          type='button'
          readOnly
          onClick={() => handleChange(item)}
        />
      ))}
      <input value='C' onClick={() => onHandleReset()} type='button' readOnly />
      <input
        value='OK'
        type='button'
        readOnly
        onClick={() => onHandleSubmit()}
      />
    </StyledCalc>
  );
}

export default Calc;

const StyledCalc = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 48px);
  grid-template-rows: 48px 48px 35px 35px;
  gap: 11px;
  z-index: 1;

  input {
    border-radius: 10px;
    background: #fffcb8;
    box-shadow: 0px 5px 15px 0px rgba(66, 82, 105, 0.4);
    color: #293450;
    font-family: Roboto;
    font-size: 22px;
    font-weight: 700;

    &:nth-child(11) {
      grid-column: span 2;
      grid-row: span 2;
    }
    &:nth-child(12) {
      grid-column: span 3;
      grid-row: span 2;
    }
  }
`;

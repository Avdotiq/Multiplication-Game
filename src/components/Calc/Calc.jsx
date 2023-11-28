// library
import React from 'react';
import styled from 'styled-components';
// helpers
import { setNumbers } from '../../helpers/base';

function Calc({
  onHandleChanges,
  onHandleSubmit,
  onHandleReset,
  currentResult,
}) {
  const calcNumbers = setNumbers();

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
      <input
        value='C'
        onClick={() => onHandleReset()}
        type='button'
        readOnly
      />
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
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: 40px 40px 40px;
  grid-template-rows: 40px 40px 40px 40px;
  gap: 10px;
`;

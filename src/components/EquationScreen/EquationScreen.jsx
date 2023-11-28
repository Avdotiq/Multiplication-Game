// library
import React from 'react';
import styled from 'styled-components';

function EquationScreen(data) {
  const { equation } = data;
  return (
    <StyledEquation>
      <input readOnly value={equation ? equation : null} />
    </StyledEquation>
  );
}

export default EquationScreen;

const StyledEquation = styled.div`
  position: absolute;
  top: 55px;
  left: 160px;
  input {
    width: 260px;
    height: 115px;
    border: none;
    font-size: 20px;
    background: none;
  }
`;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkElement = ({ children, link, ...props }) => {
  return (
    <StyleLink to={link} {...props}>
      {children}
    </StyleLink>
  );
};

const StyleLink = styled(Link)`
  display: block;
  width: fit-content;
  padding: 5px 10px;
  background: #8fff00;
  border-radius: 10px;
  font-family: 'Fascinate';
  font-weight: 900;
  font-size: 24px;
  line-height: 1.3;
  color: #0500ff;
  text-decoration: none;
`;

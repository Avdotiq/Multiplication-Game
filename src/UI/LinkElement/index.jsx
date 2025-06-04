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
  padding: 10px 35px;
  background: #fffcb8;
  border-radius: 10px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  line-height: 1.3;
  color: #293450;
  text-decoration: none;
`;

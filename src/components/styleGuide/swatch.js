import React from 'react';
import styled from 'styled-components';

const Color = styled.div`
  width: 8em;
  height: 7em;
  padding: 1.5em;
  background: ${props=>props.code};
  color: #fff;
  margin-right: 0.8em;
  box-shadow: 0 8px 40px -15px ${props=>props.code}
`;

const Name = styled.label`
  display: block;
  margin-bottom: 0.5em;
  text-transform: uppercase;
`;

const Swatch = ({name, code}) => (
  <Color code={code}>
    <Name>{name}</Name>
    <span>{code}</span>
  </Color>
);

export default Swatch;

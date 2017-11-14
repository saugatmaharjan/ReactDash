import React from 'react';
import styled from 'styled-components';
import { Swatch } from '../components/styleGuide';

const Wrapper = styled.div`
  padding: 50px;
`;

const Colors = styled.section`
  display: flex;
  align-items: center;
  padding: 1em 0;
`;

const StyleGuide = () => (
  <Wrapper>
    <h1>STYLE GUIDE</h1>
    <h4>1. COLORS </h4>
    <Colors>
      <Swatch name="RED" code="#FF0000"/>
      <Swatch name="GREEN" code="#00FF00"/>
      <Swatch name="BLUE" code="#0000FF"/>
      <Swatch name="BLACK" code="#000000"/>
    </Colors>
    <h4>2. TYPOGRAPHY</h4>
    <h1>Heading one</h1>
    <h2>Heading two</h2>
    <h3>Heading three</h3>
    <h4>Heading four</h4>
    <h5>Heading five</h5>
    <h6>Heading six</h6>
    <p>Paragraph</p>
    <a>Anchor</a>
  </Wrapper>
)

export default StyleGuide;

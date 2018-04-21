import React from 'react';
import styled from 'styled-components';
import About from './about';
import Me from './me';

const WelcomeContainer = styled.div`
  display: flex;
  padding: 1em;
  flex-wrap: wrap;
  align-items: center;
`;

export default () => (
  <WelcomeContainer>
    <Me />
    <About />
  </WelcomeContainer>
);

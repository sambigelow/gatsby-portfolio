import React from 'react';
import WelcomeElement from './welcome-element';
import styled from 'styled-components';

const H2 = styled.h2`
  text-align: center;
  padding-top: 3em;

  @media (min-width: 561px) {
    padding-top: 0;
  }
`;

const About = () => (
  <WelcomeElement>
    <H2>About</H2>
    <p>
      I am a front end developer who is excited about the potential of the web.
      I am currently building delightful, performant user interfaces. I work
      with a team of smart developers to collect and display product information
      for ClickList, a billion dollar e-commerce site. Creating a consistent
      look and feel is my passion of mine and I believe the best way to
      accomplish that is through readable, maintainable and reusable code as
      well as regular and open communication.
    </p>
  </WelcomeElement>
);

export default About;

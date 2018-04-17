import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import ReactSVG from 'react-svg';
import './index.css';
import me from '../me.png';

const PageContainer = styled.div`
  max-width: 820px;
  margin: 0 auto;
`;

const WelcomeContainer = styled.div`
  display: flex;
  padding: 1em;
  flex-wrap: wrap;
  align-items: center;
`;

const WelcomeElement = styled.div`
  flex-basis: 1;
  width: 50%;
  min-width: 260px;
  flex-grow: 1;
`;

const H2 = styled.h2`
  text-align: center;
  padding-top: 3em;

  @media (min-width: 561px) {
    padding-top: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
`;

export default () => (
  <div>
    <Navbar />
    <PageContainer>
      <div style={{ textAlign: 'center' }}>
        <h1>Sam Bigelow</h1>
        <h5 style={{ marginTop: '-1.25em', marginLeft: '4em' }}>
          Software Developer
        </h5>
      </div>
      <ReactSVG path="../mail.svg" />
      <WelcomeContainer>
        <WelcomeElement style={{ textAlign: 'center' }}>
          <img src={me} style={{ maxWidth: '80%', margin: '0 auto' }} />
        </WelcomeElement>
        <WelcomeElement>
          <H2>About</H2>
          <p>
            I am an aspiring full stack developer, currently building
            delightful, performant user interfaces. I work with a team of
            brilliant developers to collect and display product information for
            ClickList, a billion dollar e-commerce site. Creating a consistent
            look and feel is a passion of mine and I believe the best way to
            accomplish that is through readable, maintainable and reusable code
            as well as regular and open communication.
          </p>
        </WelcomeElement>
      </WelcomeContainer>
    </PageContainer>
  </div>
);

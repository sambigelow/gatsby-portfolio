import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Welcome from '../components/welcome';
import Header from '../components/header';

import './index.css';

const PageContainer = styled.div`
  max-width: 820px;
  margin: 0 auto;
`;

export default () => (
  <div>
    <Navbar />
    <PageContainer>
      <Header />
      <Welcome />
    </PageContainer>
  </div>
);

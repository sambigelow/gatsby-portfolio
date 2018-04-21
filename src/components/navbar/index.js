import React from 'react';
import styled from 'styled-components';
import Navigation from './navigation';

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 820px;
  margin: 0 auto;
  padding: 0 16px;
  align-items: center;
  height: 2.5em;
`;

const H3 = styled.h3`
  margin-bottom: 0;
  color: #ffcc66;
`;

export default () => (
  <div style={{ backgroundColor: '#9DBCBC', marginBottom: '2em' }}>
    <HeaderContainer>
      <H3>SB</H3>
      {/* <Navigation /> */}
    </HeaderContainer>
  </div>
);

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

export default () => (
  <div style={{ backgroundColor: '#9DBCBC', marginBottom: '2em' }}>
    <HeaderContainer>
      <h3 style={{ marginBottom: 0, color: '#FFCC66' }}>SB</h3>
      {/* <Navigation /> */}
    </HeaderContainer>
  </div>
);

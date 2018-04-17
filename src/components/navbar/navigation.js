import React from 'react';
import styled from 'styled-components';

const NavigationList = styled.ul`
  list-style-type: none;
  margin-bottom: 0;
  text-align: right;
  font-size: 0.75rem;
`;

const NavLi = styled.li`
  display: inline;
`;

const NavLink = styled.a`
  text-decoration: none;
`;

const Navigation = () => (
  <NavigationList>
    <NavLi>
      <a href="#about">ABOUT</a>
    </NavLi>
    {' | '}
    <NavLi>
      <a href="#portfolio">PORTFOLIO</a>
    </NavLi>
  </NavigationList>
);

export default Navigation;

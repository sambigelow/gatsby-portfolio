import React from 'react';
import styled from 'styled-components';

const SvgWrapper = styled.svg`
  transform: scale(1.5);
  transition: all 0.2s;
  &:hover {
    transform: scale(2);
  }
`;

export default ({ children, link }) => (
  <a href={link}>
    <SvgWrapper
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-github"
    >
      {children}
    </SvgWrapper>
  </a>
);
